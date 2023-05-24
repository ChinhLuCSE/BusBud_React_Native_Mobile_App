import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

// 10.880841620864786, 106.80642539924703 BK co so 2
// 10.772149371725169, 106.65820009581476 BK co so 1
// 10.882364771403342, 106.78291540678525 KTX khu B
// 10.878486718182074, 106.80708453138284 KTX khu A

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Ki tuc xa khu A DHQG",
    screen: "MapScreen",
  },
  {
    id: "2",
    icon: "school",
    location: "School",
    destination: "Dai hoc Bach Khoa co so 2 DHQG",
    screen: "MapScreen",
  },
  {
    id: "3",
    icon: "school",
    location: "School",
    destination: "Dai hoc Bach Khoa co so 2 DHQG",
    screen: "MapScreen",
  },
];

const NavFavourites_HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 h-1`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity
          style={tw`flex-row items-center p-5`}
          onPress={() => {
            navigation.navigate("MapScreen");
          }}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites_HomeScreen;

const styles = StyleSheet.create({
  footer: {
    height: 500,
  },
});
