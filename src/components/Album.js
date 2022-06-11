import React from "react";
import { Text, ScrollView } from "react-native";
const Album = (props) => {
  return (
    <ScrollView>
      <Text
        style={{
          backgroundColor: "#E0F3F4",
          margin: 10,
          padding: 20,
          borderRadius: 10,
          overflow: "hidden",
          color: "#4A9797",
          fontWeight: "bold",
        }}
      >
        {props.album.title}
      </Text>
    </ScrollView>
  );
};
export default Album;
