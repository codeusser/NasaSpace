import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Platform } from 'react-native';
import NavBar from './NavBar';


function NewsCard(props){
    return (
        <>
            <View style={styles.vww}>
                <Text>{props.text}</Text>
            </View>
        </>
    )
}

function PlanetCard(item){
    return (
        <>
        <View style={styles.card}>
            <Image
                style={
                    styles.img1
                }
                source={item.img}
            />
            <Text style={styles.txtCard}>
                {item.txt}
            </Text>

        </View>
        </>
    )
}

export default function Home({navigation}){
    const Gigants = [
        {
          txt: "16 cygni B b ",
          img : require("./resourse/16-cygni-B-b.jpeg")
        },
        {
            txt: "11 Comae Berenices b",
            img : require("./resourse/11-Comae-Berenices-b.jpeg")
        },
        {
            txt: "14 Herculis B",
            img : require("./resourse/14-Herculis-B.jpeg")
        },
        {
            txt: "18 Delphini b",
            img : require("./resourse/18-Delphini-b.jpeg")
        }
    ];
    const gigs = Gigants.map((item) => {
        return (
            <>
                <PlanetCard img = {item.img} txt={item.txt}></PlanetCard>
            </>
        )
    })
    return(
        <>
            <View style={styles.conti}>
                <ScrollView
                    contentContainerStyle={styles.scroll}>
                    <Text style={styles.hed1}>Hello, Vlad Nistor</Text>
                    <Text style={styles.subtext}>Let's embark on a journey across the universe!</Text>
                    
                    <Text style={styles.hed}>LATEST NEWS</Text>
                    <Text style={styles.subtext}>Using NASA's exoplanet-hunting spacecraft, the Transiting Exoplanet Survey Satellite (TESS), scientists have spotted a record-breaking triple-star system so tightly bound that it could fit comfortably between the sun and its closest planet, Mercury.</Text>
                    
                    <Text style={styles.hed}>EXOPLANET OF THE DAY</Text>
                    {<ScrollView style = {styles.scroll1} horizontal={true}>
                        {gigs}
                    </ScrollView>}
                   

                </ScrollView>
                <NavBar style={styles.navi}></NavBar>
            </View>
        </>
    )
}

const styles = StyleSheet.create(
    {
        scroll:{
            height: Platform.OS === "ios" ? 1000 :  "20$",
            
            display: "flex",
            alignItems: 'center',
             justifyContent: 'center',
            marginLeft: Platform.OS === "ios" ? 30 :  "20$",
            marginRight: Platform.OS === "ios" ? 30 :  "20$",
            marginTop: Platform.OS === "ios" ? 60 :  "20$"
        },
        subtext:{
            color:"#bef7ee",
            fontSize: "15",
            marginBottom:  Platform.OS === "ios" ? 70 :  "20$",
        },
        hed:{
             color:"#cd4ad4",
            paddingRight: Platform.OS === "ios" ? 10 :  "20$",
            borderRadius: 10,
            border: Platform.OS === "ios" ? 10 : 0,
    
            borderWidth: Platform.OS === "ios" ? 4 : 0,
            fontSize: "40"
        },
        hed1:{
            color:"#d927b2",
            fontSize: "35",
            marginRight: Platform.OS === "ios" ? 67 :  "20$",
        
        },
        conti:{
            display:"flex",
            backgroundColor: "black",
            height: "100%"
        },
        
        navi:{
            marginTop: Platform.OS === "ios" ? 1 :  "20$",
            alignSelf: "flex-end"
        },
        card:{
            
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            borderRadius: 20,
            border: Platform.OS === "ios" ? 10 : 0,
            color: "black",
            marginLeft: Platform.OS === "ios" ? 9 : 0,
            marginTop: Platform.OS === "ios" ? 30 : 0,
            marginBottom: Platform.OS === "ios" ? 30 : 0,
            marginRight: Platform.OS === "ios" ? 30 : 0,
            height: Platform.OS === "ios" ? 140 : 0,
            width: Platform.OS === "ios" ? 150 : 0,
            borderWidth: Platform.OS === "ios" ? 3 : 0,
            borderColor: '#ebe8e8',
            backgroundColor: "b"
                
        },
        txtCard:{
            width: Platform.OS === "ios" ? "auto" : 0,
            fontSize: "14",
            color: "white"
        },
        img1:{
            height:  Platform.OS === "ios" ? 100 :  "20$",
             width:  Platform.OS === "ios" ? 100 :  "20$",
         }

    }

)