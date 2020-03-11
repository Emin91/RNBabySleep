import SoundRecorder from 'react-native-sound-recorder';

// const changeSlider = (sliderValue, setSliderValue) => {
//   var i = 0;
//   while (i <= 8) {
//     (function(i) {
//       setTimeout(() => {
//         setSliderValue(sliderValue + i);
//       }, 1000 * i);
//     })(i++);
//   }
// };

const startRecord = async (
  setCheck,
  inputValue,
  sliderValue,
  setSliderValue,
) => {
  setCheck(true);
  // changeSlider(sliderValue, setSliderValue);
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
