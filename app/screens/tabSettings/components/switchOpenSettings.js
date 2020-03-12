export const switchOpenSettings = (num, navigation) => {
  switch (num) {
    case 1:
      navigation.navigate('Settings');
      break;
    default:
      break;
  }
};
