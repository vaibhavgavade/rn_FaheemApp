import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ScreenOne, ScreenTwo} from './AllScreen';
import {AppFont} from './src/Screen/constant/AppFont';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AppStack = createStackNavigator(
  {
    one: {
      screen: ScreenOne,
      navigationOptions: {
        title: 'Find a tutor',
        headerRight: (
          <Icon
            name="arrow-right"
            size={25}
            color="white"
            style={{marginRight: 10}}
          />
        ),
        headerLeft: (
          <Icon
            name="ellipsis-v"
            size={25}
            color="white"
            style={{marginLeft: 10}}
          />
        ),
      },
    },
    Two: {
      screen: ScreenTwo,
      navigationOptions: {
        title: 'Search Result',
        headerRight: (
          <Icon
            name="arrow-right"
            size={25}
            color="white"
            style={{marginRight: 10}}
          />
        ),
        // headerLeft: (
        //   <Icon
        //     name="ellipsis-v"
        //     size={25}
        //     color="white"
        //     style={{marginLeft: 10}}
        //   />
        // ),
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffa500',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: AppFont.aldrich,
        alignSelf: 'center',
      },
    },
  },
);
export default createAppContainer(AppStack);
