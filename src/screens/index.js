import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import UsersHomeScreen from "./usersHome";
import UserScreen from "./user";
import PostsHomeScreen from './postsHome';
import PostScreen from './post';

const PostsStack = createStackNavigator();

function PostsStackScreen() {
  return (
    <PostsStack.Navigator>
      <PostsStack.Screen name="Posts List" component={PostsHomeScreen} />
      <PostsStack.Screen name="Post Detail" component={PostScreen} />
    </PostsStack.Navigator>
  );
}

const UsersStack = createStackNavigator();

function UsersStackScreen() {
  return (
    <UsersStack.Navigator>
      <UsersStack.Screen name="Users List" component={UsersHomeScreen} />
      <UsersStack.Screen name="User Detail" component={UserScreen} />
    </UsersStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Posts") {
              iconName = "file";
            } else if (route.name === "Users") {
              iconName = "users";
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Users" component={UsersStackScreen} options={{ headerShown: false }}  />
        <Tab.Screen name="Posts" component={PostsStackScreen} options={{ headerShown: false }}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
