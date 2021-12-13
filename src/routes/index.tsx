import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './TabRoutes';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screen/home/HomeScreen';
import NoteScreen from '../screen/home/Notes';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //   initialRouteName="TabRoutes"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NoteScreen" component={NoteScreen} />
        {/* <Stack.Screen name="TabRoutes" component={TabRoutes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
