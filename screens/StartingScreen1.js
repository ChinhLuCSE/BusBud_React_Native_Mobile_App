import React, { useState } from 'react';

import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StartingScreen1 = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <View style={styles.startingScreen1}>
      <Image
        style={[styles.startingScreen1Child, styles.moveParentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Pressable
        style={[styles.startingScreen1Item, styles.startingScreen1ItemPosition]}
        onPress={() => navigation.navigate("StartingScreen3", { number: inputValue || null})}
      />
      <View style={[styles.moveParent, styles.moveParentPosition]}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <Text style={[styles.enterYourMobile, styles.enterYourMobileTypo]}>
        Enter your mobile number
      </Text>
      <Pressable
        style={[
          styles.orConnectWithContainer,
          styles.startingScreen1ItemPosition,
        ]}
        onPress={() => navigation.navigate("StartingScreen2")}
      >
        <Text style={[styles.orConnectWithSocial, styles.enterYourMobileTypo]}>
          Or connect with social
        </Text>
      </Pressable>
      <Text style={[styles.text, styles.textTypo]}>+81</Text>
      
      <TextInput
        style={[styles.text1, styles.text1Clr]}
        onChangeText={handleInputChange}
        value={inputValue}
        keyboardType="numeric"
      />
        
      <Image
        style={styles.startingScreen1Inner}
        contentFit="cover"
        source={require("../assets/vector-3.png")}
      />
      <Text style={[styles.byContinuingYou, styles.text1Clr]}>
        By continuing you may recieve an SMS for verification. Message and data
        rates may apply.
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-2.png")}
      />
      <Image
        style={[styles.startingScreen1Child1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector-5.png")}
      />
      <Image
        style={styles.flagvnIcon}
        contentFit="cover"
        source={require("../assets/flagvn.png")}
      />
      <Image
        style={styles.startingScreen1Child2}
        contentFit="cover"
        source={require("../assets/vector-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  moveParentPosition: {
    left: 0,
    width: 414,
    position: "absolute",
  },
  startingScreen1ItemPosition: {
    left: 37,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
  },
  moveTypo: {
    height: 169,
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: 144,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
  },
  enterYourMobileTypo: {
    height: 33,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
  },
  textTypo: {
    height: 29,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    top: 197,
  },
  text1Clr: {
    color: Color.gray900,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 19,
    width: 19,
    position: "absolute",
  },
  startingScreen1Child: {
    width: 414,
    top: 0,
    height: 896,
  },
  startingScreen1Item: {
    top: 750,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary700,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 341,
    height: 58,
  },
  move: {
    width: 356,
    top: 0,
  },
  with: {
    top: 136,
    width: 273,
  },
  safety: {
    top: 271,
    width: 414,
  },
  moveParent: {
    top: 288,
    height: 440,
    display: "none",
    opacity: 0.3,
    width: 414,
  },
  next: {
    top: 765,
    left: 179,
    color: Color.aliceblue,
    width: 55,
    height: 25,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    textAlign: "left",
    position: "absolute",
  },
  enterYourMobile: {
    top: 131,
    left: 20,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    color: Color.primary900,
    width: 370,
    position: "absolute",
  },
  orConnectWithSocial: {
    color: Color.secondary600,
    width: 334,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
  },
  orConnectWithContainer: {
    top: 249,
  },
  text: {
    left: 128,
    color: Color.gray400,
    width: 253,
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    left: 176,
    width: 195,
    height: 29,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    top: 200,
  },
  startingScreen1Inner: {
    top: 224,
    left: 178,
    width: 194,
    height: 1,
    position: "absolute",
  },
  byContinuingYou: {
    top: 293,
    left: 39,
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
    width: 345,
    height: 55,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
  },
  vectorIcon: {
    top: 254,
    left: 295,
  },
  startingScreen1Child1: {
    top: 79,
    left: 31,
  },
  flagvnIcon: {
    top: 195,
    left: 34,
    width: 48,
    height: 31,
    position: "absolute",
    overflow: "hidden",
  },
  startingScreen1Child2: {
    top: 208,
    left: 101,
    width: 8,
    height: 6,
    position: "absolute",
  },
  startingScreen1: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default StartingScreen1;
