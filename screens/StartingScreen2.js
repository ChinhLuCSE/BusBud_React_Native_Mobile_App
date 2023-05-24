import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const StartingScreen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingScreen2}>
      <View style={[styles.startingScreen2Child, styles.moveParentPosition]} />
      <Pressable
        style={[styles.startingScreen2Item, styles.byClickingOnLayout]}
        onPress={() => navigation.navigate("StartingScreen4")}
      />
      <View style={[styles.moveParent, styles.moveParentPosition]}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
      <Text style={styles.next }>Next</Text>
      <Text style={styles.chooseAnAccount}>Choose an account</Text>
      <Text style={[styles.google, styles.googleTypo]}>Google</Text>
      <Text style={[styles.facebook, styles.googleTypo]}>Facebook</Text>
      <Text style={[styles.byClickingOn, styles.googleTypo]}>
        By clicking on a social option you may recieve an SMS for verification.
        Message and data rates may apply.
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("StartingScreen1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Image
        style={[styles.logosfacebookIcon, styles.logosfacebookIconLayout]}
        contentFit="cover"
        source={require("../assets/logosfacebook.png")}
      />
      <Image
        style={[styles.flatColorIconsgoogle, styles.logosfacebookIconLayout]}
        contentFit="cover"
        source={require("../assets/flatcoloriconsgoogle.png")}
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
  byClickingOnLayout: {
    width: 341,
    left: 37,
  },
  moveTypo: {
    height: 169,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: 144,
    left: 0,
    position: "absolute",
  },
  googleTypo: {
    color: Color.gray900,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  logosfacebookIconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
    overflow: "hidden",
  },
  startingScreen2Child: {
    backgroundColor: Color.white,
    width: 414,
    top: 0,
    height: 896,
    left: 0,
  },
  startingScreen2Item: {
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
    height: 58,
    position: "absolute",
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
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    textAlign: "left",
    position: "absolute",
  },
  chooseAnAccount: {
    top: 131,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    color: Color.primary900,
    width: 349,
    height: 33,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    left: 37,
    position: "absolute",
  },
  google: {
    top: 249,
    width: 97,
    left: 127,
    color: Color.gray900,
    height: 33,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
  },
  facebook: {
    width: 107,
    top: 196,
    left: 127,
    color: Color.gray900,
    height: 33,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
  },
  byClickingOn: {
    top: 302,
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
    height: 92,
    width: 341,
    left: 37,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 36,
    top: 79,
    width: 19,
    height: 19,
    position: "absolute",
  },
  logosfacebookIcon: {
    left: 53,
    top: 196,
  },
  flatColorIconsgoogle: {
    top: 250,
    left: 55,
  },
  startingScreen2: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default StartingScreen2;
