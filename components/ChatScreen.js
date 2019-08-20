import React,{Component} from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import MessageBubble from './MessageBubble'

let scrollWindow
let scrollHeight
let apiPollIntervalId

class ChatScreen extends Component {
    
    constructor(props) {
        super(props)
        this._fetchResponses = this._fetchResponses.bind(this);
    }

    componentDidMount(){
        apiPollIntervalId = setInterval(this._fetchResponses, 5000)
    }

    componentWillUnmount(){
        clearInterval(apiPollIntervalId)
    }

    _fetchResponses(){
        fetch('api')
            .then(response => response.json())
            .then(data => {
                if(data && data.message) {
                    this.props.onReceiveMessage(data)
                }
            })
    }
    render() {
        const bubbles = this.props.messages.map((m, i) => <MessageBubble {...m} key={i}></MessageBubble>)

        return (
            <View behavior="padding" style={styles.container}>
                <ScrollView
                    style={styles.bubbleContainer}
                    ref={scrollview => { scrollWindow = scrollview }}
                    onLayout={event => {
                        scrollHeight = event.nativeEvent.layout.height
                    }}
                    onContentSizeChange={(width, height) => {
                        if (scrollHeight < height) {
                            scrollWindow.scrollTo({
                                y: height - scrollHeight
                            })
                        }
                    }}>
                    {bubbles}
                </ScrollView>

                <View style={styles.messageBoxContainer}>
                    <TextInput
                        style={styles.messageBox}
                        value={this.props.composingMessage}
                        onChangeText={this.props.onComposeMessageUpdate}
                        returnKeyType="send"
                        onSubmitEdition={this.props.onSendMessage}></TextInput>
                    <TouchableOpacity onPress={this.props.onSendMessage}>
                        <Text style={styles.sendButton}>Send</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    bubbleContainer: {
        flex: 1
    },
    messageBoxContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#cccccc',
        backgroundColor: '#eeeeee',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    messageBox: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dddddd',
        backgroundColor: '#ffffff',
        paddingHorizontal: 5,
    },
    sendButton: {
        color: 'blue',
        marginLeft: 10,
        marginRight: 5,
        fontSize: 16,
        fontWeight: '500'
    }
})

export default ChatScreen;