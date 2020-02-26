import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import YouTube from 'react-native-youtube';

const youtubePlayer = id => {
  const [isPlaying] = useState(true);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // backgroundColor: 'black',
  },
  player: {
    width: '100%',
    height: '100%',
  },
});

export default YoutubeScreen;
