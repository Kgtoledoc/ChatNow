import React, { Component } from 'react';
import {
    Text,
    View, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

class MainScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Awesome chat</Text>
                    
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Get help!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#36c4c0'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flex: 2,
        justifyContent: '2'
    },
    button: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        borderRadius: 150,
        borderWidth: 10,
        borderColor: '#8e3429',
        backgroundColor: '#cb3b27',
        padding: 30,
        elevation: 5,
        shadowColor: '#cb3b27',
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 0.6,
        shadowRadius: 0,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 60,
        fontWeight: '200',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    }

})

export default MainScreen;