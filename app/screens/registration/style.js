import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  keyboardScroll: {
    flex: 1,
    paddingTop: 20,
  },
  regView: {
    flex: 0.8,
    padding: 15,
  },
  regContainer: {
    flex: 1,
    borderRadius: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  loginBtnView: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.LOCHMARA,
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  loginText: {
    fontSize: 20,
    color: colors.WHITE,
  },
  regBtnView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registrationText: {
    fontSize: 20,
    color: colors.LOCHMARA,
  },
});

export default styles;
