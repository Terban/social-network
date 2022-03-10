import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}
                     addNewPost={props.addNewPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;