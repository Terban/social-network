import {addNewMessage, updateNewMessage} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
})

export const DialogsContainer = connect(mapStateToProps, {addNewMessage, updateNewMessage})(Dialogs)
