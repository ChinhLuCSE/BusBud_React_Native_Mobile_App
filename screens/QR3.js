import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const QR3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.QR3}>
      <View style={styles.QR3Child} />
      <View style={styles.moveParent}>
        <Text style={[styles.move, styles.moveTypo]}>Move</Text>
        <Text style={[styles.with, styles.moveTypo]}>with</Text>
        <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
      </View>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("QR2")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
      <Text style={[styles.paymentSuccess, styles.paymentTypo]}>
        Payment Success
      </Text>
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
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
        resizeMode="cover"
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
        onPress={() => navigation.navigate("IPhone11ProMax9")}
      >
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.done, styles.amTypo]}>Done</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moveTypo: {
    flex: 1,
    color: Color.white,
    fontFamily: FontFamily.robotoBold,
    fontSize: "10%", // Adjust the value as needed
    textAlign: "left",
  },
  paymentTypo: {
    fontSize: "3%", // Adjust the value as needed
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: "4%", // Adjust the value as needed
    textAlign: "left",
  },
  amTypo: {
    fontSize: "2%", // Adjust the value as needed
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: "4%", // Adjust the value as needed
    textAlign: "left",
  },
  balanceFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.gray400,
    textAlign: "left",
  },
  dateTypo: {
    width: "30%", // Adjust the value as needed
    alignItems: "center",
    display: "flex",
    color: Color.gray400,
    fontSize: "1.5%", // Adjust the value as needed
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: "4%", // Adjust the value as needed
    textAlign: "left",
  },
  groupChildLayout: {
    width: "80%", // Adjust the value as needed
  },
  QR3Child: {
    backgroundColor: Color.white,
    flex: 1,
    height: "100%",
    width: "100%",
  },
  move: {
    width: "85%", // Adjust the value as needed
  },
  with: {
    width: "66%", // Adjust the value as needed
  },
  safety: {
    width: "100%",
  },
  moveParent: {
    height: "39%", // Adjust the value as needed
    display: "flex",
    opacity: 0.3,
    width: "100%",
  },
  icon: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  wrapper: {
    width: "4.5%", // Adjust the value as needed
    aspectRatio: 1,
  },
  payment: {
    color: Color.primary900,
    width: "65%", // Adjust the value as needed
  },
  paymentSuccess: {
    color: Color.secondary600,
    width: "61%", // Adjust the value as needed
  },
  image4Icon: {
    width: "37.5%", // Adjust the value as needed
    aspectRatio: 1,
  },
  text: {
    fontSize: "2%", // Adjust the value as needed
    color: Color.black,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: "4%", // Adjust the value as needed
    textAlign: "left",
  },
  abcdef: {
    fontSize: "2%", // Adjust the value as needed
    color: Color.black,
  },
  buyTicketBus: {
    color: Color.black,
  },
  april242023: {
    color: Color.black,
  },
  am: {
    color: Color.black,
  },
  text1: {
    color: Color.black,
  },
  QR3Item: {
    width: "85%", // Adjust the value as needed
    height: 1,
  },
  paymentCode: {
    width: "39%", // Adjust the value as needed
    fontSize: "1.5%", // Adjust the value as needed
    display: "flex",
    color: Color.gray400,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: "4%", // Adjust the value as needed
  },
  transaction: {},
  date: {},
  time: {},
  balance: {
    fontSize: "2%", // Adjust the value as needed
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    width: "28%", // Adjust the value as needed
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary700,
  },
  done: {
    color: Color.aliceblue,
    width: "13%", // Adjust the value as needed
    height: "3%", // Adjust the value as needed
  },
  rectangleParent: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: "82%", // Adjust the value as needed
  },
  QR3: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
});

export default QR3;
