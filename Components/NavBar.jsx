import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

 


export default function NavBar(){
    const [home, setHome] = React.useState();
    const [explore, setExplore] = React.useState();
    const [learn, setLearn] = React.useState();
    const [game, setGame] = React.useState();
    const navigation = useNavigation();

    const styles = StyleSheet.create(
        {
            img:{
               height:  Platform.OS === "ios" ? 50 :  "20$",
                width:  Platform.OS === "ios" ? 50 :  "20$",
                marginTop: Platform.OS === "ios" ? 15 :  "20$",
                marginLeft: Platform.OS === "ios" ? 35 :  "20$",
                marginTop: (home === true) ? 15 : 15 ,
               padding: (home === true) ? 4 : 0,
                borderRadius: (home === true) ? 0 : 0
            },
            img1:{
                height:  Platform.OS === "ios" ? 50 :  "20$",
                 width:  Platform.OS === "ios" ? 50 :  "20$",
                 marginTop: Platform.OS === "ios" ? 15 :  "20$",
                 marginLeft: Platform.OS === "ios" ? 35 :  "20$",
                 marginTop: (explore === true) ? 15 : 15 ,
                 
             },
             img2:{
                height:  Platform.OS === "ios" ? 50 :  "20$",
                 width:  Platform.OS === "ios" ? 50 :  "20$",
                 marginTop: Platform.OS === "ios" ? 15 :  "20$",
                 marginLeft: Platform.OS === "ios" ? 35 :  "20$",
                 marginTop: (learn === true) ? 15 : 15 ,
                 
             },
             img3:{
                height:  Platform.OS === "ios" ? 50 :  "20$",
                 width:  Platform.OS === "ios" ? 50 :  "20$",
                 marginTop: Platform.OS === "ios" ? 15 :  "20$",
                 marginLeft: Platform.OS === "ios" ? 35 :  "20$",
                 marginTop: (game === true) ? 15 : 15 ,
                 
             },
            cont:{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: Platform.OS === "ios" ? "10%" :  "20$",
                backgroundColor: "white",
                borderRadius: 40,
                border: Platform.OS === "ios" ? 10 : 0,
                color: "black",
                borderWidth: Platform.OS === "ios" ? 3 : 0,
                borderColor: '#ebe8e8',
                marginBottom:  Platform.OS === "ios" ? 25 : 0,
                background: "linear-gradient(90deg, rgba(162,162,162,1) 0%, rgba(172,172,172,1) 46%, rgba(241,241,241,1) 100%)",
                
            }
    
        }
    
    )

    return(
        <>
            <View style ={styles.cont}>
                <Pressable style={styles.button} onPress={ () => { 
                    setHome(true);
                    setExplore(false);
                    setLearn(false);
                    setGame(false);
                    navigation.navigate("home");
                }}>
                    <Image source={require('./resourse/home.png')} style ={styles.img}></Image>
                </Pressable>

                
                <Pressable style={styles.button} onPress={ () => { 
                    setHome(false);
                    setExplore(true);
                    setLearn(false);
                    setGame(false);
                     navigation.navigate("explore");
                }}>
                    <Image source={require('./resourse/compass.png')} style ={styles.img1}></Image>
                </Pressable>

                
                <Pressable style={styles.button} onPress={ () => { 
                    setHome(false);
                    setExplore(false);
                    setLearn(true);
                    setGame(false);
                    navigation.navigate("learning");
                }}>
                    <Image source={require('./resourse/book-open.png')} style ={styles.img2}></Image>
                </Pressable>

                
                <Pressable style={styles.button} onPress={ () => { 
                    setHome(false);
                    setExplore(false);
                    setLearn(false);
                    setGame(true);
                    //navigation.navigate("about");
                }}>
                    <Image source={require('./resourse/game.png')} style ={styles.img3}></Image>
                </Pressable>
            </View>
        </>
    )
   
}

