import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Animated} from 'react-native';
import React, { useState, useRef } from 'react';
import { Color } from '../GlobalStyles';
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
export default function SplashScreen() {
  const width = screenWidth/2;
  const [isAnimated, setIsAnimated] = useState(false);
  const navigation = useNavigation();
  const arrowAnim = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.timing(arrowAnim, {
      toValue: -30, // move image 100 units to the left
      duration: 2000, // animation duration in milliseconds
      useNativeDriver: true, // required for performance
    }).start();
  };


  const ShowAnimation = () => {
    return(
      <View style={{
        position: 'absolute',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Animated.Image
            source={require('../assets/arrow_3.png')}
            style={{
              transform: [{ translateX: arrowAnim }],
              // width: width,
              // height: 50,
            }}
          >

          </Animated.Image>
        </View>
      </View>
    )
  }
  
  const ButtonNext = () => {
    return (
      <TouchableOpacity 
        style={[styles.button, {width: screenWidth-50}]}
        onPress={()=>{
          navigation.navigate('StartingScreen1');
        }}
      >
        <Text style={{
          fontFamily: 'Lexend_semibold',
          fontSize: 20, 
          color: 'white',
        }}>Get Started</Text>
        <Image source={require('../assets/right_arrow.png')}/>
      </TouchableOpacity>     
    )
  }

  return (
    <View style= {styles.container}>
      <View style={{
        flex: 1,
        // position: 'absolute', 
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity style={[{
            width: width,
            height: width,
            zIndex: 2,
            // display: isAnimated ? 'none' : 'flex',
          },styles.logo,]}
          onPress={() => {
            setIsAnimated(true);
            startAnimation();
          }}
          disabled={isAnimated}
          >
            <Text style={styles.title}>BusBud</Text>
          </TouchableOpacity>
          {(isAnimated) && <ShowAnimation/>}
        </View>
        {
          (isAnimated) && 
          <View style={[styles.subLogoContainer,]}>
            <Text style={{
              fontFamily: 'Lexend_medium',
              fontSize: 20,
            }}>Move with safety</Text>
            <Image source={require('../assets/safety.png')}/>
          </View>
        }
        
      </View>
      

      <View style={{
        // position: 'absolute', 
        // flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        }}>
        { (isAnimated) && <ButtonNext/>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    backgroundColor: Color.primary700,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
     shadowOpacity: 0.9,
     shadowRadius: 90,
     elevation: 10,
  },
  title: {
    fontSize: 36,
    fontFamily: 'Lexend_semibold',
    color: 'white',
  },
  subLogoContainer: {
    marginTop: 40,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginTop: 50,
    marginBottom: 50,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 20,
    backgroundColor: Color.primary900,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
     shadowOpacity: 0.9,
     shadowRadius: 90,
     elevation: 10,
  }
});