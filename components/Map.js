import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, Component } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { useNavigation } from "@react-navigation/native";
import { GOOGLE_MAPS_APIKEY } from "@env";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const state = {
  coordinates: [
    {
      latitude: 37.3317876,
      longitude: -122.0054812,
    },
    {
      latitude: 37.771707,
      longitude: -122.4053769,
    },
  ],
};

const Map = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!origin || !destination) return;

    //Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 100, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json
            ?destinations=${destination.description}&origins=${origin.description}&key=${GOOGLE_MAPS_APIKEY}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
          // console.log(data);
        });
    };
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      ref={mapRef}
      style={[
        tw`flex-1`,
        {
          justifyContent: "flex-end",
          alignItems: "center",
        },
      ]}
      mapType="mutedStandard"
      //   initialRegion={{
      //     latitude: origin.location.lat,
      //     longitude: origin.location.lng,
      //     latitudeDelta: 0.005,
      //     longitudeDelta: 0.005,
      //   }}
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          // origin={origin.description}
          // destination={destination.description}
          // apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
          origin={state.coordinates[0]}
          waypoints={
            state.coordinates.length > 2
              ? state.coordinates.slice(1, -1)
              : undefined
          }
          destination={state.coordinates[state.coordinates.length - 1]}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
      >
        <Text style={tw`text-white text-xl`}>Done</Text>
      </TouchableOpacity>

      {/* <View
        style={{
          // backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: 1,
        }}
      >
        <TouchableOpacity
          style={[
            tw`py-3 m-3 mb-15`,
            {
              backgroundColor: "#53825F",

              //
              // alignItems: "center",
              // justifyContent: "center",
              paddingLeft: 100,
              paddingRight: 100,
              borderRadius: 10,
              
            },
          ]}
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <Text style={tw`text-center text-white text-xl`}>Done</Text>
        </TouchableOpacity>
      </View> */}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  button: [
    tw`py-3 m-3 mb-15`,
    {
      backgroundColor: "#53825F",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingLeft: 100,
      paddingRight: 100,
      borderRadius: 10,
    },
  ],
});
