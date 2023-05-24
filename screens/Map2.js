import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Map2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.Map2}>
      <View style={styles.Map2Child} />
      <View style={styles.moveParent}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("IPhone11ProMax33")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("IPhone11ProMax9")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.done}>Done</Text>
      </Pressable>
      <Text style={[styles.trmXeBus, styles.textClr]}>{`Trạm xe bus - 
“Tên của trạm xe này”
`}</Text>
      <View style={styles.groupParent}>
        <View style={styles.locationSavedParent}>
          <View style={[styles.locationSaved, styles.locationPosition]}>
            <Image
              style={[styles.iconplace, styles.locationPosition]}
              contentFit="cover"
              source={require("../assets/iconplace.png")}
            />
            <Text style={[styles.name, styles.nameTypo]}>Bus 08</Text>
            <Text style={[styles.location, styles.nameTypo]}>
              15 mins Waiting
            </Text>
          </View>
          <Text style={[styles.text, styles.textClr]}>7.000 đ</Text>
          <Image
            style={styles.busIcon}
            contentFit="cover"
            source={require("../assets/bus.png")}
          />
        </View>
        <View style={[styles.locationSavedGroup, styles.locationPosition]}>
          <View style={[styles.locationSaved, styles.locationPosition]}>
            <Image
              style={[styles.iconplace, styles.locationPosition]}
              contentFit="cover"
              source={require("../assets/iconplace.png")}
            />
            <Text style={[styles.name, styles.nameTypo]}>Bus 50</Text>
            <Text style={[styles.location, styles.nameTypo]}>
              30 mins Waiting
            </Text>
          </View>
          <Text style={[styles.text, styles.textClr]}>7.000 đ</Text>
          <Image
            style={styles.busIcon}
            contentFit="cover"
            source={require("../assets/bus.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moveTypo: {
    height: 135,
    color: Color.white,
    fontSize: 144,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 58,
    width: 341,
    position: "absolute",
  },
  textClr: {
    color: Color.dimgray,
    textAlign: "left",
    position: "absolute",
  },
  locationPosition: {
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  nameTypo: {
    lineHeight: 28,
    fontSize: FontSize.hint14ptLightLexend_size,
    left: "31.42%",
    textAlign: "left",
    position: "absolute",
  },
  Map2Child: {
    backgroundColor: Color.oldlace,
    width: 414,
    left: 0,
    top: 0,
    position: "absolute",
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
    opacity: 0.3,
    display: "none",
    width: 414,
    left: 0,
    position: "absolute",
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
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.black,
    left: 0,
    top: 0,
  },
  done: {
    top: 16,
    left: 144,
    fontSize: FontSize.size_2xl_6,
    color: Color.aliceblue,
    width: 53,
    height: 25,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleParent: {
    top: 776,
    left: 37,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  trmXeBus: {
    top: 73,
    left: 66,
    fontSize: FontSize.size_9xl,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 282,
    height: 64,
  },
  iconplace: {
    width: "19.91%",
    right: "80.09%",
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    display: "none",
    overflow: "hidden",
  },
  name: {
    width: "49.56%",
    top: "4.44%",
    fontWeight: "600",
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    color: Color.primary900,
    height: "33.33%",
  },
  location: {
    height: "51.11%",
    width: "68.58%",
    top: "48.89%",
    fontWeight: "300",
    fontFamily: FontFamily.hint14ptLightLexend,
    color: Color.gray400,
  },
  locationSaved: {
    width: "99.95%",
    right: "0.05%",
    top: "0%",
    bottom: "0%",
    height: "100%",
  },
  text: {
    width: "20.34%",
    top: "33.33%",
    left: "79.66%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsBold,
    height: "33.33%",
    fontWeight: "700",
    color: Color.dimgray,
  },
  busIcon: {
    left: 4,
    width: 36,
    height: 45,
    top: 0,
    position: "absolute",
  },
  locationSavedParent: {
    bottom: "59.09%",
    left: "0%",
    right: "0%",
    top: "0%",
    height: "40.91%",
    position: "absolute",
    width: "100%",
  },
  locationSavedGroup: {
    top: "59.09%",
    right: "0%",
    height: "40.91%",
    bottom: "0%",
    width: "100%",
  },
  groupParent: {
    height: "12.28%",
    width: "79.75%",
    top: "19.31%",
    right: "10.59%",
    bottom: "68.42%",
    left: "9.66%",
    position: "absolute",
  },
  Map2: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Map2;
