import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInPage from './Components/SignInPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './Components/about';
import Explore from './Components/explore';
import Home from './Components/Home';
import Learning from './Components/learning';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='signin'>
            <Stack.Screen
               name="signin" 
               component={SignInPage} 
               options={{ headerShown: false }}
            />
             <Stack.Screen
               name="about" 
               component={About} 
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="explore" 
               component={Explore} 
               options={{ headerShown: false }}
            />
             <Stack.Screen
               name="learning" 
               component={Learning} 
               options={{ headerShown: false }}
            />
             <Stack.Screen
               name="home" 
               component={Home} 
               options={{ headerShown: false }}
            />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
