import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
const CheckBox = ({isChecked}) => {
  if (isChecked) {
    return <Icon name="chevron-down" size={25} style={{opacity: 0.5}} />;
  } else {
    return <Icon name="angle-up" size={25} style={{opacity: 0.5}} />;
  }
};
export {CheckBox};
