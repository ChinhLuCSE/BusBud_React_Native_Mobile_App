import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StartingScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingScreen1}>
      <Image
        style={[styles.startingScreen1Child, styles.moveParentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-21.png")}
      />
      <Pressable
        style={[styles.startingScreen1Item, styles.startingScreen1ItemPosition]}
        onPress={() => navigation.navigate("StartingScreen3")}
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
      <Text style={[styles.text1, styles.text1Clr]}>394793435</Text>
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
  },
  moveTypo: {
    height: "20%",
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: "calc(8vw + 8vh)",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  nextTypo: {
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: "1.5em",
    fontSize: "1.5em",
  },
  enterYourMobileTypo: {
    height: "3.7%",
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: "1.5em",
    textAlign: "left",
    fontSize: "calc(2vw + 2vh)",
  },
  textTypo: {
    height: "2.7%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: "calc(1vw + 1vh)",
    top: "22%",
  },
  text1Clr: {
    color: Color.gray900,
    textAlign: "left",
    position: "absolute",
    fontSize: "calc(1vw + 1vh)",
  },
  vectorIconLayout: {
    height: "1.5vw",
    width: "1.5vw",
    position: "absolute",
  },
  startingScreen1Child: {
    width: "100%",
    top: 0,
    height: "100%",
  },
  startingScreen1Item: {
    top: "86%",
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
    width: "82%",
    height: "6.5vh",
  },
  move: {
    width: "85%",
    top: 0,
  },
  with: {
    top: "17%",
    width: "66%",
  },
  safety: {
    top: "52%",
    width: "100%",
  },
  moveParent: {
    top: "32%",
    height: "49%",
    display: "none",
    opacity: 0.3,
    width: "100%",
  },
  next: {
    top: "88%",
    left: "43%",
    color: Color.aliceblue,
    width: "13%",
    height: "2.8vh",
    fontSize: "calc(1vw + 1vh)",
    textAlign: "left",
    position: "absolute",
  },
  enterYourMobile: {
    top: "14%",
    left: "6%",
    fontSize: "calc(2vw + 2vh)",
    color: Color.primary900,
    width: "87%",
    position: "absolute",
  },
  orConnectWithSocial: {
    color: Color.secondary600,
    width: "80%",
    fontSize: "calc(1vw + 1vh)",
  },
  orConnectWithContainer: {
    top: "28%",
  },
  text: {
    left: "31%",
    color: Color.gray400,
    width: "61%",
    textAlign: "left",
    position: "absolute",
  },
  text1: {
    left: "42%",
    width: "47%",
    height: "2.7%",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_5xl,
    top: 197,
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
