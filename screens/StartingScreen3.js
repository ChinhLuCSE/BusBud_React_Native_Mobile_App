import React, { useState, useRef } from 'react';

import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export default function StartingScreen3(phoneNumber) {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
  const input2Ref = useRef();
  const input3Ref = useRef();
  const input4Ref = useRef();
  const handleInput1Change = (text) => {
    setInput1(text);
    if (text.length === 1) {
      input2Ref.current.focus();
    }
  };

  const handleInput1Submit = () => {
    if (input1.length === 1) {
      input2Ref.current.focus();
    }
  };
  const handleInput2Change = (text) => {
    setInput2(text);
    if (text.length === 1) {
      input3Ref.current.focus();
    }
  };
  const handleInput2Submit = () => {
    if (input2.length === 1) {
      input3Ref.current.focus();
    }
  };
  const handleInput3Change = (text) => {
    setInput3(text);
    if (text.length === 1) {
      input4Ref.current.focus();
    }
  };
  const handleInput3Submit = () => {
    if (input2.length === 1) {
      input4Ref.current.focus();
    }
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
          paddingBottom: 20,
        }}
        >
        Enter the 4-digit code sent to you at
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={{
          fontFamily: 'Lexend_semibold',
          fontSize: 28,

        }}>+81 394793435.</Text>
        <View style={styles.InputContainer}>
          <TextInput 
            style={styles.codeInput}
            placeholder='0'
            keyboardType='numeric'
            value={input1}
            onChangeText={handleInput1Change}
            onSubmitEditing={handleInput1Submit}
          />
          <TextInput 
            style={styles.codeInput}
            placeholder='0'
            keyboardType='numeric'
            maxLength={1}
            ref={input2Ref}
            value={input2}
            // onChangeText={setInput2}
            onChangeText={handleInput2Change}
            onSubmitEditing={handleInput2Submit}
          />
          <TextInput 
            style={styles.codeInput}
            placeholder='0'
            keyboardType='numeric'
            maxLength={1}
            ref={input3Ref}
            value={input3}
            onChangeText={handleInput3Change}
            onSubmitEditing={handleInput3Submit}
          />
          <TextInput 
            style={styles.codeInput}
            placeholder='0'
            keyboardType='numeric'
            maxLength={1}
            ref={input4Ref}
            value={input4}
            onChangeText={setInput4}
          />
        </View>
        <TouchableOpacity style={{
          marginTop: 20,
        }}>
          <Text style={{
            fontFamily: 'Lexend_semibold',
            fontSize: 20,
            color: Color.secondary600,
            
          }}>Resend Code</Text>
        </TouchableOpacity>
        
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
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  codeInput: {
    borderBottomWidth: 1,
    fontFamily: 'Lexend_light',
    fontSize: 36,
    color: 'black',
    alignItems: 'flex-end',
    marginRight: 20,
    marginLeft: 20
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },

  

});


