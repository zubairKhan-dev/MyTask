/* eslint-disable */
import React, { Component } from 'react';
import ImageScreen from "./screens/imageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import DetailScreen from "./screens/detailScreen";
import { Provider } from 'react-redux';
import configureStore from "./store/configureStore";

const Stack = createNativeStackNavigator();

const App =(props)=> {
  const store = configureStore()

  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ImageScreen" component={ImageScreen} options={{ title: 'My Images' }}/>
          <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Detail Screen' }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      // <ImageScreen />
  );
};

export default App




