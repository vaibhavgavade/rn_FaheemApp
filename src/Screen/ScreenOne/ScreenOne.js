import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, ScrollView} from 'react-native';
import {searchApiLocation} from '../redux/action/MyAction';
import {baseUrlLocation} from '../redux/action/MyAction';
import {connect} from 'react-redux';
import {MyButton} from '../constant/Button';
import {Dropdown} from 'react-native-material-dropdown';
import {Styles} from './Styles';
import {Ddata} from './constData';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ScreenOne = ({navigation, data, searchApiLocation, baseUrlLocation}) => {
  const [text, changeText] = useState('');
  const [Myext, changeMyText] = useState('');
  useEffect(() => {
    searchApiLocation();
  }, []);

  const cutAllText = () => {
    console.log('cut text funciton called');
    Myext = '';
  };

  const validateSearch = () => {
    if (text == '') {
      alert('Enter course name');
    } else if (Myext == '') {
      alert('Select City');
    } else {
      baseUrlLocation(text, Myext);
      navigation.navigate('Two');
    }
  };
  return (
    <Scroll View>
      <Text style={Styles.mainText}>Compare best teacher and compare</Text>
      <Text style={Styles.apppropriate}>most appropriate</Text>
      <Text style={Styles.Secondtext}>Here is best tutor in</Text>
      <View style={Styles.textView}>
        <Text style={Styles.textStyle}>Engineering</Text>
        <Text style={Styles.textStyle}>|</Text>
        <Text style={Styles.textStyle}>Science</Text>
        <Text style={Styles.textStyle}>|</Text>
        <Text style={Styles.textStyle}>Law</Text>
        <Text style={Styles.textStyle}>|</Text>
        <Text style={Styles.textStyle}>Medicine</Text>
      </View>
      <View style={Styles.upperView}>
        <Dropdown
          data={Object.keys(data).length > 0 ? data : Ddata}
          label="Select city"
          valueExtractor={({id}) => id}
          labelExtractor={({name}) => name}
          inputContainerStyle={{borderBottomColor: 'transparent'}}
          containerStyle={Styles.ContainerStyle}
          onChangeText={text => changeText(text)}
          dropdownOffset={{top: 15}}
        />
      </View>
      <View style={Styles.thirdView}>
        <TextInput
          style={Styles.textInputStyle}
          placeholder="Search course or test name"
          onChangeText={text => changeMyText(text)}
        />
        <TouchableOpacity
          style={{marginTop: 8, marginRight: 10}}
          onPress={() => cutAllText()}>
          <Icon size={30} name={'times'} />
        </TouchableOpacity>
      </View>
      <Text style={Styles.AdvanceTExt}>Advance Search?</Text>
      <MyButton onPress={() => validateSearch()}>
        <Text>Search</Text>
      </MyButton>
    </Scroll>
  );
};
const mapStateToProps = ({reduce1}) => {
  const {data} = reduce1;
  return {data};
};
export default connect(mapStateToProps, {baseUrlLocation, searchApiLocation})(
  ScreenOne,
);
