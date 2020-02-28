import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colorConstans';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.GREY_OPACITY,
  },
  firstView: {
    flex: 0.1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  viewRows: {
    flex: 0.8,
    marginLeft: 7,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    color: colors.WHITE,
  },
  viewRowsTwo: {
    flex: 0.2,
    paddingRight: 20,
    justifyContent: 'center',
  },
  secondView: {
    flex: 0.9,
    paddingLeft: 10,
    paddingRight: 10,
  },
  bigText: {
    fontSize: 16,
    color: colors.WHITE,
  },
  infoView: {
    flex: 1,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
