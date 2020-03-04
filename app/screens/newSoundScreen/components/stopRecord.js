import SoundRecorder from 'react-native-sound-recorder';

const stopRecord = async setCheck => {
  setCheck(false);
  await SoundRecorder.stop().then(function(result) {
    const res = result.path;
    console.log('Stoped and Saved in path:', res);
    alert('Сохранено по пути: ' + result.path);
  });
};

export default stopRecord;
