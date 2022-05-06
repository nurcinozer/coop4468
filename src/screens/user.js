import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
const UserScreen = (props) => {
  const id = props.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [userCompany, setUserCompany] = useState([]);
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
  useEffect(() => {
    console.log(id);
    setLoading(true);
    getUser();
  }, []);
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
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
      )}
    </View>
  );
};
UserScreen.navigationOptions = {
  title: "User Details",
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
export default UserScreen;
