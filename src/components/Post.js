import React from "react";
import { Text, ScrollView } from "react-native";
const Post = (props) => {
  return (
    <ScrollView>
      <Text style={{ padding: 10 }}>{props.post.title}</Text>
    </ScrollView>
  );
};
export default Post;
