import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const QR1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.QR1}>
      <View style={[styles.QR1Child, styles.moveParentPosition]} />
      <View style={[styles.moveParent, styles.moveParentPosition]}>
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
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Text style={styles.payment}>Payment</Text>
      <View style={styles.QR1Item} />
      <Image
        style={[
          styles.QR1Inner,
          styles.accountBalanceWalletPosition,
        ]}
        contentFit="cover"
        source={require("../assets/group-87.png")}
      />
      <Pressable
        style={styles.image3}
        onPress={() => navigation.navigate("IPhone11ProMax36")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
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
  accountBalanceWalletPosition: {
    left: 67,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    top: 811,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  QR1Child: {
    backgroundColor: Color.white,
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
    left: 17,
    top: 46,
    width: 19,
    height: 19,
    position: "absolute",
  },
  payment: {
    top: 38,
    left: 60,
    fontSize: FontSize.h31Header3128ptSemiBoldLexend_size,
    color: Color.primary900,
    width: 272,
    height: 33,
    fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
  },
  QR1Item: {
    top: 98,
    left: 26,
    borderRadius: Border.br_3xl,
    backgroundColor: "#eff1f5",
    borderStyle: "solid",
    borderColor: "#101828",
    borderWidth: 1,
    width: 359,
    height: 663,
    position: "absolute",
  },
  QR1Inner: {
    top: 290,
    width: 278,
    height: 318,
  },
  image3: {
    left: 91,
    top: 334,
    width: 229,
    height: 229,
    position: "absolute",
  },
  rectangleView: {
    top: 788,
    left: 41,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.primary700,
    width: 329,
    height: 67,
    position: "absolute",
  },
  accountBalanceWallet: {
    top: 797,
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  balance: {
    left: 126,
    color: Color.gray_100,
    width: 97,
    height: 36,
  },
  text: {
    left: 223,
    color: Color.yellow,
  },
  QR1: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default QR1;
