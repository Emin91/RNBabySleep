import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.GREY_OPACITY,
  },
  textInputView: {
    flex: 0.2,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 20,
    textAlign: 'center',
    borderBottomWidth: 2,
    color: colors.CERULEAN,
    borderBottomColor: colors.CERULEAN,
  },
  warnText: {
    alignSelf: 'center',
    color: colors.RED,
  },
  recorderView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  timer: {
    fontSize: 40,
    paddingBottom: 20,
    color: colors.WHITE,
  },
  recorderBtn: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.LOCHMARA,
  },
  sliderView: {
    flex: 0.2,
    justifyContent: 'flex-start',
  },
  slider: {
    width: '100%',
    height: 60,
  },
});

export default styles;
