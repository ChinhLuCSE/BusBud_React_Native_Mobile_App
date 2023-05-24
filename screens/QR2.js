import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const QR2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.QR2}>
      <View style={styles.QR2Child} />
      <View style={styles.moveParent}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
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
      <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
      <View style={[styles.QR2Item, styles.groupChildBg]} />
      <Image
        style={styles.accountBalanceWallet}
        contentFit="cover"
        source={require("../assets/account-balance-wallet.png")}
      />
      <Text style={[styles.balance, styles.textTypo]}>Balance:</Text>
      <Text style={[styles.text, styles.textTypo]}>10.000.000 đ</Text>
      <View style={[styles.QR2Inner, styles.lineViewBorder]} />
      <Text style={[styles.buyTicket, styles.paymentTypo]}>Buy Ticket</Text>
      <Text style={[styles.bus53, styles.bus53Typo]}>Bus 53</Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <Text style={[styles.text1, styles.bus53Typo]}>3.000 đ</Text>
      <Text style={[styles.numberPlatesXxXxxxxx, styles.bus53Typo]}>
        Number Plates: XX-XXXXXX
      </Text>
      <Pressable
        style={[styles.rectangleParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("QR3")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moveTypo: {
    height: '15%',
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: 144,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  paymentTypo: {
    color: Color.primary900,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28, 
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
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    height: 58,
    width: 341,
    position: "absolute",
  },
  doneTypo: {
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
  },
  QR2Child: {
    width: '100%', // Sử dụng đơn vị động
    height: '100%', // Sử dụng đơn vị động
    backgroundColor: Color.white,
    left: 0,
    top: 0,
    position: "absolute",
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
    height: 352,
    display: "none",
    opacity: 0.3,
    top: 376,
    width: 414,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: '5%', // Sử dụng đơn vị động
    top: '5%', // Sử dụng đơn vị động
    width: '5%', // Sử dụng đơn vị động
    height: '5%', // Sử dụng đơn vị động
    position: "absolute",
  },
  payment: {
    top: 38,
    left: 60,
    width: 272,
    height: 33,
  },
  QR2Item: {
    top: 788,
    left: 41,
    width: 329,
    height: 67,
    position: "absolute",
  },
  accountBalanceWallet: {
    top: 797,
    left: 67,
    width: 50,
    height: 50,
    position: "absolute",
    overflow: "hidden",
  },
  balance: {
    top: 806,
    left: 126,
    color: Color.gray_100,
    width: 94,
    height: 36,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
  },
  text: {
    top: 810,
    left: 220,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.yellow,
  },
  QR2Inner: {
    top: 129,
    left: 28,
    borderRadius: Border.br_3xl,
    borderColor: "#101828",
    borderWidth: 1,
    width: 359,
    height: 331,
    backgroundColor: Color.white,
  },
  buyTicket: {
    top: 96,
    left: 141,
  },
  bus53: {
    top: 154,
    left: 152,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
  },
  lineView: {
    left: 89,
    borderColor: "#98a2b3",
    borderTopWidth: 1,
    width: 236,
    height: 1,
    top: 376,
  },
  text1: {
    top: 336,
    left: 140,
    fontSize: FontSize.h1Header136ptSemiBoldLexend_size,
  },
  numberPlatesXxXxxxxx: {
    top: 210,
    left: 100,
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
  },
  groupChild: {
    backgroundColor: Color.primary700,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  done: {
    top: 16,
    left: 131,
    color: Color.aliceblue,
    width: 83,
    height: 25,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    textAlign: "left",
    fontWeight: "600",
    lineHeight: 28,
    position: "absolute",
  },
  rectangleParent: {
    top: 500,
    left: 35,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  QR2: {
    backgroundColor: Color.aliceblue,
    flex: 1, // Sử dụng flexbox để co dãn tự động
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default QR2;
