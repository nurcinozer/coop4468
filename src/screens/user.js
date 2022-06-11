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

const UserScreen = (props) => {
  const id = props.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [userCompany, setUserCompany] = useState([]);
  const [todos, setTodos] = useState([]);
  getUser = () => {
    // fetch("https://jsonplaceholder.typicode.com/users/" + id)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setUser(json);
    //     console.log(json);
    //     setUserAddress(json.address);
    //     setUserCompany(json.company);
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        setUser(response.data);
        setUserAddress(response.data.address);
        setUserCompany(response.data.company);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  getTodos = () => {
    // fetch("https://jsonplaceholder.typicode.com/users/" + id + "/todos")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setTodos(json);
    //   })
    //   .catch((error) => console.error(error))
    //   .finally(() => setLoading(false));
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id + "/todos")
      .then((response) => {
        setTodos(response.data);
      });
  };
  useEffect(() => {
    setLoading(true);
    getUser();
    getTodos();
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
                        uri: "https://images.unsplash.com/photo-1454923634634-bd1614719a7b",
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
                    User Detail
                  </Center>
                </Box>
                <Stack p="4" space={3}>
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
                </Stack>
              </Box>
            </Box>
            {/* <View style={styles.viewStyle}>
              <Text style={styles.textLG}>{user.name}</Text>
              <Text style={styles.textSM}>Phone: {user.phone}</Text>
              <Text style={styles.textSM}>Website: {user.website}</Text>
              <Text style={styles.textSM}>
                Address: {userAddress.street}, {userAddress.suite},{" "}
              </Text>
              <Text style={styles.textSM}>
                {userAddress.city}, {userAddress.zipcode}
              </Text>
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
                      Todo List of {user.name}
                    </Heading>
                  </Stack>
                  {todos.map((todo) => (
                    <HStack alignItems="flex-start" flexDirection="column">
                      <HStack alignItems="center">
                        <TextNative
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                          fontWeight="400"
                        >
                          Title: {todo.title}
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
                          Completed:
                        </TextNative>
                        <TextNative
                          color={todo.completed.toString() === "true" ? "green.500" : "red.500"}
                          _dark={{
                            color: "warmGray.200",
                          }}
                          fontWeight="400"
                        >
                          {""} {todo.completed.toString()}
                        </TextNative>
                      </HStack>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            </Box>
            {/* <View style={styles.viewStyle2}>
              <Text style={styles.textLG}>Todos</Text>
              {todos.map((todo, index) => (
                <View
                  key={index}
                  style={{
                    borderBottomColor: "#3D316F",
                    borderBottomWidth: 1,
                    marginVertical: 10,
                  }}
                >
                  <Text style={styles.textMD}>Title:</Text>
                  <Text style={styles.textSM}>{todo.title}</Text>
                  <Text style={styles.textMD}>Completed:</Text>
                  <Text style={styles.textSM}>{todo.completed.toString()}</Text>
                </View>
              ))}
            </View> */}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
UserScreen.navigationOptions = {
  title: "User Details",
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
  textMD: {
    alignItems: "center",
    fontSize: 18,
    color: "#3D316F",
    fontWeight: "bold",
    paddingBottom: 10,
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
});
export default UserScreen;
