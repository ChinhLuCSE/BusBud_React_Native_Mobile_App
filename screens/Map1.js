import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
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
          source={require("../assets/vector-4.png")}
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

const styles = StyleSheet.create({
  iphone11Position: {
    left: 0,
    width: 414,
    position: "absolute",
  },
  moveTypo: {
    height: 135,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: 144,
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
    width: 414,
    top: 0,
    height: 896,
  },
  move: {
    width: 356,
    top: 0,
  },
  with: {
    top: 109,
    width: 273,
  },
  safety: {
    top: 217,
    width: 414,
  },
  moveParent: {
    top: 376,
    height: 352,
    display: "none",
    opacity: 0.3,
    width: 414,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 31,
    top: 80,
    width: 19,
    height: 19,
    position: "absolute",
  },
  Map1Item: {
    top: 162,
    height: 734,
    width: 414,
  },
  busStopsAround: {
    top: 73,
    left: 71,
    fontSize: FontSize.size_9xl,
    color: Color.dimgray,
    width: 272,
    height: 33,
  },
  bnNy: {
    top: 253,
    left: 115,
    fontSize: FontSize.paragraph20ptLightLexend_size,
    color: Color.black,
    width: 188,
    height: 129,
  },
  Map1: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Map1;
