import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

const AlbumScreen = (props) => {
  const id = props.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [album, setAlbum] = useState([]);
  const [photos, setPhotos] = useState([]);
  getAlbum = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums/" + id)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setAlbum(json);
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
    axios
      .get("https://jsonplaceholder.typicode.com/albums/" + id)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  getPhotos = () => {
    // fetch("https://jsonplaceholder.typicode.com/albums/" + id + "/photos")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setPhotos(json);
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
    axios
      .get("https://jsonplaceholder.typicode.com/albums/" + id + "/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getAlbum();
    getPhotos();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <View style={styles.viewStyle}>
              <Text style={styles.textLG}>{album.title}</Text>
            </View>
            <View style={styles.viewStyle2}>
              <Text style={styles.textLG}>Photos</Text>
              {photos.map((photo, index) => (
                <View
                  key={index}
                  style={{
                    borderBottomColor: "#3D316F",
                    borderBottomWidth: 1,
                    marginVertical: 10,
                  }}
                >
                  <Text style={styles.textMD}>Title:</Text>
                  <Text style={styles.textSM}>{photo.title}</Text>
                </View>
              ))}
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
AlbumScreen.navigationOptions = {
  title: "Album Detail",
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
export default AlbumScreen;
