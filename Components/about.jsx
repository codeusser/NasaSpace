import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Platform } from 'react-native';
 
const slides = [
  {
    key: 1,
    title: 'Interactive Lessons',
    text: 'Description.\nSay something cool',
    image: require('./planet1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Cool informations',
    text: 'Other coolasdfasdfasdfasdfasdfasdfasdfasdf stuff',
    image: require('./planet1.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Infos about planes',
    text: 'I\'m already out of descriptions\n\nLorem ipsum basdfasdfasdfasdfla bla bla',
    image: require('./planet1.png'),
    backgroundColor: '#22bcb5',
  }
];
 
export default class App extends React.Component {
    state = {
        showRealApp: false
    }
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
             <Image source={item.image} style={styles.image}/>
        <Text style={styles.text}>{item.text}</Text>
        
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }
  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}
const styles = StyleSheet.create({
    image:{
        marginTop:  Platform.OS === "ios" ? 100 : 50,
        marginBottom:  Platform.OS === "ios" ? 65 : 50,
        width:  Platform.OS === "ios" ? 350 : 50,
        height:  Platform.OS === "ios" ? 350 : 50,
    },
    slide:{
        flex:1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "black",
        paddingTop: Platform.OS === "ios" ? 80 : 50,
        paddingBottom: Platform.OS === "ios" ? 110: 50
    },
    title:{
        marginLeft: Platform.OS === "ios" ? 0 : 50,
        marginright: Platform.OS === "ios" ? 0 : 50,
        color: "white",
        fontSize: "40px"
    },
    text:{
        marginRight: Platform.OS === "ios" ? 30 : 50,
        marginLeft: Platform.OS === "ios" ? 30 : 50,
        color: "white",
        fontSize: "20px"
    }

})
