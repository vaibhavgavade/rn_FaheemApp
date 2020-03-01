import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AppFont} from './AppFont';
const MyButton = ({onPress, children}) => {
  const {buttonStyle, textStyle} = Styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#ffa500',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    height: 41,
    width: 300,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
    color: 'white',
    paddingTop: 5,
    fontFamily: AppFont.bold,
  },
});
export {MyButton};
