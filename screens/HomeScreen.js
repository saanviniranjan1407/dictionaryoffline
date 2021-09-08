import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import dictionary from '../database';
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word: 'Loading...',
      lexicalCategory: '',
      definition: '',
    };
  }

  getWord = (text) => {
    var text = text.toLowerCase();
    try {
      var word = dictionary[text]['word'];
      var lexicalCategory = dictionary[text]['lexicalCategory'];
      var definition = dictionary[text]['definition'];
      this.setState({
        word: word,
        lexicalCategory: lexicalCategory,
        definition: definition,
      });
    } catch (err) {
      alert('Oh no!😓This word is not available in our dictionary ');
      this.setState({
        text: '',
        isSearchPressed: false,
      });
    }
  };

  render() {
    return (
      <View>
        <Header
          backgroundColor={'red'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: 'white', 
            fontSize: 19, 
            fontFamily: 'Arial Black', 
            fontWeight: 'bold' },
          }}
        />
        <Image
         style={styles.icon}
         source = {{uri: 'data:image/jpeg;base64,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',}}/>
        <View>
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({
                text: text,
                isSearchPressed: false,
                word: 'Please wait...',
                lexicalCategory: '',
                examples: [],
                defination: '',
              });
            }}
            value={this.state.text}
          />

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => {
              this.setState({ isSearchPressed: true });
              this.getWord(this.state.text);
            }}>
            <Text style={styles.searchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.outputContainer}>
          <Text style={{ fontSize: 20 }}>
            {this.state.isSearchPressed && this.state.word === 'Loading...'
              ? this.state.word
              : ''}
          </Text>
          {this.state.word !== 'Loading...' ? (
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Word: </Text>
                <Text style={{ fontSize: 18 }}>{this.state.word}</Text>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.detailsTitle}>Type: </Text>
                <Text style={{ fontSize: 18 }}>
                  {this.state.lexicalCategory}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={styles.detailsTitle}>Definition: </Text>
                <Text style={{ fontSize: 19 }}>{this.state.definition}</Text>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 30,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'red',
    outline: 'none',
    backgroundColor: 'white',
    fontFamily: 'French Script MT',
    fontSize: 35
  },
  searchButton: {
    width: '40%',
    height: 50,
    alignSelf: 'center',
    padding: 3,
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'red',
    backgroundColor: 'blue'
  },
  searchText: {
    textAlign: 'center',
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color:'white'
  },
  outputContainer: {
    flex: 0.7,
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsTitle: {
    fontFamily: 'times',
    color: '#9dabdd',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
   width: 190,
    height:140,
    marginLeft: 70,
    borderWidth: 2
  }
});
