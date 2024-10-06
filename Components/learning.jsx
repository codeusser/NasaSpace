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
            <Text
                style={
                    styles.hedCard
                }
                source={item.img}
            >{item.hed}</Text>
            <Text style={styles.txtCard}>
                {item.txt}
            </Text>

        </View>
        </>
    )
}

export default function Learning({navigation}){
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
            
            id :"1",
          txt: "The habitable zone represents the distance from a star at which liquid water could exist on orbiting planets’ surfaces.  ",
          hed: "The Habitable Zone",
          img : require("./resourse/16-cygni-B-b.jpeg")
        },
        {
            
            id :"1",
            hed: "Ways to find planets",

            txt: "Orbiting planets cause stars to wobble in space, changing the color of the light astronomers observe. 1092 planets were discovered using this method.",
            img : require("./resourse/11-Comae-Berenices-b.jpeg")
        },
        {
            
            id :"1",
            hed: "Ways to find planets",

            txt: "When a planet passes directly between its star and an observer, it dims the star’s light by a measurable amount. 4295 planets were discovered using this method.",
            img : require("./resourse/14-Herculis-B.jpeg")
        },
        {
            
            id :"1",
            hed: "Ways to find planets",

            txt: "Astronomers can take pictures of exoplanets by removing the overwhelming glare of the stars they orbit. 82 planets were discovered using this method.",
            img : require("./resourse/18-Delphini-b.jpeg")
        },
        {
            
            id :"1",
            hed: "Ways to find planets",

            txt: "Light from a distant star is bent and focused by gravity as a planet passes between the star and the Earth. 225 planets were discovered using this method.",
            img : require("./resourse/30-Arietis-B-b.jpeg")
        },
        {
            
            id :"1",
            hed: "Ways to find planets",
            txt: "The orbit of a planet can cause a star to wobble around in space in relation to nearby stars in the sky.",
            img : require("./resourse/30-Arietis-B-b.jpeg")
            
        },
        {
            
            id :"1",
            
            hed: "Kepler space telescope",
            txt: "The Kepler space telescope was NASA’s first planet-hunting mission, assigned to search a portion of the Milky Way galaxy for Earth-sized planets orbiting stars outside our solar system. During nine years in deep space Kepler, and its second act, the extended mission dubbed K2, showed our galaxy contains billions of hidden exoplanets, many of which could be promising places for life. ",
            img : require("./resourse/30-Arietis-B-b.jpeg")
            
        },
        {
            
            id :"1",
            hed: "The first discovery of exoplanets",
            txt: "Aleksander Wolszczan and Dale Frail announce the discovery of two rocky planets orbiting PSR B1 257+12, a pulsar in the constellation Virgo. Because they are constantly bombarded by radiation from the dead neutron star that they orbit, these rocky planets cannot support organic life. ",
            img : require("./resourse/30-Arietis-B-b.jpeg")
            
        },
        {
            
            id :"1",
            hed: "What is an exoplanet?",
            txt: "!!An exoplanet is any planet beyond our solar system. Most of them orbit other stars, but some free-floating exoplanets, called rogue planets, are untethered to any star. ",
            img : require("./resourse/30-Arietis-B-b.jpeg")
            
        },
        {
            
            id :"1",
            hed: "How many exoplanets are there?",
            txt: "More than 5,600 exoplanets have been confirmed by NASA, but more than a billion are believed to exist.",
            img : require("./resourse/30-Arietis-B-b.jpeg")
            
        }
    
    ]

   
    const gigs = Gigants.map((item) => {
        return (
            <>
                <PlanetCard hed = {item.hed} txt={item.txt}></PlanetCard>
            </>
        )
    })
    
    return(
        <>
            <View style={styles.conti}>
              
                <ScrollView
                    contentContainerStyle={styles.scroll}>
                    <Text style={styles.hed}>Learning</Text>
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
        
        card:{
            
            justifyContent: 'start',
            alignItems: "center",
            alignContent: "center",
            borderRadius: 20,
            border: Platform.OS === "ios" ? 10 : 0,
            color: "black",
            marginLeft: Platform.OS === "ios" ? 9 : 0,
            marginTop: Platform.OS === "ios" ? 120 : 0,
            marginBottom: Platform.OS === "ios" ? 30 : 0,
            marginRight: Platform.OS === "ios" ? 30 : 0,
            height: Platform.OS === "ios" ? 300 : 0,
            width: Platform.OS === "ios" ? 300 : 0,
            borderWidth: Platform.OS === "ios" ? 3 : 0,
            borderColor: '#ebe8e8',
            backgroundColor: "b",
            textAlign: "center"
                
        },
        txtCard:{
            width: Platform.OS === "ios" ? "auto" : 0,
            fontSize: "14",
            color: "white"
        },
        hedCard:{
            marginTop: Platform.OS === "ios" ? 50 :  "20$",
            marginBottom: Platform.OS === "ios" ? 20 :  "20$",
            width: Platform.OS === "ios" ? "auto" : 0,
            fontSize: "30",
            color: "white"
        },
        scroll1:{
            height:Platform.OS === "ios" ? 500 : 0,
        },
        
        scroll:{
            height: Platform.OS === "ios" ? "auto" :  "20$",
            
            display: "center",
            alignItems: 'start',
             justifyContent: 'center',
            marginLeft: Platform.OS === "ios" ? 30 :  "20$",
            marginRight: Platform.OS === "ios" ? 30 :  "20$",
            marginTop: Platform.OS === "ios" ? 90 :  "20$"
        },
        
        subtext:{
            color:"white",
            fontSize: "15",
            
            paddingLeft: Platform.OS === "ios" ? 25 :  "20$",
            marginBottom:  Platform.OS === "ios" ? 100 :  "20$",
        },
        hed:{
            color:"white",
            paddingLeft: Platform.OS === "ios" ? 15 :  "20$",
            paddingRight: Platform.OS === "ios" ? 0 :  "20$",
            borderRadius: 10,
            border: Platform.OS === "ios" ? 10 : 0,
    
            borderWidth: Platform.OS === "ios" ? 4 : 0,
            fontSize: "39"
        },
        
        conti:{
            backgroundColor: "black",
            justifyContent: 'center',
            alignItems: "center",
            alignContent: "center",
            height: "100%"
        },
        
        navi:{
            
            marginTop: Platform.OS === "ios" ? 1 :  "20$",
            alignSelf: "flex-end"
        }

    }

)