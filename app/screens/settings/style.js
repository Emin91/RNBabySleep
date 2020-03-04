import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  headerOne: {
    flex: 0.1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTwo: {
    flex: 0.1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sliderRow: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: colors.GREY_OPACITY_THREE,
  },
  sliderRowTwo: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.GREY_OPACITY_THREE,
  },
  textsView: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: colors.WHITE,
  },
  sliderView: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.WHITE,
  },
});

export default styles;
