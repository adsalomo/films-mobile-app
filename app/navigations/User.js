import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Movie from "../screens/Movie";

const movieNavigator = createStackNavigator(
  {
    Movie: {
      screen: Movie,
      navigationOptions: ({ navigation }) => ({
        title: "Cuevana 3",
        //header: null,
      }),
    },
  },
  {
    initialRouteName: "Movie",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#141a32",
      },
      headerTintColor: "#007bff",
    },
  }
);

const baseStack = createSwitchNavigator(
  {
    Movie: movieNavigator,
  },
  {
    initialRouteName: "Movie",
  }
);

export default createAppContainer(baseStack);
