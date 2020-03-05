import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  detailsViewOne: {
    flex: 0.4,
    // backgroundColor: 'orange',
  },
  headerView: {
    flex: 0.1,
    // backgroundColor: '#412563',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'MThin',
  },
  imgView: {
    flex: 0.6,
    // backgroundColor: '#742354',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '30%',
    height: '80%',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  authorView: {
    flex: 0.1,
    // backgroundColor: 'cyan',
    justifyContent: 'center',
    alignItems: 'center',
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
    // backgroundColor: '#124128',
  },
  socialIcons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#553311',
  },
  detailsViewTwo: {
    flex: 0.6,
    backgroundColor: colors.GREY_OPACITY_THREE,
  },
  infoView: {
    width: '100%',
    paddingLeft: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 12,
    fontFamily: 'SamsungSans-Regular',
    paddingTop: 20,
    color: colors.GREY_OPACITY_TWO,
  },
  touchableTitle: {
    fontSize: 19,
    fontFamily: 'MThin',
    color: '#fff',
    paddingBottom: 0,
  },
});

export default styles;
