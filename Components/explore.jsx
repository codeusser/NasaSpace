import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { Platform } from 'react-native';
import NavBar from './NavBar';
import { ImageBackground } from 'react-native-web';

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

export default function Explore({navigation}){
    /*
        require("./resourse/game.png"),
        require("./resourse/game.png"),
        require("./resourse/game.png"),
        require("./resourse/game.png"),
        require("./resourse/game.png"),
        require("./resourse/game.png")
    */
   
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
        },
        {
            txt: "30 Arietis B b",
            img : require("./resourse/30-Arietis-B-b.jpeg")
        },
    ]

    const neptune = [
        {
          txt: "61 Virginis b",
          img : require("./resourse/61-Virginis-b.jpeg")
        },
        {
            txt: "AU Microscopii b",
            img : require("./resourse/AU-Microscopii-b.jpeg")
        },
        {
            txt: "61 Virginis d",
            img : require("./resourse/61-Virginis-d.jpeg")
        },
        {
            txt: "BD-08 2823",
            img : require("./resourse/BD-08-2823.jpeg")
        },
        {
            txt: "DS Tucanae A b",
            img : require("./resourse/DS Tucanae A b.jpeg")
        },
    ]


    const earth = [
        {
          txt: "55 Cancri e",
          img : require("./resourse/55-Cancri-e.jpeg")
        },
        {
            txt: "AU Microscopii d",
            img : require("./resourse/AU-Microscopii-d.jpeg")
        },
        {
            txt: "DMPP-1 d",
            img : require("./resourse/DMPP-1-d.jpeg")
        },
        {
            txt: "CD Ceti b",
            img : require("./resourse/CD-Ceti-b.jpeg")
        },
        {
            txt: "CoRoT-7 b",
            img : require("./resourse/CoRoT-7-b.jpeg")
        },
    ]

    const tere = [
        {
          txt: "EPIC 201497682 b",
          img : require("./resourse/EPIC 201497682 b.jpeg")
        },
        {
            txt: "GJ 367 b",
            img : require("./resourse/GJ 367 b.jpeg")
        },
        {
            txt: "TRAPPIST-1 e",
            img : require("./resourse/TRAPPIST-1 e.jpeg")
        },
        {
            txt: "KOI-55 b",
            img : require("./resourse/KOI-55 b.jpeg")
        },
        {
            txt: "K2 - 116 b",
            img : require("./resourse/K2 - 116 b.jpeg")
        },
    ]
    ///const imas = require("./background.jpeg");
    
    const gigs = Gigants.map((item) => {
        return (
            <>
                <PlanetCard img = {item.img} txt={item.txt}></PlanetCard>
            </>
        )
    })
    const nept = neptune.map((item) => {
        return (
            <>
                <PlanetCard img = {item.img} txt={item.txt}></PlanetCard>
            </>
        )
    })
    const ert = earth.map((item) => {
        return (
            <>
                <PlanetCard img = {item.img} txt={item.txt}></PlanetCard>
            </>
        )
    })

    const ter = tere.map((item) => {
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
                    <Text style={styles.hed}>Gas Gigants</Text>
                    {<ScrollView style = {styles.scroll1} horizontal={true}>
                        {gigs}
                    </ScrollView>}
                    <Text style={styles.hed}>Neptune-like</Text>
                    {<ScrollView  style = {styles.scroll1} horizontal={true}>
                        {nept}
                    </ScrollView>}
                    <Text style={styles.hed}>Earth-like</Text>
                    {<ScrollView  style = {styles.scroll1} horizontal={true}>
                        {ert}
                    </ScrollView>}
                    <Text style={styles.hed}>Terrestrial</Text>
                    {<ScrollView  style = {styles.scroll2} horizontal={true}>
                        {ter}
                    </ScrollView>}
                    

                </ScrollView>
                <NavBar style={styles.navi}></NavBar>
            </View>
        </>
    )
}

const styles = StyleSheet.create(
    {
        imagee: {
            flex: 1,
            justifyContent: 'center',
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
        scroll1:{
            height:Platform.OS === "ios" ? 200 : 0,
        },
        scroll2:{
            height:Platform.OS === "ios" ? 300 : 0,
            paddingBottom:Platform.OS === "ios" ? 200 : 0,
        
        },
        scroll:{
            height: Platform.OS === "ios" ? "auto" :  "20$",
            
            display: "flex",
            alignItems: 'start',
             justifyContent: 'start',
            marginLeft: Platform.OS === "ios" ? 30 :  "20$",
            marginRight: Platform.OS === "ios" ? 30 :  "20$",
            marginTop: Platform.OS === "ios" ? 90 :  "20$"
        },
        img1:{
            height:  Platform.OS === "ios" ? 100 :  "20$",
             width:  Platform.OS === "ios" ? 100 :  "20$",
         },
        subtext:{
            color:"white",
            fontSize: "15",
            marginBottom:  Platform.OS === "ios" ? 100 :  "20$",
        },
        hed:{
            color:"white",
            paddingLeft: Platform.OS === "ios" ? 10 :  "20$",
            paddingRight: Platform.OS === "ios" ? 87 :  "20$",
            borderRadius: 10,
            border: Platform.OS === "ios" ? 10 : 0,
    
            borderWidth: Platform.OS === "ios" ? 4 : 0,
            fontSize: "35"
        },
        
        conti:{
            display:"flex",
            backgroundColor: "black",
            height: "100%"
        },
        
        navi:{
            marginTop: Platform.OS === "ios" ? 1 :  "20$",
            alignSelf: "flex-end"
        }

    }

)