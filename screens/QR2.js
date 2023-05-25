import * as React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const QR2 = () => {
  const navigation = useNavigation();



  return (
    <View style={styles.QR2}>
      <View style={[styles.QR2Child, styles.moveParentPosition]} />

      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("QR1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Text style={styles.payment}>Payment</Text>
      
      <View style={[styles.QR2Inner, styles.lineViewBorder]}>
        <Text style={[styles.bus53, styles.bus53Typo]}>Bus 53</Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Text style={[styles.text1, styles.bus53Typo]}>3.000 đ</Text>
      <Text style={[styles.numberPlatesXxXxxxxx, styles.bus53Typo]}>
        Number Plates: XX-XXXXXX
      </Text></View> 
      <Text style={[styles.buyTicket, styles.paymentTypo]}>Buy Ticket</Text>
      
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("QR3")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      </Pressable>
      
        <View style={styles.rectangleView} />
        <Image
          style={[
            styles.accountBalanceWallet,
            styles.accountBalanceWalletPosition,
          ]}
          contentFit="cover"
          source={require("../assets/account-balance-wallet.png")}
        />
        <Text style={[styles.balance, styles.textTypo]}>Balance:</Text>
        <Text style={[styles.text, styles.textTypo]}>10.000.000 đ</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  moveParentPosition: {
    left: 0,
    width: screenWidth,
    position: "absolute",
  },
  
  paymentTypo: {
    color: Color.primary900,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 30,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    textAlign: "left",
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.primary700,
    borderRadius: Border.br_3xs,
  },
  textTypo: {
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    top:0.892 * screenHeight,

    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  lineViewBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  bus53Typo: {
    color: Color.gray900,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 0.14 * screenWidth,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 0.825 * screenWidth,
    height: 0.085 * screenHeight,
    position: "absolute",
  },
  doneTypo: {
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
  },
  QR2Child: {
    backgroundColor: Color.white,
    width: screenWidth,
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
    width: 0.057 * screenWidth,
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
  
  QR2Inner: {
    top: 0.174 * screenHeight,
    width: 0.864 * screenWidth,
    height: 0.369 * screenHeight,

    left: 0.065 * screenWidth,

    borderRadius: Border.br_3xl,
    borderColor: "#101828",
    borderWidth: 1,
    backgroundColor: Color.white,
  },
  buyTicket: {
    top: 0.107 * screenHeight,
    left: 0.34 * screenWidth,
  },
  bus53: {
    top: 0 ,
    left: 0.338 * screenWidth,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
  },
  lineView: {
    left: 0.154 * screenWidth,
    borderColor: "#98a2b3",
    borderTopWidth: 1,
    width: 0.57 * screenWidth,
    height: 0.003 * screenHeight,
    top: 0.2 * screenHeight,
  },
  text1: {
    top: 0.23 * screenHeight,
    left: 0.307 * screenWidth,
    fontSize: FontSize.h1Header136ptSemiBoldLexend_size,
  },
  numberPlatesXxXxxxxx: {
    top: 0.05 * screenHeight,
    left: 0.212 * screenWidth,
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
  },
  groupChild: {
    backgroundColor: Color.primary700,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  done: {
    top: 0.027 * screenHeight,
    left: 0.315 * screenWidth,
    color: Color.aliceblue,
    width: 0.2 * screenWidth,
    height: 0.06 * screenHeight,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 28,
    position: "absolute",
  },
  rectangleParent: {
    top: 0.588 * screenHeight,
    left: 0.084 * screenWidth,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 0.036 * screenHeight,
    },
    shadowRadius: 0.036 * screenWidth,
    elevation: 0.036 * screenWidth,
    shadowOpacity: 1,
  },
  rectangleView: {
    top: 0.88 * screenHeight,
    left: 0.099 * screenWidth,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary700,
    width: 0.794 * screenWidth,
    height: 0.088 * screenHeight,
    position: "absolute",
  },
  accountBalanceWallet: {
    top: 0.892 * screenHeight,
    width: 0.122 * screenWidth,
    height: 0.06 * screenHeight,
    overflow: "hidden",
  },
  balance: {
   left: 0.285 * screenWidth,
   color: Color.gray_100,
   width: 0.233 * screenWidth,
   height: 0.087 * screenHeight,

  },
  text: {
    left: 0.537 * screenWidth,
    color: Color.yellow,
  },
  accountBalanceWalletPosition: {
    left: 67,
    position: "absolute",
  },
  QR2: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default QR2;
