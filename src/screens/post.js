import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import axios from "axios";
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
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                      source={{
                        uri: "https://images.unsplash.com/photo-1603796846097-bee99e4a601f",
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
                    Post Detail
                  </Center>
                </Box>
                <Stack p="4" space={3}>
                  <Stack space={2}>
                    <Heading size="md" ml="-1">
                      {post.title}
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
                      {post.body}
                    </TextNative>
                  </Stack>
                </Stack>
              </Box>
            </Box>
            {/* <View style={styles.viewStyle}>
              <Text style={styles.textLG}>{post.title}</Text>
              <Text style={styles.textSM}>Body: {post.body}</Text>
            </View> */}
            {/* <View style={styles.viewStyle2}>
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
            </View> */}
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
                      Comments of {post.title}
                    </Heading>
                  </Stack>
                  {comments.map((comment, index) => (
                    <HStack key={index} alignItems="flex-start" flexDirection="column" borderBottomColor="coolGray.200" borderBottomWidth="1" paddingBottom={3}>
                      <HStack alignItems="center">
                        <TextNative
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                          fontWeight="400"
                        >
                          Name: {comment.name}
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
                          Email: {comment.email}
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
                          Body: {comment.body}
                        </TextNative>
                      </HStack>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            </Box>
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
