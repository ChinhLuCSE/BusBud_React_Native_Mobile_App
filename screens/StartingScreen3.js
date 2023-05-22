import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StartingScreen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingScreen3}>
      <View style={styles.startingScreen3Child} />
      <Pressable
        style={styles.startingScreen3Item}
        onPress={() => navigation.navigate("StartingScreen4")}
      />
      <View style={styles.moveParent}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <Text
        style={[styles.enterThe4Digit, styles.textLayout]}
      >{`Enter the 4-digit code sent to you at `}</Text>
      <Text style={[styles.text, styles.textTypo]}>+81 394793435.</Text>
      <View style={[styles.startingScreen3Inner, styles.text1Layout]}>
        <View style={[styles.groupParent, styles.text1Layout]}>
          <View style={[styles.parent, styles.groupLayout]}>
            <Text style={[styles.text1, styles.text1Layout]}>0</Text>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/vector-52.png")}
            />
          </View>
          <View style={[styles.group, styles.groupLayout]}>
            <Text style={[styles.text1, styles.text1Layout]}>0</Text>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/vector-53.png")}
            />
          </View>
          <View style={[styles.container, styles.groupLayout]}>
            <Text style={[styles.text1, styles.text1Layout]}>0</Text>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/vector-54.png")}
            />
          </View>
          <View style={[styles.groupView, styles.groupLayout]}>
            <Text style={[styles.text1, styles.text1Layout]}>0</Text>
            <Image
              style={styles.groupChild}
              contentFit="cover"
              source={require("../assets/vector-55.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.resendCode, styles.textTypo]}>Resend Code</Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("StartingScreen2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  nextTypo: {
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  textLayout: {
    width: 349,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
  },
  textTypo: {
    height: 33,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    left: 37,
    position: "absolute",
  },
  text1Layout: {
    height: 45,
    position: "absolute",
  },
  groupLayout: {
    width: 40,
    height: 45,
    top: 0,
    position: "absolute",
  },
  startingScreen3Child: {
    backgroundColor: Color.white,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
    height: 896,
  },
  startingScreen3Item: {
    top: 776,
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
    left: 37,
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
    left: 0,
    position: "absolute",
  },
  next: {
    top: 792,
    left: 180,
    color: Color.aliceblue,
    width: 55,
    height: 25,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
  },
  enterThe4Digit: {
    top: 119,
    left: 39,
    color: Color.primary900,
    display: "flex",
    alignItems: "center",
    height: 69,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    top: 210,
    color: Color.gray900,
    width: 349,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
  },
  text1: {
    left: 11,
    fontSize: FontSize.h1Header136ptSemiBoldLexend_size,
    fontWeight: "300",
    fontFamily: FontFamily.hint14ptLightLexend,
    color: Color.gray400,
    width: 26,
    height: 45,
    lineHeight: 28,
    textAlign: "left",
    top: 0,
  },
  groupChild: {
    top: 43,
    left: -1,
    width: 42,
    height: 1,
    position: "absolute",
  },
  parent: {
    left: 0,
  },
  group: {
    left: 82,
  },
  container: {
    left: 164,
  },
  groupView: {
    left: 245,
  },
  groupParent: {
    width: 286,
    height: 45,
    left: 0,
    top: 0,
  },
  startingScreen3Inner: {
    top: 265,
    left: 64,
    width: 286,
    height: 45,
  },
  resendCode: {
    top: 332,
    color: Color.secondary600,
    width: 149,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
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
  startingScreen3: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default StartingScreen3;
