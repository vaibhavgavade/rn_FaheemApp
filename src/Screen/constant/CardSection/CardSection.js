import React from 'react';
import {View, Text, Image,} from 'react-native';
import {Shadow} from '../Shadow';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {MyRating} from '../MyRating';
import {SubListView} from '../SubjListView';
import {Styles} from './Styles';
import {PerHourList} from '../PerHourList';
import {AppFont} from '../AppFont';
const CardSection = ({Alldata}) => {
  const {
    no_of_ratings,
    qualification,
    first_name,
    last_name,
    subjects,
    photo,
  } = Alldata;
  return (
    <Shadow>
      <View style={Styles.container}>
        <View>
          <View style={Styles.Secondview}>
            <View style={Styles.viewStyle}>
              <PerHourList />
              <Text
                style={{
                  fontFamily: AppFont.regular,
                  fontSize: 15,
                }}>
                per hour
              </Text>
            </View>
            <View style={Styles.viewStyle}>
              <View style={Styles.fView}>
                <Text style={Styles.Ftext}>{first_name}</Text>
                <Text> {'  '}</Text>
                <Text style={{fontFamily: AppFont.bold, fontSize: 15}}>
                  {last_name}
                </Text>
              </View>
              <MyRating ratingObj={no_of_ratings} />
            </View>
          </View>
          <View style={Styles.bStudentV}>
            <Text style={Styles.text}>Batchlor-Student-{qualification}</Text>
            <Icon
              name="user-graduate"
              size={20}
              color="#228b22"
              style={Styles.icon}
            />
          </View>
        </View>
        <Image source={{uri: photo}} style={Styles.imgStyle} />
      </View>
      <View style={Styles.lastView} />
      <SubListView sub={subjects} />
      <Icon name="chevron-down" size={20} style={{alignSelf: 'center'}} />
    </Shadow>
  );
};
export default CardSection;
