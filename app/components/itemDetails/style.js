import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  itemRows: {
    flex: 1,
    padding: 5,
    marginBottom: 5,
    flexDirection: 'row',
    backgroundColor: colors.GREY_TWO,
  },
  imgView: {
    flex: 0.3,
    padding: 10,
    borderRadius: 5,
  },
  headerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  textsView: {
    flex: 0.7,
    paddingVertical: 6,
  },
  textOne: {
    fontSize: 18,
    color: colors.WHITE,
  },
  textTwo: {
    fontSize: 15,
    color: colors.GREY_OPACITY_TWO,
  },
});

export default styles;
