import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StartingScreen4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.startingScreen4}>
      <View style={[styles.startingScreen4Child, styles.childPosition]} />
      <Pressable
        style={styles.startingScreen4Item}
        onPress={() => navigation.navigate("StartingScreen5")}
      />
      <View style={[styles.moveParent, styles.childPosition]}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
      <Text style={[styles.next, styles.nextTypo]}>Next</Text>
      <Text style={[styles.whatsYourName, styles.nextTypo]}>
        What’s your name?
      </Text>
      <View style={[styles.firstParent, styles.parentLayout]}>
        <Text style={[styles.first, styles.lastTypo]}>First</Text>
        <Image
          style={[styles.groupChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/vector-51.png")}
        />
      </View>
      <View style={[styles.lastParent, styles.parentLayout]}>
        <Text style={[styles.last, styles.lastTypo]}>Last</Text>
        <Image
          style={[styles.groupChild, styles.childPosition]}
          contentFit="cover"
          source={require("../assets/vector-51.png")}
        />
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("StartingScreen3")}
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
  childPosition: {
    left: 0,
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
  nextTypo: {
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  parentLayout: {
    height: 32,
    top: 190,
    width: 155,
    position: "absolute",
  },
  lastTypo: {
    height: 20,
    color: Color.gray_200,
    fontFamily: FontFamily.hint14ptLightLexend,
    fontWeight: "300",
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
    lineHeight: 28,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  startingScreen4Child: {
    backgroundColor: Color.white,
    width: 414,
    top: 0,
    height: 896,
  },
  startingScreen4Item: {
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
  },
  next: {
    top: 792,
    left: 180,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    color: Color.aliceblue,
    width: 55,
    height: 25,
  },
  whatsYourName: {
    top: 126,
    left: 32,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    color: Color.primary900,
    width: 349,
    height: 33,
  },
  first: {
    width: 54,
  },
  groupChild: {
    top: 32,
    width: 156,
    height: 1,
  },
  firstParent: {
    left: 37,
  },
  last: {
    width: 155,
    color: Color.gray_200,
    fontFamily: FontFamily.hint14ptLightLexend,
    fontWeight: "300",
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
  },
  lastParent: {
    left: 232,
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
  startingScreen4: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default StartingScreen4;
