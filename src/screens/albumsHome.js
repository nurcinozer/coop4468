import React from "react";
import Albums from "../components/Albums";
const AlbumsHomeScreen = (props) => {
  return <Albums navigation={props.navigation} />;
};
AlbumsHomeScreen.navigationOptions = {
  title: "Album List",
};
export default AlbumsHomeScreen;
