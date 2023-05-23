import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
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
        onPress={() => navigation.navigate("IPhone11ProMax36")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Text style={[styles.payment, styles.paymentTypo]}>Payment</Text>
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
    height: 58,
    width: 341,
    position: "absolute",
  },
  QR3Child: {
    backgroundColor: Color.white,
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
    display: "none",
    opacity: 0.3,
    width: 414,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 19,
    top: 45,
    width: 19,
    height: 19,
    position: "absolute",
  },
  payment: {
    top: 38,
    left: 60,
    color: Color.primary900,
    width: 272,
  },
  paymentSuccess: {
    top: 360,
    left: 87,
    color: Color.secondary600,
    width: 255,
  },
  image4Icon: {
    top: 175,
    left: 129,
    width: 156,
    height: 156,
    position: "absolute",
  },
  text: {
    top: 420,
    left: 139,
    fontSize: FontSize.h1Header136ptSemiBoldLexend_size,
    color: Color.black,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  abcdef: {
    left: 298,
    top: 527,
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    color: Color.black,
  },
  buyTicketBus: {
    left: 202,
    top: 578,
    color: Color.black,
  },
  april242023: {
    top: 622,
    left: 244,
    color: Color.black,
  },
  am: {
    left: 302,
    top: 676,
    color: Color.black,
  },
  text1: {
    top: 724,
    left: 274,
    color: Color.black,
  },
  QR3Item: {
    top: 504,
    left: 28,
    width: 354,
    height: 1,
    position: "absolute",
  },
  paymentCode: {
    width: 161,
    fontSize: FontSize.hint14ptSemiBoldLexend_size,
    display: "flex",
    color: Color.gray400,
    top: 527,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
  },
  transaction: {
    top: 578,
  },
  date: {
    top: 629,
  },
  time: {
    top: 676,
  },
  balance: {
    top: 727,
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
    top: 16,
    left: 144,
    color: Color.aliceblue,
    width: 53,
    height: 25,
  },
  rectangleParent: {
    top: 792,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 36,
    width: 341,
  },
  QR3: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default QR3;
