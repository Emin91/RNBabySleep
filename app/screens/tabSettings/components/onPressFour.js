export const onPressItemsFour = (num, navigation, youtubeId) => {
  switch (num) {
    case 1:
      navigation.navigate('AboutApp');
      break;
    case 2:
      navigation.navigate('Faq');
      break;
    case 3:
      navigation.navigate('YoutubeScreen', youtubeId);
      break;
    case 4:
      console.log('Item: 4');
      break;
    default:
      break;
  }
};
