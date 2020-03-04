import SoundRecorder from 'react-native-sound-recorder';

const startRecord = async (setCheck, inputValue) => {
  setCheck(true);
  await SoundRecorder.start(
    `/storage/emulated/0/BayuBay/Records/${inputValue}.mp3`,
    console.log('Starting record by name: ', inputValue),
  )
    .then(() => {
      console.log('Started');
    })
    .catch(err => {
      if (err) {
        alert('Идет запись.Долгое зажатие для остановки.');
      }
    });
};

export default startRecord;
