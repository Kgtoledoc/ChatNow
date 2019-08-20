import { updateComposeMessage, sendMessage} from '../actions'
import ChatScreen from '../components/ChatScreen';
import { statement } from '@babel/template';
const mapStateToProps =(state) => (
    {
        messages: state.messages,
        composingMessage: state.composingMessage
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        onComposeMessaageUpdate: (value) => {
            dispatch(updateComposeMessage(value))
        },
        onSendMessage: () => {
            dispatch(sendMessage(new Date()))
        }
    }
)
    
    
export default connect( mapStateToProps, mapDispatchToProps)(ChatScreen)