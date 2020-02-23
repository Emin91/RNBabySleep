import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colorConstans';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  itemViewRows: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    marginTop: 5,
    backgroundColor: colors.GREY_OPACITY_THREE,
  },
  titleView: {
    flex: 0.9,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  title: {
    fontSize: 15,
    color: colors.WHITE,
  },
  titleSub: {
    fontSize: 15,
    color: colors.GREY,
  },
  iconView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    width: '100%',
    paddingLeft: 15,
    justifyContent: 'center',
    height: 40,
  },
  headers: {
    fontSize: 20,
    color: colors.CERULEAN,
  },
  version: {
    fontSize: 10,
    color: colors.GREY_OPACITY_THREE,
  },
});

export default styles;
