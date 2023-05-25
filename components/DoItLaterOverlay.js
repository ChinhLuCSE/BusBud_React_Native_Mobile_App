import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import { useNavigation, StackActions } from "@react-navigation/native";

const DoItLaterOverlay = ({ onClose }) => {
  const navigation = useNavigation();
  const handleResetScreen = () => {
    navigation.dispatch(StackActions.replace('StartingScreen6'));
  };
  return (
    <View style={styles.doItLaterOverlay}>
      <View style={[styles.doItLaterOverlayChild, styles.groupChildPosition]} />
      <Text style={styles.youWontBe}>{`You won’t be able to request 
a ride without adding a
payment method`}</Text>
      <View style={[styles.rectangleParent, styles.groupLayout]}>
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.doItLater, styles.doItLaterTypo]}>
          Do it Later
        </Text>
        </Pressable>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <Pressable onPress={handleResetScreen}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.addPaymentMethod, styles.doItLaterTypo]}>
          Add Payment Method Now
        </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  groupLayout: {
    height: 58,
    width: 341,
    position: "absolute",
  },
  doItLaterTypo: {
    height: 25,
    fontSize: FontSize.size_2xl_6,
    top: 16,
    textAlign: "left",
    color: Color.aliceblue,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  doItLaterOverlayChild: {
    backgroundColor: "rgba(29, 29, 29, 0.94)",
    height: 448,
    position: "absolute",
    top: 0,
    width: 414,
  },
  youWontBe: {
    top: 46,
    left: 44,
    fontSize: FontSize.size_5xl,
    width: 341,
    textAlign: "left",
    color: Color.aliceblue,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "#171717",
    borderStyle: "solid",
    borderColor: "#7f56d9",
    borderWidth: 1,
    left: 0,
    top: 0,
  },
  doItLater: {
    left: 115,
    width: 150,
  },
  rectangleParent: {
    top: 266,
    left: 37,
    height: 58,
  },
  groupItem: {
    backgroundColor: Color.primary700,
    left: 0,
    top: 0,
  },
  addPaymentMethod: {
    left: 41,
    width: 300,
  },
  rectangleGroup: {
    top: 176,
    left: 37,
    height: 58,
  },
  doItLaterOverlay: {
    height: 386,
    overflow: "hidden",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 414,
  },
});

export default DoItLaterOverlay;
