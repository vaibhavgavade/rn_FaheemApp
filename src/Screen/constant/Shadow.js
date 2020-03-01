import React from 'react';
import {View} from 'react-native';

const Shadow = props => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#ffffff',
      margin: 15,
      padding: 10,
      borderRadius: 10,
      shadowColor: '#ffa500',
      shadowOffset: {width: 1, height: 5},
      shadowOpacity: 0.5,
      shadowRadius: 6,
      elevation: 10,
    }}>
    {props.children}
  </View>
);
export {Shadow};
