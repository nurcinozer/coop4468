import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
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
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text style={{ alignItems: "center", fontSize: 25 }}>
            {post.title}
          </Text>
          <Text>Body: {post.body}</Text>
        </View>
      )}
    </View>
  );
};
PostScreen.navigationOptions = {
  title: "Post Details",
};
export default PostScreen;
