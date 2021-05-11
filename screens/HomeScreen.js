import React from 'react'
import {  StyleSheet, View, ImageBackground } from 'react-native'
import image from "../assets/radio.png";
import { RadioPlayer } from "../components/RadioPlayer";



const HomeScreen = () => {
    return(
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={{flex: 1, position: 'absolute', bottom: 0, width: '100%'}}>
            <RadioPlayer />
          </View>
        </ImageBackground>
        
      </View>
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: "cover",
    flexDirection: 'column'
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default HomeScreen
