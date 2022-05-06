import React from "react";
import Posts from "../components/Posts";
const PostsHomeScreen = (props) => {
  return <Posts navigation={props.navigation} />;
};
PostsHomeScreen.navigationOptions = {
  title: "Post List",
};
export default PostsHomeScreen;
