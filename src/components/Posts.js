import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Post from "./Post";
const Posts = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20/")
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);
  return (
    <View style={{ padding: 20 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Post Detail", {
                  id: item.id,
                })
              }
            >
              <View>
                <Post post={item} />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
export default Posts;
