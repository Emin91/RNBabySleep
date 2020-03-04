import RNFetchBlob from 'react-native-fetch-blob';

const filesInDirectory = () => {
  RNFetchBlob.fs
    .lstat('/storage/emulated/0/BayuBay/Records/')
    .then(stats => {
      stats.map(({filename}) => {
        console.log('filename', filename);
      });
    })
    .catch(err => {});
};

export default filesInDirectory;
