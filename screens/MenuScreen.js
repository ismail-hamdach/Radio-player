import React from 'react'
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import image from '../assets/menu.png'
import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

const MenuScreen = (props) => {
  
    return(
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}  activeTintColor='white' labelStyle={{fontSize: 15, fontWeight: 'bold', color: 'white'}}   />
          
          </DrawerContentScrollView>
        </ImageBackground>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
      resizeMode: "cover",
      justifyContent: "center"
    },
    navBar : {
      width: Dimensions.get('window').width,
      height: '15%'
    }
  });

export default MenuScreen