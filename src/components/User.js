import React from "react";
import { Text, ScrollView } from "react-native";
const User = (props) => {
  return (
    <ScrollView>
      <Text
        style={{
          backgroundColor: "#FFADA6",
          margin: 10,
          padding: 20,
          borderRadius: 10,
          overflow: "hidden",
          color: "#FF4B3A",
          fontWeight: "bold"
        }}
      >
        {props.user.name}
      </Text>
    </ScrollView>
  );
};
export default User;
