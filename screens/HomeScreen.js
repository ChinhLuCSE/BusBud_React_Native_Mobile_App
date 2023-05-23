import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView  } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites';
import Input from '../components/Home/Input';
import { Border, Color } from '../GlobalStyles';
import KeyboardAvoidingWrapper from '../components/Home/KeyboardAvoidingWrapper';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        
        <Image 
          style={{
            width: 100,
            height:100,
            resizeMode:"contain",
          }}
          source={require('../assets/images/busbud-high-resolution-logo-color-on-transparent-background.png')}
        />  
          <SafeAreaView>
          <GooglePlacesAutocomplete
            
            onPress={(data, details = null) => {
              dispatch(
                setOrigin({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              dispatch(setDestination(null))
            }}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "vi",
            }}
            placeholder="Where From?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            styles={{
              container: {
                flex: 0,
                borderColor: "black",
                elevation: 20,
                shadowColor: '#3C3C43',
              },
              textInput: {
                fontSize: 14,
                fontFamily: "Lexend_light",
                borderRadius: 10,
              },
            }}
          />
          </SafeAreaView>
      </View>
      
      
      <View style={styles.body}>
        <NavOptions />
        <NavFavourites/>
      </View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: Color.white,
  },
  header: {
    flex: 1,
    backgroundColor: 'blue'
  },
  body: {
    flex: 4,
    paddingTop: 20,
    // backgroundColor: 'blue'
  },
})