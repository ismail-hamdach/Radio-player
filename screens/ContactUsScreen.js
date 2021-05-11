import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'
import image from "../assets/radio.png";
import { useFonts } from 'expo-font';
import * as MailComposer from 'expo-mail-composer';


const ContactUsScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('contact@radiosuissearabe.com')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const sendMail = () => {
      MailComposer.composeAsync({
        recipients: [email],
        subject: subject,
        body: "From : "+ name + "\nPhone Number : "+ phone + "\nMessage : " + message
      })
    }

    const [loaded] = useFonts({
      DroidKufiBold: require('../assets/fonts/DroidKufi-Bold.ttf'),
    });

    if (!loaded) {
      return null;
    }
    

    return(
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <View style={styles.form}>
              <Text style={styles.title}>تواصل معنا</Text>
              <TextInput style={styles.input} placeholder="Full Name" onChangeText={setName} />
              <TextInput style={styles.input} placeholder="Email" value={email} editable={false} onChangeText={setEmail} />
              <TextInput style={styles.input} placeholder="Phone number" onChangeText={setPhone} />
              <TextInput style={styles.input} placeholder="Subject" onChangeText={setSubject} />
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Message"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                onChangeText={setMessage}
              />
              
              <TouchableOpacity style={styles.button} onPress={() => {sendMail()}}>
                <Text style={styles.submet}>
                  إرسال 
                </Text>
              </TouchableOpacity>
          </View>
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
    form: {
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 7,
      borderRadius: 20
    },
    title: {
      fontFamily: 'DroidKufiBold',
      marginBottom: 10,
      marginTop: 10,
      fontSize: 50,
      color: '#db0518'
    },
    input: {
      backgroundColor: '#f5f5f5',
      margin: 5,
      width: '90%',
      height: 40,
      borderRadius: 20,
      paddingLeft: 10,
      paddingRight: 10
    },
    
    textArea: {
      backgroundColor: '#f5f5f5',
      margin: 5,
      width: '90%',
      height: 100,
      borderRadius: 20,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 4,

      textAlignVertical: 'top'
      
    }, 
    image: {
      flex: 1,
      width: '100%',
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center'

    },
    button: {
      height: '9%',
      width: '80%',
      borderRadius: 50,
      backgroundColor: '#db0518',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      marginTop: 15
    },
    submet: {
      marginBottom: 10,
      marginTop: 10,
      fontSize: 30,
      fontFamily: 'DroidKufiBold',
      color: '#fff',
      
    },
  });

export default ContactUsScreen