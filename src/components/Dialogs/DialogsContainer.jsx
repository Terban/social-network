import {addNewMessage} from "../../redux/messages-reducer.ts";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage,
})

export const DialogsContainer =  compose(
    connect(mapStateToProps, {addNewMessage}),
    withAuthRedirect,
)(Dialogs)