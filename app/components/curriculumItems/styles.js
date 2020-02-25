import {StyleSheet} from 'react-native';
import {colors} from '../../constants/colorConstans';

const styles = StyleSheet.create({
  itemRows: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'orange',
  },
  iconView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  circle: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 45 / 2,
    backgroundColor: 'red',
  },
  number: {
    fontSize: 20,
    color: colors.BLACK,
  },
  textView: {
    flex: 0.8,
    backgroundColor: 'green',
  },
});

export default styles;
