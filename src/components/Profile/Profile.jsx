import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addNewPost={props.addNewPost}/>
        </div>
    )
}

export default Profile;