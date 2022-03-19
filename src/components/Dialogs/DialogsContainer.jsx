import {addNewMessage, updateNewMessage} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage,
})

export const DialogsContainer = connect(mapStateToProps, {addNewMessage, updateNewMessage})
(withAuthRedirect(Dialogs))
