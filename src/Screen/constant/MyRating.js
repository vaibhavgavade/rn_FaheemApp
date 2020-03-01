import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {img} from '../asset/Image/Myimages';
const MyRating = ({ratingObj}) => {
  let stars = [];
  for (i = 1; i <= 5; i++) {
    let path = img.checkImg;
    if (ratingObj < i) {
      path = img.unchekImg;
    }
    stars.push(<Image style={styles.image} source={path} />);
  }
  return <View style={styles.container}>{stars}</View>;
};
export {MyRating};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  image: {
    width: 20,
    height: 20,
  },
});
