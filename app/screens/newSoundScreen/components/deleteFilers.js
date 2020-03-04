import RNFetchBlob from 'react-native-fetch-blob';

const deleteFiles = inputValue => {
  var path = `/storage/emulated/0/BayuBay/Records/${inputValue}.mp3`;
  RNFetchBlob.fs
    .unlink(path)
    .then(() => {
      console.log('Deleted', path);
    })
    .catch(err => {});
};

export default deleteFiles;
