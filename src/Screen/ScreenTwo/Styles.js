import {AppFont} from '../constant/AppFont';
import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
  dropdownStyle: {
    width: '90%',
    bottom: 10,
    fontSize: 18,
    marginLeft: 18,
    paddingTop: 12,
  },
  textInput: {
    height: 41,
    width: 150,
    marginLeft: 20,
    fontFamily: AppFont.regular,
    fontSize: 15,
  },
  textStyle: {
    alignSelf: 'flex-end',
    marginRight: 20,
    fontFamily: AppFont.bold,
    fontSize: 20,
    marginTop: 10,
  },
  dropdwn: {
    width: '90%',
    bottom: 10,
    fontSize: 18,
    marginLeft: 18,
  },
  upperView: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    height: 51,
    marginTop: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  bottonView: {
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 10,
    height: 51,
    borderRadius: 5,
    marginRight: 10,
  },
  dropDownView: {
    borderColor: '#000',
    borderWidth: 1,
    height: 51,
    marginTop: 15,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  iconSecond: {
    paddingTop: 10,
    width: 40,
    paddingLeft: 10,
  },
  inputCstyle: {
    borderBottomColor: 'transparent',
  },
  containerStyle: {
    paddingTop: 14,
    paddingLeft: 10,
  },
  dropdwnOffset: {
    top: 1,
  },
});
