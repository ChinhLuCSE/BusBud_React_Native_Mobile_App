import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
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

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView 
    style={styles.container1}>
      <View style={styles.header}>
        
      </View>
      <View>
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
      </View>
      
      <View style={styles.body}>
        <View style={styles.nav}>
          <NavOptions />
          <Text style={styles.favorite}>Favorites</Text>
          <NavFavourites/>
        </View>
      </View>
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: Color.white,
  },
  header: {
    flex: 1,
    // backgroundColor: 'blue',
    // justifyContent: 'center'

  },
  body: {
    flex: 4,
    paddingTop: 20,
    // backgroundColor: 'yellow'
  },
  nav: {
    
    position: 'absolute',
    // flexDirection: 'column',
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  favorite: {
    fontFamily: 'Lexend_light',
    fontSize: 20,
  }
})