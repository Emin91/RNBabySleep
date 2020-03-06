import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  imgView: {
    width: '100%',
    height: 100,
    paddingHorizontal: 6,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textView: {
    flex: 0.8,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text: {
    fontSize: 15,
    color: colors.WHITE,
  },
});

export default styles;
