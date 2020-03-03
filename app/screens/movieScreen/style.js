import {StyleSheet} from 'react-native';
import {colors} from '../../constants/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREY,
  },
  imgView: {
    width: '100%',
    height: 180,
    backgroundColor: 'pink',
  },
  img: {
    width: '100%',
    height: 180,
  },
  imgTitleView: {
    flex: 0.16,
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  imgTitleOne: {
    fontSize: 16,
    color: colors.WHITE,
  },
  imgTitleTwo: {
    fontSize: 14,
    color: colors.GREY_OPACITY_TWO,
  },
  freeBtnView: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  touchableBtn: {
    width: '50%',
    height: '100%',
    borderRadius: 8,
    backgroundColor: '#185',
    justifyContent: 'center',
    alignItems: 'center',
  },
  freeBtnText: {
    fontSize: 20,
    color: colors.WHITE,
  },
  devider: {
    width: '90%',
    height: 3,
    marginTop: 8,
    backgroundColor: colors.GREY_OPACITY,
  },
  curiculumView: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  curiculum: {
    fontSize: 18,
    color: colors.PELOROUS,
  },
  hours: {
    fontSize: 14,
    color: colors.WHITE,
  },
  sectionTitle: {
    fontSize: 14,
    paddingLeft: 15,
    paddingTop: 7,
    paddingBottom: 10,
    color: colors.PELOROUS,
  },
  bigText: {
    fontSize: 14,
    color: colors.WHITE,
  },
  moreText: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
});

export default styles;
