import {AppFont} from '.././AppFont';
import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Secondview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fView: {
    flexDirection: 'row',
  },
  Ftext: {
    paddingLeft: 10,
    fontFamily: AppFont.bold,
    fontSize: 15,
  },
  bStudentV: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'flex-end',
  },
  text: {
    alignSelf: 'center',
    fontFamily: AppFont.regular,
    fontSize: 15,
  },
  icon: {
    marginLeft: 5,
  },
  imgStyle: {
    height: 80,
    width: 80,
    backgroundColor: '#fff0f5',
    borderRadius: 40,
    justifyContent: 'space-between',
  },
  lastView: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    opacity: 0.5,
    marginTop: 5,
  },
});
