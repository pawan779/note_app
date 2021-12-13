// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import PhotoScreen from '../screen/PhotoScreen';
// import VideoScreen from '../screen/VideoScreen';
// import {Image, Text} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Color from '../constant/Color';

// const Tab = createBottomTabNavigator();

// export default function TabRoutes() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: {
//           height: 70,
//           backgroundColor: '#000',
//           justifyContent: 'center',
//           paddingBottom: 10,
//         },
//         // tabBarShowLabel: false,
//       }}
//       sceneContainerStyle={{backgroundColor: '#000'}}>
//       <Tab.Screen
//         name="Photo"
//         component={PhotoScreen}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Icon
//               name="images"
//               color={focused ? Color.theme : Color.borderDarkColor}
//               size={25}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Video"
//         component={VideoScreen}
//         options={{
//           tabBarIcon: ({focused}) => (
//             <Icon
//               name="video"
//               color={focused ? Color.theme : Color.borderDarkColor}
//               size={25}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }
