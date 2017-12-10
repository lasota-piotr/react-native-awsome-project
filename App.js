import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
    };

    setInterval(() => {
      this.setState(prevState => ({
        showText: !prevState.showText,
      }));
    }, 1000);
  }

  render() {
    const pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={{ width: '100%', height: 200 }} />
        {this.state.showText && (
          <Text style={styles.explicited}>
            Banany App
          </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  explicited: {
    color: 'red',
    fontSize: 24,
  }
});
