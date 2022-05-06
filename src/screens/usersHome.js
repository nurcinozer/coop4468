import React from "react";
import Users from "../components/Users";
const UsersHomeScreen = (props) => {
  return <Users navigation={props.navigation} />;
};
UsersHomeScreen.navigationOptions = {
  title: "User List",
};
export default UsersHomeScreen;
