import * as React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Map1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.Map1}>
      <View style={[styles.Map1Child, styles.iphone11Position]} />
      <View style={[styles.moveParent, styles.iphone11Position]}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone11ProMax9")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/right-arrow.png")}
        />
      </Pressable>
      <Image
        style={[styles.Map1Item, styles.iphone11Position]}
        contentFit="cover"
        source={require("../assets/group-571.png")}
      />
      <Text style={[styles.busStopsAround, styles.bnNyTypo]}>
        Bus stops around you
      </Text>
      <Text style={[styles.bnNy, styles.bnNyTypo]}>
        Bản đồ này sẽ hiện thị các điểm đợi xe bus xung quanh khu vực input
        Where from?”
      </Text>
    </View>
  );
};

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  iphone11Position: {
    left: 0,
    width: screenWidth,
    position: "absolute",
  },
  moveTypo: {
    height: 0.15 * screenWidth,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: 0.15 * screenWidth,
    left: 0,
    position: "absolute",
  },
  bnNyTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  Map1Child: {
    backgroundColor: Color.oldlace,
    width: screenWidth,
    top: 0,
    height: 0.9 * screenWidth,
  },
  move: {
    width: 0.86 * screenWidth,
    top: 0,
  },
  with: {
    top: 0.13 * screenWidth,
    width: 0.66 * screenWidth,
  },
  safety: {
    top: 0.27 * screenWidth,
    width: screenWidth,
  },
  moveParent: {
    top: 0.42 * screenWidth,
    height: 0.39 * screenWidth,
    display: "none",
    opacity: 0.3,
    width: screenWidth,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0.075 * screenWidth,
    top: 0.09 * screenWidth,
    width: 0.045 * screenWidth,
    height: 0.045 * screenWidth,
    position: "absolute",
  },
  Map1Item: {
    top: 0.18 * screenWidth,
    height: 0.82 * screenWidth,
    width: screenWidth,
  },
  busStopsAround: {
    top: 0.08 * screenWidth,
    left: 0.17 * screenWidth,
    fontSize: 0.06 * screenWidth,
    color: Color.dimgray,
    width: 0.65 * screenWidth,
    height: 0.036 * screenWidth,
  },
  bnNy: {
    top: 0.29 * screenWidth,
    left: 0.28 * screenWidth,
    fontSize: 0.035 * screenWidth,
    color: Color.black,
    width: 0.45 * screenWidth,
    height: 0.31 * screenWidth,
  },
  Map1: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 0.9 * screenWidth,
    width: "100%",
  },
});

export default Map1;
