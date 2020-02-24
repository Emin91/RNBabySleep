import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colorConstans';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  imgView: {
    width: '100%',
    height: 180,
    backgroundColor: 'pink',
  },
  img: {
    width: '100%',
    height: 180,
  },
  imgTitleView: {
    flex: 0.16,
    justifyContent: 'space-between',
    paddingLeft: 8,
    // backgroundColor: 'blue',
  },
  imgTitleOne: {
    fontSize: 16,
    color: colors.GREY_OPACITY_TWO,
  },
  imgTitleTwo: {
    fontSize: 25,
    color: colors.WHITE,
  },
  freeBtnView: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    // backgroundColor: 'orange',
  },
  touchableBtn: {
    width: '50%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#456',
  },
  freeBtnBg: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#285',
  },
  freeBtnText: {
    fontSize: 20,
    color: colors.WHITE,
  },
  devider: {
    width: '90%',
    height: 10,
    marginTop: 8,
    backgroundColor: colors.GREY_OPACITY,
  },
});

export default styles;
