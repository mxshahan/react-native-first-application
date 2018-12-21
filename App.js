import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ListView
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    items: ['a', 'b']
  }

  addNewButton = (e) => {

  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Wow! it's working</Text>
          <View>
            <TextInput
              style={styles.inputBox}
            />
            <Button
              onPress={this.addNewButton}
              title="Add New"
              color="#841584"
              accessibilityLabel="Learn more about this"
            />
          </View>
        </View>
            
        <View styles={styles.another}>
          <View style={styles.listItem}>
            {this.state.items.map((item, key) => {
              return (
                <Text key={key}>{item}</Text>
              )
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  another: {

  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10
  },
  inputBox: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: '#333',
    width: 300,
    padding: 10
  },
  listItem: {
    textAlign: 'left',
    flex: 1,
    alignItems: 'flex-start',
  }
});
