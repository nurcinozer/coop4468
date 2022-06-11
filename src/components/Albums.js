import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Album from "./Album";
const Albums = (props) => {
  const [isLoading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  getAlbums = () => {
    fetch("https://jsonplaceholder.typicode.com/albums?_limit=20/")
      .then((response) => response.json())
      .then((json) => setAlbums(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getAlbums();
  }, []);
  return (
    <View style={{ display: "flex", backgroundColor: "#fff", height: "100%" }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={albums}
          keyExtractor={({ id }) => id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Album Detail", {
                  id: item.id,
                })
              }
            >
              <View>
                <Album album={item} />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
export default Albums;
