import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TextInput, TouchableOpacity} from 'react-native';
import CardSection from '../constant/CardSection/CardSection';
import {connect} from 'react-redux';
import {Spinner} from '../constant/Spinner';
import {Dropdown} from 'react-native-material-dropdown';
import {Styles} from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {searchApiLocation} from '../redux/action/MyAction';
import {baseUrlLocation} from '../redux/action/MyAction';
const ScreenTwo = ({
  Ldata,
  loading,
  searchApiLocation,
  data,
  baseUrlLocation,
}) => {
  const [state, changeState] = useState('');
  const [text, stateChange] = useState('');

  useEffect(() => {
    searchApiLocation();
  }, []);

  const serchbtnClicked = () => {
    baseUrlLocation(text, state);
  };

  if (loading) {
    return <Spinner size="large" />;
  } else {
    return (
      <View>
        <View style={Styles.mainView}>
          <View style={Styles.upperView}>
            <Dropdown
              data={data}
              inputContainerStyle={Styles.inputCstyle}
              containerStyle={Styles.containerStyle}
              dropdownOffset={Styles.dropdwnOffset}
              valueExtractor={({id}) => id}
              labelExtractor={({name}) => name}
              onChangeText={text => stateChange(text)}
              label="Select City"
            />
          </View>
          <View>
            <View style={Styles.bottonView}>
              <TextInput
                placeholder="Search here"
                onChangeText={text => changeState(text)}
                style={Styles.textInput}
              />
              <TouchableOpacity onPress={() => serchbtnClicked()}>
                <Icon
                  name="search"
                  size={25}
                  style={Styles.iconSecond}
                  color="#32cd32"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={Styles.textStyle}>AdvanceSearch?</Text>
        <View style={Styles.dropDownView}>
          <Dropdown
            data={data}
            label="Select city"
            containerStyle={Styles.dropdownStyle}
            dropdownOffset={{top: 15}}
            inputContainerStyle={{borderBottomColor: 'transparent'}}
            valueExtractor={({id}) => id}
            labelExtractor={({name}) => name}
          />
        </View>
        <FlatList
          data={Ldata}
          keyExtractor={item => {
            item.id;
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CardSection Alldata={item} />}
        />
      </View>
    );
  }
};
const mapStateToProps = ({reduce1}) => {
  const {Ldata, loading, data} = reduce1;
  return {Ldata, loading, data};
};
export default connect(mapStateToProps, {searchApiLocation, baseUrlLocation})(
  ScreenTwo,
);
