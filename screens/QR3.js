import * as React from "react";
import { StyleSheet, View, Text, Pressable,Dimensions } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const QR3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.QR3}>
      <View style={[styles.QR3Child, styles.moveParentPosition]} />
      
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("QR2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Text style={styles.payment}>Payment</Text>
      <Text style={[styles.paymentSuccess, styles.paymentTypo]}>
        Payment Success
      </Text>
      <Image
        style={styles.image4Icon}
        contentFit="cover"
        source={require("../assets/image-4.png")}
      />
      <Text style={styles.text}>3.000 đ</Text>
      <Text style={[styles.abcdef, styles.amTypo]}>ABCDEF</Text>
      <Text style={[styles.buyTicketBus, styles.amTypo]}>
        Buy Ticket Bus 53
      </Text>
      <Text style={[styles.april242023, styles.amTypo]}>April, 24 2023</Text>
      <Text style={[styles.am, styles.amTypo]}>8:53 AM</Text>
      <Text style={[styles.text1, styles.amTypo]}>9.997.000đ</Text>
      <Image
        style={styles.QR3Item}
        contentFit="cover"
        source={require("../assets/line-2.png")}
      />
      <Text style={[styles.paymentCode, styles.balanceFlexBox]}>
        Payment Code
      </Text>
      <Text style={[styles.transaction, styles.dateTypo]}>Transaction</Text>
      <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      <Text style={[styles.time, styles.dateTypo]}>Time</Text>
      <Text style={[styles.balance, styles.balanceFlexBox]}>Balance</Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.done, styles.amTypo]}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moveParentPosition: {
    left: 0,
    width: screenWidth,
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
  paymentTypo: {
    height: 33,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  balanceFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.gray400,
    left: 36,
    textAlign: "left",
    position: "absolute",
  },
  dateTypo: {
    width: 139,
    alignItems: "center",
    display: "flex",
    color: Color.gray400,
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
    left: 36,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 0.794 * screenWidth,
    height: 0.088 * screenHeight,
    position: "absolute",
  },
  QR3Child: {
    backgroundColor: Color.white,
    width: 414,
    top: 0,
    height: 896,
  },
 
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 0.041 * screenWidth,
    top: 0.051 * screenHeight,
    width: 0.059 * screenWidth,
    height: 0.038 * screenHeight,
    position: "absolute",
  },
  payment: {
    top: 0.060 * screenHeight,
    left: 0.14 * screenWidth,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    color: Color.primary900,
    width: 0.65 * screenWidth,
    height: 0.045 * screenHeight,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  paymentSuccess: {
    position: "absolute",

    top: screenHeight * 0.45,
    left: screenWidth * 0.21,
    color: Color.secondary600,
    width: screenWidth,
  },
  image4Icon: {

    top: screenHeight * 0.19,
    left: screenWidth * 0.31,
    width: screenWidth * 0.38,
    height: screenWidth * 0.38,
    position: "absolute",
  },
  text: {
    top: screenHeight * 0.47,
    left: screenWidth * 0.34,
    fontSize: FontSize.h1Header136ptSemiBoldLexend_size,   
    color: Color.gray900,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 0.14 * screenWidth,
    textAlign: "left",
    position: "absolute",
  },
  abcdef: {
    left: screenWidth * 0.48,

    top: screenHeight * 0.59,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    color: Color.black,
  },
  buyTicketBus: {
    left: screenWidth * 0.4,
    top: screenHeight * 0.65,
    color: Color.black,
  },
  april242023: {
    top: screenHeight * 0.71,
    left: screenWidth * 0.45,
    color: Color.black,
  },
  am: {
    top: screenHeight * 0.77,
    left: screenWidth * 0.48,
    color: Color.black,
  },
  text1: {
    top: screenHeight * 0.81,
    left: screenWidth * 0.47,
    color: Color.black,
  },
  QR3Item: {
    top: screenHeight * 0.59,
    left: screenWidth * 0.07,
    width: screenWidth * 0.85,
    height: 1,
    position: "absolute",
  },
  paymentCode: {
    width: 161,
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
    display: "flex",
    color: Color.gray400,
    top: screenHeight * 0.59,
    width: screenWidth,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
  },
  transaction: {
    top: screenHeight * 0.65,
  },
  date: {
    top: screenHeight * 0.7,
  },
  time: {
    top: screenHeight * 0.77,
  },
  balance: {
    top: screenHeight * 0.81,

    fontSize: FontSize.size_mid,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: 116,
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary700,
    left: 0,
    top: 0,
  },
  done: {
    top: 0.019 * screenHeight,
    left: 0.34* screenWidth,

    width: screenWidth,
    height: screenHeight,
  },
  rectangleParent: {
    top: 0.88 * screenHeight,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0.099 * screenWidth,
    
  },
  QR3: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: screenHeight,
    width: "100%",
  },
});

export default QR3;
