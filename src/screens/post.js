import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
const PostScreen = (props) => {
  const id = props.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
        console.log(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    console.log(id);
    setLoading(true);
    getPost();
  }, []);
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.viewStyle}>
          <Text style={styles.textLG}>{post.title}</Text>
          <Text style={styles.textSM}>Body: {post.body}</Text>
        </View>
      )}
    </View>
  );
};
PostScreen.navigationOptions = {
  title: "Post Details",
};
const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FAFAFD",
    margin: 10,
    padding: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  textLG: {
    alignItems: "center",
    fontSize: 25,
    color: "#3D316F",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  textSM: {
    fontSize: 16,
    color: "#3D316F",
    fontWeight: "200",
    paddingBottom: 10,
  },
});
export default PostScreen;
