import withAuthRedirect from "../../hoc/withAuthRedirect";

function Settings() {
    return (
        <div>
            <h1>Settings</h1>
        </div>
    )
}

export default withAuthRedirect(Settings) ;