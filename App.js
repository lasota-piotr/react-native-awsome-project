import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  render() {
    const pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <TextInput
              style={{
                width: '60%',
                height: 40,
                paddingLeft: 30,
                paddingRight: 30,
              }}
              placeholder="Search tag here"
              onChangeText={text => {
                this.setState({ text });
              }}
            />
            <Button
              onPress={() => {
                Alert.alert(`You tapped the button!, ${this.state.text}`);
              }}
              title="Press Me"
            />
          </View>
          <View
            style={{ width: '100%', height: 500, justifyContent: 'center' }}
          >
            <Image
              source={pic}
              style={{ width: '100%', height: 400, marginBottom: 20 }}
            />
            <Text style={{ fontSize: 20, textAlign: 'center' }}>
              {this.state.text}
            </Text>
          </View>
          <View
            style={{ width: '100%', height: 500, justifyContent: 'center' }}
          >
            <Image
              source={pic}
              style={{ width: '100%', height: 400, marginBottom: 20 }}
            />
            <Text style={{ fontSize: 20, textAlign: 'center' }}>
              {this.state.text}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
});
