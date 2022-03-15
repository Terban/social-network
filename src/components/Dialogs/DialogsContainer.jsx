import {addNewMessage, updateNewMessage} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const DialogsContainer = connect(mapStateToProps, {addNewMessage, updateNewMessage})(Dialogs)

export default DialogsContainer;