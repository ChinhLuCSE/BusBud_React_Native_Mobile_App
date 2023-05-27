import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import 'react-native-gesture-handler'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartingScreen5 from "./screens/StartingScreen5";
import StartingScreen4 from "./screens/StartingScreen4";

import StartingScreen2 from "./screens/StartingScreen2";

import StartingScreen3 from "./screens/StartingScreen3";
import StartingScreen1 from "./screens/StartingScreen1";
import StartingScreen6 from "./screens/StartingScreen6";
import QR1 from "./screens/QR1";
import QR2 from "./screens/QR2";
import QR3 from "./screens/QR3";
import Map1 from "./screens/Map1";
import Map2 from "./screens/Map2";
import Setting from "./screens/Setting";
import Notifications from "./screens/Notification";
import Payments from "./screens/Payments";
import AccountSetting from "./screens/AccountSetting";
import MenuOverlay from "./screens/MenuOverlay";
import SplashScreen from "./screens/SplashScreen";
const checkFirstLaunch = async () => {
  const isFirstLaunch = await AsyncStorage.getItem('alreadyLaunched');
  if(isFirstLaunch == null) {
    AsyncStorage.setItem('alreadyLaunched', 'true');
    return true;
  }
  return false;
};

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  const Stack = createNativeStackNavigator();
  const [fontsLoaded, error] = useFonts({
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    Lexend_light: require("./assets/fonts/Lexend_light.ttf"),
    Lexend_regular: require("./assets/fonts/Lexend_regular.ttf"),
    Lexend_medium: require("./assets/fonts/Lexend_medium.ttf"),
    Lexend_semibold: require("./assets/fonts/Lexend_semibold.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    // "SF Pro Display_medium": require("./assets/fonts/SF_Pro_Display_medium.ttf"),
  });

  React.useEffect(() => {
    checkFirstLaunch().then(result => setIsFirstLaunch(result));
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{
                  headerShown: false,
                }}
              />
               <Stack.Screen
                name="StartingScreen1"
                component={StartingScreen1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen2"
                component={StartingScreen2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen3"
                component={StartingScreen3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen4"
                component={StartingScreen4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen5"
                component={StartingScreen5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen6"
                component={StartingScreen6}
                options={{ headerShown: false }}
              /> 
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MenuOverlay"
                component={MenuOverlay}
                options={{
                  headerShown: false,
                }}
              />              
              <Stack.Screen
                name="QR1"
                component={QR1}
                options={{
                  headerShown: false,
                }}
              />
               <Stack.Screen
                name="QR2"
                component={QR2}
                options={{
                  headerShown: false,
                }}
              />
               <Stack.Screen
                name="QR3"
                component={QR3}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Setting"
                component={Setting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Payments"
                component={Payments}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccountSetting"
                component={AccountSetting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
              name="Map2"
              component={Map2}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Map1"
              component={Map1}
              options={{
                headerShown: false,
              }}
            />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
  } else {
    return(
      <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
          <Stack.Navigator>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
                name="StartingScreen1"
                component={StartingScreen1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen2"
                component={StartingScreen2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen3"
                component={StartingScreen3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen4"
                component={StartingScreen4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen5"
                component={StartingScreen5}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StartingScreen6"
                component={StartingScreen6}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MenuOverlay"
                component={MenuOverlay}
                options={{
                  headerShown: false,
                }}
              />              
              <Stack.Screen
                name="QR1"
                component={QR1}
                options={{
                  headerShown: false,
                }}
              />
               <Stack.Screen
                name="QR2"
                component={QR2}
                options={{
                  headerShown: false,
                }}
              />
               <Stack.Screen
                name="QR3"
                component={QR3}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Setting"
                component={Setting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Payments"
                component={Payments}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccountSetting"
                component={AccountSetting}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Map1"
                component={Map1}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Map2"
                component={Map2}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
    );
  }
}
