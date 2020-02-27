import React, {Component} from 'react';
import {StyleSheet, View, PixelRatio, Dimensions} from 'react-native';
import YouTube from 'react-native-youtube';

export class YoutubeScreen extends Component {
  state = {
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    playerWidth: Dimensions.get('window').width,
  };

  render() {
    return (
      <View style={styles.container}>
        <YouTube
          ref={this._youTubeRef}
          // You must have an API Key for the player to load in Android
          apiKey="YOUR_API_KEY"
          // Un-comment one of videoId / videoIds / playlist.
          // You can also edit these props while Hot-Loading in development mode to see how
          // it affects the loaded native module
          videoId="ZmAyPJ8zf-w"
          // videoIds={['uMK0prafzw0', 'qzYgSecGQww', 'XXlZfc1TrD0', 'czcjU1w-c6k']}
          // playlistId="PLF797E961509B4EB5"
          play={this.state.isPlaying}
          loop={this.state.isLooping}
          fullscreen={this.state.fullscreen}
          controls={1}
          style={[
            {
              height: PixelRatio.roundToNearestPixel(
                this.state.playerWidth / (16 / 9),
              ),
            },
            styles.player,
          ]}
          onError={e => {
            this.setState({error: e.error});
          }}
          onReady={e => {
            this.setState({isReady: true});
          }}
          onChangeState={e => {
            this.setState({status: e.state});
          }}
          onChangeQuality={e => {
            this.setState({quality: e.quality});
          }}
          onChangeFullscreen={e => {
            this.setState({fullscreen: e.isFullscreen});
          }}
          onProgress={e => {
            this.setState({currentTime: e.currentTime});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    marginVertical: 30,
  },
});

export default YoutubeScreen;
