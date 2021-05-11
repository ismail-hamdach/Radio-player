import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';


export const NavBar = () => {

    const [loaded] = useFonts({
        DroidKufiBold: require('../assets/fonts/DroidKufi-Bold.ttf'),
      });

      if (!loaded) {
        return null;
      }
      

    return(
        <View style={styles.container}>
            <Text style={styles.upperTitle}>
                RADIO SUISSE ARABE
            </Text>
            <Text style={{fontFamily: 'DroidKufiBold', color: 'white'}}>
                راديو سويسرا العرب 
            </Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        right: 35,
    },
    upperTitle: {
        color: 'white',
        fontWeight: 'bold', 
        borderBottomWidth: 1, 
        borderColor: 'white'
    },
    downerTitle: {
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 18,
        fontFamily: 'DroidKufiBold'
    }
})
