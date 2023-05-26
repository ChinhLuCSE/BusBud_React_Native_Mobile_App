import React, { useState } from 'react';

import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export default function StartingScreen2() {
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
            navigation.navigate('StartingScreen1')
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
        Choose an account
        </Text>
      </View>
      <View style={styles.body}>
        <View style={{
          flexDirection: 'column'
        }}>
          <TouchableOpacity style={styles.choosingContainer} onPress={() => {
            navigation.navigate('StartingScreen4')
          }}>
            <Image 
              style={styles.logo}
              source={require('../assets/facebook.png')}
            />
            <Text style={styles.logoText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choosingContainer} onPress={() => {
            navigation.navigate('StartingScreen4')
          }}>
          <Image 
              style={styles.logo}
              source={require('../assets/google.png')}
            />
            <Text style={styles.logoText}>Google</Text>
          </TouchableOpacity>
        </View>
        <Text style={{
          fontFamily: 'Lexend_semibold',
          fontSize: 14,

        }}>By clicking on a social option you may recieve an SMS for verification. Message and data rates may apply.</Text>
      </View>
      <View style={styles.footer}>
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.primary700,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
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
            navigation.navigate('StartingScreen3', 123)
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
  choosingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo: {
    width: 30,
    height: 30,
  },
  logoText: {
    fontFamily: 'Lexend_semibold',
    fontSize: 20,
    color: Color.black,
    marginLeft: 40,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  

});


