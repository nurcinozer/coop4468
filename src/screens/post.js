import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import axios from "axios";

const PostScreen = (props) => {
  const id = props.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  getPost = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setPost(json);
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  getComments = () => {
    // fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setComments(json);
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getPost();
    getComments();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <View style={styles.viewStyle}>
              <Text style={styles.textLG}>{post.title}</Text>
              <Text style={styles.textSM}>Body: {post.body}</Text>
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.textLG}>Comments</Text>
              {comments.map((comment, index) => (
                <View
                  key={index}
                  style={{
                    borderBottomColor: "#3D316F",
                    borderBottomWidth: 1,
                    marginVertical: 10,
                  }}
                >
                  <Text style={styles.textMD}>Name:</Text>
                  <Text style={styles.textSM}>{comment.name}</Text>
                  <Text style={styles.textMD}>Email:</Text>
                  <Text style={styles.textSM}>{comment.email}</Text>
                  <Text style={styles.textMD}>Body:</Text>
                  <Text style={styles.textSM}>{comment.body}</Text>
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
PostScreen.navigationOptions = {
  title: "Post Details",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "#fff",
    // marginHorizontal,
  },
  viewStyle: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FAFAFD",
    margin: 10,
    padding: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  viewStyle2: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
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
  textMD: {
    alignItems: "center",
    fontSize: 18,
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
