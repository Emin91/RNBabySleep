import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colorConstans';

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
  },
  logoView: {
    flex: 0.4,
    paddingTop: 30,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  regView: {
    flex: 0.6,
    padding: 15,
  },
  regContainer: {
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
