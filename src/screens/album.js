import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text as TextNative,
  Center,
  HStack,
  Stack,
} from "native-base";
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
      .get(
        "https://jsonplaceholder.typicode.com/albums/" +
          id +
          "/photos?_limit=20/"
      )
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
            <Box alignItems="center" margin={3}>
              <Box
                width="full"
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "gray.700",
                }}
                _web={{
                  shadow: 2,
                  borderWidth: 0,
                }}
                _light={{
                  backgroundColor: "gray.50",
                }}
              >
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      Album title:
                    </Heading>
                    <TextNative
                      fontSize="md"
                      _light={{
                        color: "violet.500",
                      }}
                      _dark={{
                        color: "violet.400",
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      {album.title}
                    </TextNative>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            <Box alignItems="center" marginX={3}>
              {photos.map((photo) => (
                <Box
                  margin={3}
                  width="full"
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                  _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                  }}
                  _web={{
                    shadow: 2,
                    borderWidth: 0,
                  }}
                  _light={{
                    backgroundColor: "gray.50",
                  }}
                >
                  <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image
                        source={{
                          uri: photo.url,
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                    <Center
                      bg="violet.500"
                      _dark={{
                        bg: "violet.400",
                      }}
                      _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs",
                      }}
                      position="absolute"
                      bottom="0"
                      px="3"
                      py="1.5"
                    >
                      Title of photo: {photo.title}
                    </Center>
                  </Box>
                  {/* <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {user.name}
                    </Heading>
                    <TextNative
                      fontSize="xs"
                      _light={{
                        color: "violet.500",
                      }}
                      _dark={{
                        color: "violet.400",
                      }}
                      fontWeight="500"
                      ml="-0.5"
                      mt="-1"
                    >
                      {user.email}
                    </TextNative>
                  </Stack>
                  <TextNative fontWeight="400">
                    {userAddress.street}, {userAddress.suite},{" "}
                    {userAddress.city}, {userAddress.zipcode}
                  </TextNative>
                  <HStack alignItems="flex-start" flexDirection="column">
                    <HStack alignItems="center">
                      <TextNative
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                        fontWeight="400"
                      >
                        Phone: {user.phone}
                      </TextNative>
                    </HStack>
                    <HStack alignItems="center">
                      <TextNative
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                        fontWeight="400"
                      >
                        Website: {user.website}
                      </TextNative>
                    </HStack>
                    <HStack alignItems="center">
                      <TextNative
                        color="coolGray.600"
                        _dark={{
                          color: "warmGray.200",
                        }}
                        fontWeight="400"
                      >
                        Company: {userCompany.name}
                      </TextNative>
                    </HStack>
                  </HStack>
                </Stack> */}
                </Box>
              ))}
            </Box>
            {/* <View style={styles.viewStyle2}>
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
            </View> */}
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
