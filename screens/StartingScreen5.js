import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const StartingScreen5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingScreen5}>
      <View style={[styles.startingScreen5Child, styles.moveParentPosition]} />
      <Pressable
        style={styles.startingScreen5Item}
        onPress={() => navigation.navigate("StartingScreen6")}
      />
      <View style={[styles.moveParent, styles.moveParentPosition]}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
      <Text style={[styles.next, styles.theLayout]}>Next</Text>
      <Text style={[styles.byTappingThe, styles.theLayout]}>
        By tapping the button below, you agree to BusBud's Terms of Use and
        acknowledge that you have read the Privacy Policy
      </Text>
      <Text style={[styles.checkTheBoxContainer, styles.theLayout]}>
        <Text
          style={styles.checkTheBox}
        >{`Check the box to indicate that you are at least 18 years of age, agree to the `}</Text>
        <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
        <Text style={styles.checkTheBox}>{` and acknowledge the `}</Text>
        <Text style={styles.termsConditions}>Privacy Policy.</Text>
      </Text>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("StartingScreen4")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Image
        style={styles.startingScreen5Inner}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.vsprofileIcon}
        contentFit="cover"
        source={require("../assets/vsprofile.png")}
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
  theLayout: {
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  startingScreen5Child: {
    backgroundColor: Color.white,
    width: 414,
    top: 0,
    height: 896,
  },
  startingScreen5Item: {
    top: 776,
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
    width: 341,
    borderRadius: Border.br_3xs,
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
  },
  next: {
    top: 792,
    left: 176,
    fontWeight: "600",
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    color: Color.aliceblue,
    width: 55,
    height: 25,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    lineHeight: 28,
  },
  byTappingThe: {
    top: 421,
    left: 38,
    fontFamily: FontFamily.paragraph20ptLightLexend,
    color: Color.primary900,
    height: 97,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    lineHeight: 28,
    width: 341,
  },
  checkTheBox: {
    color: Color.gray400,
  },
  termsConditions: {
    color: Color.secondary600,
  },
  checkTheBoxContainer: {
    top: 674,
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
    fontWeight: "300",
    fontFamily: FontFamily.hint14ptLightLexend,
    width: 334,
    height: 90,
    left: 37,
  },
  icon: {
    height: "100%",
    borderRadius: Border.br_3xs,
    width: "100%",
  },
  wrapper: {
    left: 36,
    top: 79,
    width: 19,
    height: 19,
    position: "absolute",
  },
  startingScreen5Inner: {
    top: 218,
    left: 138,
    width: 138,
    height: 138,
    position: "absolute",
  },
  vsprofileIcon: {
    top: 237,
    left: 159,
    width: 96,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  startingScreen5: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default StartingScreen5;
