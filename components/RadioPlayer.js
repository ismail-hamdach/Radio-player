import React, { useState, useRef } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av';
import { useFonts } from "expo-font";


export const RadioPlayer = () => {
    const [videoURI, setVideoURI] = useState('https://s5.radio.co/sd0adce281/listen')
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)


    const [loaded] = useFonts({
        "DroidKufiBold": require('../assets/fonts/DroidKufi-Bold.ttf'),
      });

      if (!loaded) {
        return null;
      }

    const togglePlayPause = () => {
        playing
            ? videoRef.current.pauseAsync()
            : videoRef.current.playAsync();
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

            
            <Video
                ref={videoRef}
                source={{ uri: videoURI }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                useNativeControls
                style={{ width: 0, height: 0 }}
                onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            />

        </View>
        
    )
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
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