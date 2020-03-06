import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  headerView: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: 'MBold',
    color: colors.PELOROUS,
  },
  textView: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontFamily: 'SamsungSans-Regular',
    color: colors.WHITE,
  },
});

export default styles;
