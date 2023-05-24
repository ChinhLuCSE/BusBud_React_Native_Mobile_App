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
        onPress={() => navigation.navigate("QR2")}
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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  moveParentPosition: {
    left: 0,
    width: '100%',
    position: 'absolute',
  },
  moveTypo: {
    height: '15%',
    textAlign: 'left',
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontWeight: '700',
    fontSize: Math.min(windowWidth, windowHeight) * 0.1, // Điều chỉnh kích thước phông chữ dựa trên kích thước nhỏ hơn của cửa sổ
    left: 0,
    position: 'absolute',
  },
  accountBalanceWalletPosition: {
    left: '16%',
    position: 'absolute',
  },
  textTypo: {
    fontSize: Math.min(windowWidth, windowHeight) * 0.04, // Điều chỉnh kích thước phông chữ dựa trên kích thước nhỏ hơn của cửa sổ
    top: windowHeight * 0.9,
    fontFamily: 'h1Header136ptSemiBoldLexend',
    fontWeight: '600',
    lineHeight: 28,
    textAlign: 'left',
    position: 'absolute',
  },
    QR1Child: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    },
    move: {
    width: '86%',
    top: 0,
    },
    with: {
    top: '12%',
    width: '66%',
    },
    safety: {
    top: '24%',
    width: '100%',
    },
    moveParent: {
    top: '42%',
    height: '39%',
    display: "none",
    opacity: 0.3,
    width: '100%',
    },
    icon: {
    height: "100%",
    width: "100%",
    },
    wrapper: {
    left: '4%',
    top: '5%',
    width: '4.6%',
    height: '2.2%',
    position: "absolute",
    },
    payment: {
    top: '4%',
    left: '14%',
    fontSize: Math.min(windowWidth, windowHeight) * 0.05, // adjust font size based on smaller dimension
    color: "#2f2f2f",
    width: '65%',
    height: '4%',
    fontFamily: 'h1Header136ptSemiBoldLexend',
    fontWeight: "600",
    lineHeight: 28,
    textAlign: "left",
    position: "absolute",
    },
    QR1Item: {
    top: '11%',
    left: '6%',
    borderRadius: 50,
    backgroundColor: "#eff1f5",
    borderStyle: "solid",
    borderColor: "#101828",
    borderWidth: 1,
    width: '88%',
    height: '72%',
    position: "absolute",
    },
    QR1Inner: {
    top: '32%',
    width: '67%',
    aspectRatio: 1, // set to keep aspect ratio
    },
    image3: {
    left: '22%',
    top: '37%',
    width: '55%',
    height: '26%',
    position: "absolute",
    },
    rectangleView: {
    top: '88%',
    left: '10%',
    borderRadius: 20,
    backgroundColor: "#2f2f2f",
    width: '80%',
    height: '7.5%',
    position: "absolute",
    },
    accountBalanceWallet: {
    top: '89%',
    maxWidth: '15%',
    maxHeight: '15%',
    overflow: "hidden",
    },
    balance: {
    left: '30%',
    color: "#bcbcbc",
    width: '23%',
    height: '4%',
    },
    text: {
    left: '54%',
    color: "#e8b517",
    },
    QR1: {
    backgroundColor: "#F0F2F5",
    flex: 1,
    overflow: "hidden",
    height: '100%',
    width: '100%',
    },
    });
    
    export default QR1;