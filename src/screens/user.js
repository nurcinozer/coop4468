import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
const UserScreen = (props) => {
  const id = props.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  getUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        console.log(json);
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
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text style={{ alignItems: "center", fontSize: 25 }}>
            {user.name}
          </Text>
          <Text>Phone: {user.phone}</Text>
          <Text>Website: {user.website}</Text>
        </View>
      )}
    </View>
  );
};
UserScreen.navigationOptions = {
  title: "User Details",
};
export default UserScreen;
