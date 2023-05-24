import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native'
import tw from 'twrnc'

const data = [
    {
        id: "1",
        icon: "home",
        location: "Home",
        destination: "Ki tuc xa khu A DHQG",
    },
    {
        id: "2",
        icon: "school",
        location: "School",
        destination: "Dai hoc Bach Khoa co so 2 DHQG",
    }
];

const NavFavourites = () => {
    const navigation = useNavigation();
  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200 h-1`, { height: 0.5,}]} />
        )}
        renderItem={({item: { location, destination, icon }}) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`} onPress={() => {
                navigation.navigate("RideOptionsCard")
            }}  >
                
                <Icon 
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
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
  )
}

export default NavFavourites

const styles = StyleSheet.create({})