import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Platform } from 'react-native';
import Home from './Home';
 
const slides = [
  {
    key: 1,
    title: 'Fascinating information',
    text: 'Get ready to explore beyond our Solar System and find out fascinating facts about Exoplanets. ',
    image: require('./resourse/babau.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Interactive learning ',
    text: 'Broaden your understanding of the discovery of Exoplanets in an entertaining and interactive way',
    image: require('./resourse/slide2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Fun ways to test your knowledge',
    text: 'Put your newly acquired knowledge to the test by solving thrilling challenges and playing educational games.',
    image: require('./resourse/cevas.png'),
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
        <Text style={styles.text}>{item.text}</Text>
        <Image source={item.image} style={styles.image}/>
        
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
      return <Home/>;
    } else {
      return <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone}/>;
    }
  }
}
const styles = StyleSheet.create({
    image:{
        marginTop:  Platform.OS === "ios" ? 50 : 50,
        
        marginLeft:  Platform.OS === "ios" ? 20 : 50,
        marginBottom:  Platform.OS === "ios" ? 20 : 50,
        width:  Platform.OS === "ios" ? 350 : 50,
        height:  Platform.OS === "ios" ? 430 : 50,
    },
    slide:{
        flex:1,
        alignItems: 'start',
        width: '100%',
        height: '100%',
        backgroundColor: "black",
        paddingTop: Platform.OS === "ios" ? 80 : 50,
        paddingBottom: Platform.OS === "ios" ? 110: 50
    },
    title:{
        marginLeft: Platform.OS === "ios" ? 27 : 50,
        marginright: Platform.OS === "ios" ? 0 : 50,
        
        marginBottom: Platform.OS === "ios" ? 25 : 50,
        color: "white",
        fontSize: "40px"
    },
    text:{
        marginRight: Platform.OS === "ios" ? 30 : 50,
        marginLeft: Platform.OS === "ios" ? 30 : 50,
        color: "white",
        fontSize: "15px"
    }

})
