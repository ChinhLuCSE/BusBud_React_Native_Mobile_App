import React, { useState, useCallback } from "react";
import { StyleSheet, View, Pressable, Text, Modal, Dimensions, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import DoItLaterOverlay from "../components/DoItLaterOverlay";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const StartingScreen6 = () => {
  const navigation = useNavigation();
  const [dOTHISLATERVisible, setDOTHISLATERVisible] = useState(false);

  const openDOTHISLATER = useCallback(() => {
    setDOTHISLATERVisible(true);
  }, []);

  const closeDOTHISLATER = useCallback(() => {
    setDOTHISLATERVisible(false);
  }, []);
  // const [isTextFramed, setIsTextFramed] = useState(false);

  // const handleTextPress = () => {
  //   setIsTextFramed(!isTextFramed);
  // };
  return (
    // <>
    //   <View style={styles.StartingScreen6}>
    //     <View style={styles.StartingScreen6Child} />
    //     <Pressable
    //       style={[styles.StartingScreen6Item, styles.StartingScreen6ItemLayout]}
    //       onPress={() => navigation.reset({
    //         index: 0,
    //         routes: [{name: 'HomeScreen'}]
    //       })}
    //     />
    //     <View style={styles.moveParent}>
    //       <Text style={[styles.move, styles.moveTypo]}>Move</Text>
    //       <Text style={[styles.with, styles.moveTypo]}>with</Text>
    //       <Text style={[styles.safety, styles.moveTypo]}>Safety</Text>
    //     </View>
    //     <Text style={[styles.next, styles.nextTypo]}>Next</Text>
    //     <Text style={[styles.selectYourPreferred, styles.nextTypo]}>
    //       Select your preferred payment method
    //     </Text>
    //     <Pressable
    //       style={styles.doThisLaterContainer}
    //       onPress={openDOTHISLATER}
    //     >
    //       <Text style={[styles.doThisLater, styles.nextTypo]}>
    //         DO THIS LATER
    //       </Text>
    //     </Pressable>
    //     <View style={[styles.groupParent, styles.groupLayout]}>
    //       <View style={[styles.cashWrapper, styles.cashLayout]}>
    //         <Text style={[styles.cash, styles.cashTypo]}>Cash</Text>
    //       </View>
    //       <Image
    //         style={[styles.cashIcon, styles.groupLayout]}
    //         contentFit="cover"
    //         source={require("../assets/cash.png")}
    //       />
    //     </View>
    //     <View style={[styles.groupContainer, styles.groupLayout]}>

    //       <View style={[styles.creditOrDecitCardWrapper, styles.creditLayout]}>
           
    //         <Text style={[styles.creditOrDecit, styles.creditLayout]}>
    //           Credit or Decit Card
    //         </Text>
           
    //       </View>
    //       <Image
    //         style={[styles.cashIcon, styles.groupLayout]}
    //         contentFit="cover"
    //         source={require("../assets/credit-card.png")}
    //       />
    //     </View>
    //     <View style={[styles.groupView, styles.groupLayout]}>
    //       <View style={[styles.paytmWrapper, styles.paytmLayout]}>
    //         <Text style={[styles.paytm, styles.paytmLayout]}>Paytm</Text>
    //       </View>
    //       <Image
    //         style={[styles.cashIcon, styles.groupLayout]}
    //         contentFit="cover"
    //         source={require("../assets/paytm.png")}
    //       />
    //     </View>
    //   </View>

    //   <Modal animationType="fade" transparent visible={dOTHISLATERVisible}>
    //     <View style={styles.dOTHISLATEROverlay}>
    //       <Pressable style={styles.dOTHISLATERBg} onPress={closeDOTHISLATER} />
    //       <DoItLaterOverlay onClose={closeDOTHISLATER} />
    //     </View>
    //   </Modal>
    // </>

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            alignItems: "flex-end",
            paddingBottom: 20,
            fontSize: 30,
            
          }}
          onPress={openDOTHISLATER}
        >
          <Text style={
            {
              color: Color.secondary600
            }
          }>
            DO THIS LATER
          </Text>
        </TouchableOpacity>
        <Text style={{
          fontFamily: 'Lexend_semibold',
          fontSize: 19,
          color: Color.primary900,
          paddingBottom: 20,
        }}
        >
        Select your preferred payment method
        </Text>
      </View>
      <View style={styles.body}>
        <View style={{
          flexDirection: 'column'
        }}>
            <TouchableOpacity style={styles.choosingContainer} onPress={() => {
            
          }}>
            <Image 
              style={styles.logo}
              source={require('../assets/credit-card.png')}
            />
            <Text style={styles.logoText}>Credit or Decit Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choosingContainer} onPress={() => {
            
          }}>
            <Image 
              style={styles.logo}
              source={require('../assets/paytm.png')}
            />
            <Text style={styles.logoText}>Paytm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.choosingContainer} onPress={() => {
            
          }}>
            <Image 
              style={styles.logo}
              source={require('../assets/cash.png')}
            />
            <Text style={styles.logoText}>Cash</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
          <TouchableOpacity style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Color.primary700,
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 20,
            marginBottom: 20,
            shadowColor: 'black',
            shadowOffset: {
              width: 0,
              height: 0,
            },
             shadowOpacity: 0.9,
             shadowRadius: 90,
             elevation: 10,
          }}
          onPress={() => {
            navigation.navigate('HomeScreen', 123)
          }}
          >
            <Text style={{
              fontFamily: 'Lexend_semibold',
              fontSize: 20,
              color: Color.white,
            }}>Next</Text>
          </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent visible={dOTHISLATERVisible}>
         <View style={styles.dOTHISLATEROverlay}>
           <Pressable style={styles.dOTHISLATERBg} onPress={closeDOTHISLATER} />
           <DoItLaterOverlay onClose={closeDOTHISLATER} />
         </View>
       </Modal>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    padding: 20,
    flexDirection: 'column',

  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    
    marginTop: 50,
    // backgroundColor: 'blue'
  },
  body: {
    flex: 5,
    padding: 10,
    // backgroundColor: "blue",
  },
  logo: {
    width: 30,
    height: 30,
  },
  logoText: {
    fontFamily: 'Lexend_semibold',
    fontSize: 20,
    color: Color.black,
    marginLeft: 40,
    justifyContent: 'center',
  },
  choosingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },



  // StartingScreen6ItemLayout: {
  //   width: 341,
  //   position: "absolute",
  // },
  // moveTypo: {
  //   height: 169,
  //   textAlign: "left",
  //   color: Color.white,
  //   fontFamily: FontFamily.robotoBold,
  //   fontWeight: "700",
  //   fontSize: 144,
  //   left: 0,
  //   position: "absolute",
  // },
  // nextTypo: {
  //   fontFamily: FontFamily.h1Header136ptSemiBoldLexend,
  //   fontWeight: "600",
  //   lineHeight: 28,
  //   textAlign: "left",
  // },
  // groupLayout: {
  //   height: 50,
  //   position: "absolute",
  // },
  // cashLayout: {
  //   height: 31,
  //   width: 96,
  //   position: "absolute",
  // },
  // cashTypo: {
  //   color: Color.gray_200,
  //   fontFamily: FontFamily.paragraph20ptLightLexend,
  //   lineHeight: 28,
  //   fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
  //   textAlign: "left",
  //   left: 0,
  //   top: 0,
  // },
  // creditLayout: {
  //   height: 30,
  //   width: 200,
  //   position: "absolute",
  // },
  // paytmLayout: {
  //   height: 30,
  //   width: 96,
  //   position: "absolute",
  // },
  // StartingScreen6Child: {
  //   backgroundColor: Color.white,
  //   width: 414,
  //   left: 0,
  //   top: 0,
  //   position: "absolute",
  //   height: 896,
  // },
  // StartingScreen6Item: {
  //   top: 750,
  //   left: 37,
  //   borderRadius: Border.br_3xs,
  //   backgroundColor: Color.primary700,
  //   shadowColor: "rgba(0, 0, 0, 0.25)",
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   shadowRadius: 4,
  //   elevation: 4,
  //   shadowOpacity: 1,
  //   height: 58,
  // },
  // move: {
  //   width: 356,
  //   top: 0,
  // },
  // with: {
  //   top: 136,
  //   width: 273,
  // },
  // safety: {
  //   top: 271,
  //   width: 414,
  // },
  // moveParent: {
  //   top: 288,
  //   height: 440,
  //   display: "none",
  //   opacity: 0.3,
  //   width: 414,
  //   left: 0,
  //   position: "absolute",
  // },
  // next: {
  //   top: 765,
  //   left: 182,
  //   color: Color.aliceblue,
  //   width: 55,
  //   height: 25,
  //   fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
  //   fontWeight: "600",
  //   lineHeight: 28,
  //   position: "absolute",
  // },
  // selectYourPreferred: {
  //   top: 143,
  //   fontSize: FontSize.hint16ptSemiBoldLexend_size,
  //   color: Color.primary900,
  //   height: 33,
  //   left: 39,
  //   width: 341,
  //   position: "absolute",
  // },
  dOTHISLATEROverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  dOTHISLATERBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  // doThisLater: {
  //   fontSize: FontSize.hint14ptSemiBoldLexend_size,
  //   color: Color.secondary600,
  //   width: 162,
  //   height: 20,
  // },
  // doThisLaterContainer: {
  //   left: 267,
  //   top: 76,
  //   position: "absolute",
  // },
  // cash: {
  //   height: 31,
  //   width: 96,
  //   position: "absolute",
  // },
  // cashWrapper: {
  //   left: 75,
  //   top: 8,
  // },
  // cashIcon: {
  //   width: 50,
  //   left: 0,
  //   top: 0,
  // },
  // groupParent: {
  //   top: 321,
  //   width: 171,
  //   height: 50,
  //   left: 39,
  // },
  // creditOrDecit: {
  //   color: Color.gray_200,
  //   fontFamily: FontFamily.paragraph20ptLightLexend,
  //   lineHeight: 28,
  //   fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
  //   textAlign: "left",
  //   left: 0,
  //   top: 0,
  // },
  // creditOrDecitCardWrapper: {
  //   left: 75,
  //   top: 8,
  // },
  // groupContainer: {
  //   top: 191,
  //   width: 275,
  //   left: 39,
  // },
  // paytm: {
  //   color: Color.gray900,
  //   fontFamily: FontFamily.paragraph20ptLightLexend,
  //   height: 30,
  //   lineHeight: 28,
  //   fontSize: FontSize.paragraph20ptSemiBoldLexend_size,
  //   textAlign: "left",
  //   left: 0,
  //   top: 0,
  // },
  // paytmWrapper: {
  //   left: 75,
  //   top: 8,
  // },
  // groupView: {
  //   top: 256,
  //   width: 171,
  //   height: 50,
  //   left: 39,
  // },
  // StartingScreen6: {
  //   backgroundColor: Color.aliceblue,
  //   flex: 1,
  //   width: "100%",
  //   overflow: "hidden",
  //   height: 896,
  // },
  
});

export default StartingScreen6;
