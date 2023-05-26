import React, { useState, useRef } from 'react';

import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
export default function StartingScreen4() {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

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
          paddingBottom: 20,
        }}
        >
        What's your name?
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <View style={[styles.textInput, {
            width: screenWidth/3
          }]}>
            <TextInput
              style={styles.text}
              placeholder='First'
            />
          </View>

          <View style={[styles.textInput, {
            width: screenWidth/3
          }]}>
            <TextInput
              style={styles.text}
              placeholder='Last'
            />
          </View>
        </View>
        
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
            navigation.navigate('StartingScreen5', 0)
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
    padding: 10,
    
  },
  inputContainer: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    // marginLeft: 10,
    marginRight: 30,
    // backgroundColor: 'blue'
  },
  text: {
    fontFamily: 'Lexend_light',
    fontSize: 14,

  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },

  

});


