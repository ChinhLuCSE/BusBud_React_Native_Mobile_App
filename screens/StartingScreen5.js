import React, { useState, useRef } from 'react';

import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
const screenWidth = Dimensions.get("window").width;
export default function StartingScreen5() {
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
      </View>
      <View style={styles.body}>
        <Image 
          style={{
            width: 150,
            height: 150,
          }}
          source={require('../assets/avatar1.png')}
        />
        <Text style={{
          fontFamily: 'Lexend_light',
          fontSize: 20,
          color: Color.primary900,
          marginTop: 30,
          alignContent: 'center'
        }}>By tapping the button below, 
          you agree to BusBud's Terms of Use and acknowledge 
          that you have read the Privacy Policy
        </Text>
      
      </View>
      
      <View style={styles.footer}>
          <View style={{
            marginBottom: 20,
            flexDirection: 'row',
          }}>
            <Text style={{
              fontFamily: 'Lexend_light',
              fontSize: 14,
              color: Color.gray400,
            }}>
              Check the box to indicate that you are at least 18 years of age,
              agree to the <Text style={{color: Color.secondary600}}> Terms & Conditions</Text> and acknowledge the <Text style={{color: Color.secondary600}}>Privacy Policy.</Text>
            </Text>
          </View>
          
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
            navigation.navigate('StartingScreen6', 0)
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
    justifyContent: 'flex-start',
    marginTop: 50,
    // backgroundColor: 'blue'
  },
  body: {
    flex: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'blue'
  },
  avatarContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  footer: {
    flex: 3,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },

  

});


