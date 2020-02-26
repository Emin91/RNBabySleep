import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colorConstans';

const styles = StyleSheet.create({
  itemRows: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: colors.GREY_OPACITY,
  },
  iconView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35 / 2,
    backgroundColor: colors.WHITE,
  },
  number: {
    fontSize: 20,
    color: colors.BLACK,
  },
  textView: {
    flex: 0.8,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 15,
    color: colors.WHITE,
  },
  time: {
    fontSize: 12,
    color: colors.GREY_OPACITY_TWO,
    paddingBottom: 2,
  },
});

export default styles;
