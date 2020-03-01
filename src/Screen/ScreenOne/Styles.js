import {StyleSheet} from 'react-native';
import {AppFont} from '../constant/AppFont';
export const Styles = StyleSheet.create({
  mainText: {
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: 'bold',
    fontFamily: AppFont.bold,
    fontSize: 20,
  },
  textStyle: {
    marginEnd: 5,
    fontFamily: AppFont.regular,
    fontSize: 18,
  },
  apppropriate: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  Secondtext: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
    color: '#ffa500',
    fontFamily: AppFont.bold,
  },
  textView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  ContainerStyle: {
    width: '90%',
    bottom: 10,
    alignSelf: 'center',
    paddingTop: 10,
  },
  thirdView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 51,
    borderWidth: 1,
    borderRadius: 5,
  },
  textInputStyle: {
    fontSize: 15,
    fontFamily: AppFont.regular,
    borderBottomColor: 'black',
    borderBottomWidth: 0.4,
    width: 318,
    paddingLeft: 5,
  },
  image: {
    height: 30,
    width: 30,
  },
  AdvanceTExt: {
    marginLeft: 18,
    fontFamily: AppFont.bold,
    fontSize: 20,
    marginTop: 10,
  },
  upperView: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
    height: 51,
    marginTop: 15,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});
