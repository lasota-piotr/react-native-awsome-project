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
  FlatList
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.data = [
      {
        name: 'Banany',
        url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
      },
      {
        name: 'Jabłka',
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
      },
      {
        name: 'Truskawki',
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Truskawki.jpg',
      },
    ]
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={{minHeight: 30, fontSize: 20, marginBottom: 10, textAlign: 'center'}}>
            {this.state.text}
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingBottom: 20,
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
                Alert.alert(`You typed: ${this.state.text}`);
              }}
              title="Press Me"
            />
          </View>
          <View stle={{ width: '100%'}}>
            <FlatList
              data={this.data}
              renderItem={({item}) => (
                <View
                  style={{ width: '100%', height: 500}}
                >
                  <Image
                    source={{uri: item.url}}
                    style={{ width: 500, height: 400, marginBottom: 20 }}
                  />
                  <Text style={{ fontSize: 20, textAlign: 'center', width: '100%' }}>
                    {item.name}
                  </Text>
                </View>
              )}
              keyExtractor={(item, index) => index}
            />
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
