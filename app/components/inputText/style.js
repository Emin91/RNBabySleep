import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  titleView: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: colors.GREY,
  },
  mainTitle: {
    fontSize: 30,
    color: colors.WHITE,
  },
  regView: {
    flex: 0.5,
    padding: 15,
    //backgroundColor: colors.PELOROUS
  },
  regContainer: {
    flex: 1,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputView: {
    flex: 1,
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: 15,
    color: colors.GREY_OPACITY,
  },
});

export default styles;
