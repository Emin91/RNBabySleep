import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.GREY,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  itemViews: {
    marginBottom: 20,
  },
  textsView: {
    borderBottomWidth: 0.2,
    borderBottomColor: colors.GREY_OPACITY,
    height: 60,
    justifyContent: 'center',
  },
  texts: {
    fontSize: 20,
    color: colors.WHITE,
  },
});

export default styles;
