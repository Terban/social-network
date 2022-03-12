import {addNewMessageAC, updateNewMessageAC} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*function DialogsContainer(props) {
    const state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addNewMessageAC())
    }
    const updateNewMessage = (newMessageText) => {
        props.store.dispatch(updateNewMessageAC(newMessageText))
    }
    return (
        <Dialogs messagesPage={state.messagesPage} addMessage={addMessage} updateNewMessage={updateNewMessage}/>
    )
}*/

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addNewMessageAC())
        },
        updateNewMessage: (newMessageText) => {
            dispatch(updateNewMessageAC(newMessageText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;