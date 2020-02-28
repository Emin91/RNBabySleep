import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colorConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  textsView: {
    flex: 0.45,
    justifyContent: 'space-around',
    // backgroundColor: colors.GREEN,
  },
  btnsView: {
    flex: 0.55,
    justifyContent: 'space-around',
    // backgroundColor: colors.PELOROUS,
  },
  title: {
    fontSize: 20,
    paddingLeft: 10,
    // paddingBottom: 20,
    color: colors.PELOROUS,
  },
  texts: {
    fontSize: 15,
    paddingLeft: 10,
    color: colors.WHITE,
  },
  btn: {
    width: '80%',
    height: 80,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.GREEN,
  },
  btnText: {
    fontSize: 12,
    color: colors.WHITE,
  },
});

export default styles;
