import React, { useState, useEffect} from "react";
import { BarCodeScanner } from "expo-barcode-scanner";

import { StyleSheet, View, Text, Pressable, Dimensions, Button } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const QR1 = () => {
  const navigation = useNavigation();
  const [hasPermissionQR, setHasPermissionQR] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissionQR(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setResult(data);
  };

  if (hasPermissionQR === null) {
    return <Text>Đang xin cấp quyền truy cập máy ảnh...</Text>;
  }
  if (hasPermissionQR === false) {
    return <Text>Không có quyền truy cập máy ảnh</Text>;
  }
  const navi = () => {
    navigation.navigate("QR2")
  };

  return (
    <View style={styles.QR1}>
      <View style={[styles.QR1Child, styles.moveParentPosition]} />
      
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector-5.png")}
        />
      </Pressable>
      <Text style={styles.payment}>Payment</Text>
      <View style={styles.QR1Item}>
        <View style={styles.containerQR}>
      {scanned ? (
        navi()
      ) : (
        <View style={styles.barcodeScannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
          
        </View>
      )}
    </View></View>
      
      <View style={styles.rectangleView} />
      <Image
        style={[
          styles.accountBalanceWallet,
          styles.accountBalanceWalletPosition,
        ]}
        contentFit="cover"
        source={require("../assets/account-balance-wallet.png")}
      />
      <Text style={[styles.balance, styles.textTypo ]}>Balance:</Text>
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

  accountBalanceWalletPosition: {
    left: 0.121 * screenWidth,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
    top: 0.892 * screenHeight,

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
  QR1Item: {
    top: 0.119 * screenHeight,
    left: 0.063 * screenWidth,
    borderRadius: Border.br_3xl,
    backgroundColor: "#eff1f5",
    borderStyle: "solid",
    borderColor: "#101828",
    borderWidth: 1,
    width: 0.866 * screenWidth,
    height: 0.729 * screenHeight,
    position: "absolute",
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
  QR1: {
    backgroundColor: Color.aliceblue,
    flex: 1,
    overflow: "hidden",
    height: screenHeight,
    width: "100%",
  },
  containerQR: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  barcodeScannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  scanResultText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scanResult: {
    fontSize: 16,
    marginBottom: 20,
  },
  cameraActions: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "flex-end",
  },
  cameraAction: {
    alignSelf: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default QR1;
