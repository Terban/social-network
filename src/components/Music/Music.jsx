import withAuthRedirect from "../../hoc/withAuthRedirect";

function Music() {
    return (
        <div>
            <h1>Music</h1>
        </div>
    )
}

export default withAuthRedirect(Music) ;