import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
const UserScreen = (props) => {
  const id = props.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [userCompany, setUserCompany] = useState([]);
  const [todos, setTodos] = useState([]);
  getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        console.log(json);
        setUserAddress(json.address);
        setUserCompany(json.company);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  getTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id + "/todos")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
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
            <View style={styles.viewStyle}>
              <Text style={styles.textLG}>{user.name}</Text>
              <Text style={styles.textSM}>Phone: {user.phone}</Text>
              <Text style={styles.textSM}>Website: {user.website}</Text>
              <Text style={styles.textSM}>
                Address: {userAddress.street}, {userAddress.suite},{" "}
              </Text>
              <Text style={styles.textSM}>
                {userAddress.city}, {userAddress.zipcode}
              </Text>
            </View>
            <View style={styles.viewStyle2}>
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
            </View>
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
