import React, { useState } from 'react';

import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export default function StartingScreen1() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SplashScreen')
          }}
        >
          <Image
            style={{ 
              width: 30, 
              height: 30,
              marginTop: 20,
              marginBottom: 20,
            }}
            // resizeMode="contain"
            source={require("../assets/left-arrow.png")}
          />
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Lexend_semibold',
          fontSize: 24,
          color: Color.primary900,
          paddingBottom: 30,
        }}
        >
        Enter your mobile number
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputPhoneContainer}>
          <Image 
            style={{
              width: 50,
              height: 30,
            }}
            source={require('../assets/flag.png')}
          />
          <TouchableOpacity style={styles.inputText}>
            <Image 
              style={{
                width: 15,
                height: 10,
                marginLeft: 10,
                marginRight: 10,
              }}
              source={require('../assets/bottom_arrow.png')}
            />
          </TouchableOpacity>
          <Text style={{
            fontFamily: 'Lexend_medium',
            fontSize: 24,
            color: Color.gray400,
            marginRight: 5,
          }}>+81</Text>
          <TextInput style={{
            borderBottomWidth: 1,
            fontFamily: 'Lexend_medium',
            fontSize: 24,
            color: 'black',
            alignItems: 'flex-end',
            
          }}
          placeholder='394793435'
          keyboardType='numeric'
          />
        </View>
        <TouchableOpacity 
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
          }}
          onPress={() => {
            navigation.navigate('StartingScreen2')
          }}
        >
          <Text style={{
            fontFamily: 'Lexend_semibold',
            fontSize: 20,
            color: Color.secondary600,
          }}>Or connect with social</Text>
          <Image 
            style={{
              width: 20,
              height: 20,
              marginLeft: 30
            }}    
            source={require('../assets/right-arrow-blue.png')}
          />
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Lexend_semibold',
          fontSize: 14,

        }}>By continuing you may recieve an SMS for  verification. Message and data rates may apply.</Text>
      </View>
      <View style={styles.footer}>
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.primary700,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 20,
            marginBottom: 20,
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 0,
            },
             shadowOpacity: 0.9,
             shadowRadius: 90,
             elevation: 10,
          }}
          onPress={() => {
            navigation.navigate('StartingScreen4')
          }}
          >
            <Text style={{
              fontFamily: 'Lexend_semibold',
              fontSize: 20,
              color: Color.white,
            }}>Next</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    padding: 20,
    flexDirection: 'column',

  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    // backgroundColor: 'blue'
  },
  body: {
    flex: 2,

  },
  inputPhoneContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  inputPhone: {

  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  

});


