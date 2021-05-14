import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Audio} from 'expo-av';
import { useFonts } from "expo-font";



export const RadioPlayer = () => {
    
    const [playing, setPlaying] = useState(false)
    const [sound, setSound] = useState(null);
    
    const playSound = async () => {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
        {uri: 'https://s5.radio.co/sd0adce281/listen'}
        );
        Audio.setAudioModeAsync({ staysActiveInBackground : true })
        sound.setOnPlaybackStatusUpdate(handlePlaybackStatusUpdate);
        setSound(sound);
        console.log('Playing Sound');
        await sound.playAsync()
        setPlaying(true)
    }

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync(); }
          : undefined;
      }, [sound]);

    useEffect(() => {
            playSound()
    }, [])

    const [loaded] = useFonts({
        "DroidKufiBold": require('../assets/fonts/DroidKufi-Bold.ttf'),
      });

    if (!loaded) {
        return null;
    }

    const togglePlayPause = () => {
        if(sound) 
            playing
                ? sound.pauseAsync()
                : sound.playAsync();
    }

    const handlePlaybackStatusUpdate = (e) => {
        if (e.isPlaying && !playing){
          setPlaying(true)
        }
      
        if (!e.isPlaying && playing) {
          setPlaying(false)
        }
      }
      

      

    return(
        <View style={styles.container}>
            
            <TouchableOpacity style={{flex: 1}} 
                onPress={() => {
                    setPlaying(playing === false ? true : false)
                    togglePlayPause()
                }}>
                {/* <ActivityIndicator size="large" color="#00ff00" style={{display: !isLoading ? 'none' : 'flex'}} /> */}
                <Icon   name= {!playing ? "play" : "pause"} 
                        size={40} color="#ffffff"  
                        
                />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
                
                <Text style={styles.titleUP}>
                    راديو سويسرا العرب 
                </Text>
                <Text style={styles.title}>
                    Live
                </Text>
            </View>

            <View style={{flex: 1}}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../assets/icon.png')}
                />
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#db0518',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
        

    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 10,
        alignSelf: 'flex-end', 
        marginRight: 8
    },
    titleUP:{
        fontFamily: 'DroidKufiBold', 
        color: 'white', 
        // fontWeight: 'bold', 
        fontSize: 15,
        width: 150,
        alignSelf: 'flex-end',
        
    },
    title:{
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 18,
        // width: 150,
        alignSelf: 'flex-end'
    },
    titleContainer: {
        flex: 1,
        alignItems: 'flex-end',
        left: 40
    }
})