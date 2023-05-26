import React, { useState } from 'react';

import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
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
        <Image/>
        <Text>Enter your mobile number</Text>
      </View>
      <View style={styles.body}>
        <View>

        </View>
      </View>
      <View style={styles.footer}>

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

  },
  body: {

  },
  footer: {

  }

});


