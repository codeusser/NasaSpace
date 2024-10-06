import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Platform } from 'react-native';

export default function SignInPage({navigation}) {
    return (
        <>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headers}>EXODUCATION</Text>
                <Image style={styles.image} source={require('./resourse/racheta.png')} />  
                <Pressable style={styles.button} onPress={ () => { 
                    navigation.navigate("about");
                }}>
                    <Text style={styles.text}>Sign in</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Sign Up</Text>
                </Pressable>
                
            </View>
         </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'start',
      paddingTop: Platform.OS === "ios" ? 80 : 50,
      paddingBottom: Platform.OS === "ios" ? 110: 50
    },
    headers:{
        fontSize: '45px',
        fontFamily: "sans-serif",
        fontWeight: 'bold',
        color: 'white'
    },
    image:{
        marginRight: Platform.OS === "ios" ? 40 : 0 ,
        width: Platform.OS === "ios" ? 400 : 0, 
        height: Platform.OS === "ios" ? 500 : 0,
        
        marginLeft: Platform.OS === "ios" ? 100 : 0,
        marginBottom: Platform.OS === "ios" ? 10 : 0,
    },
    button: {
        marginTop: Platform.OS === "ios" ? 16 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Platform.OS === "ios" ? 13 : 0,
        paddingHorizontal: Platform.OS === "ios" ? 125 : 0,
        borderRadius: 20,
        border: Platform.OS === "ios" ? 10 : 0,
        color: "black",
        borderWidth: Platform.OS === "ios" ? 2 : 0,
        borderColor: 'white',
        elevation: 5,
        backgroundColor: "black",
        color: "black"
      },
    
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },

  });