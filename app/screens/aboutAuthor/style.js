import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
  },
  detailsViewOne: {
    flex: 0.5,
  },
  headerView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'MThin',
  },
  imgView: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '40%',
    height: 120,
    borderRadius: 6,
    borderWidth: 4,
    borderColor: 'white',
  },
  authorView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  authorName: {
    fontSize: 20,
    marginBottom: 5,
    color: '#fff',
    fontFamily: 'MBold',
  },
  socialIconsView: {
    flex: 0.2,
    flexDirection: 'row',
  },
  socialIcons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsViewTwo: {
    flex: 0.5,
  },
  infoView: {
    width: '100%',
    paddingLeft: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontFamily: 'SamsungSans-Regular',
    paddingTop: 20,
    color: colors.GREY_OPACITY,
  },
  touchableTitle: {
    fontSize: 19,
    fontFamily: 'MThin',
    color: '#fff',
    paddingBottom: 0,
  },
});

export default styles;
