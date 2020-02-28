import React, {useState} from 'react';
import {View} from 'react-native';
import YouTube from 'react-native-youtube';
import styles from './style';

const youtubePlayer = id => {
  const [isPlaying] = useState(false);
  const [isLooping] = useState(true);
  return (
    <YouTube
      apiKey="AIzaSyDHiQhtv7Huml3ZgEeEB2relni6mDZSyU4"
      videoId={id}
      play={isPlaying}
      loop={isLooping}
      controls={1}
      style={styles.player}></YouTube>
  );
};

const YoutubeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {youtubePlayer(navigation.state.params)}
    </View>
  );
};

export default YoutubeScreen;
