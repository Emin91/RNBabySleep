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
    // marginTop: 50,
    width: 150,
    height: 150,
  },
  regView: {
    flex: 0.6,
    padding: 15,
    //backgroundColor: colors.PELOROUS
  },
  regContainer: {
    // flex: 1,
    borderRadius: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  userNameView: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    borderRadius: 20,
    marginBottom: 10,
  },
  iconView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameRows: {
    flex: 0.8,
  },
  userNameBox: {
    flex: 1,
    justifyContent: 'center',
  },
  inputView: {
    flex: 1,
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: 15,
    color: colors.GREY_OPACITY,
  },
  loginBtnView: {
    width: '100%',
    height: 50,
    borderRadius: 12,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.LOCHMARA,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  regBtnView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.RED,
  },
  loginText: {
    fontSize: 20,
    color: colors.WHITE,
  },
  registrationText: {
    fontSize: 20,
    color: colors.LOCHMARA,
  },
});

export default styles;
