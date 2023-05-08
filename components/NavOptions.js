import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'

const data = [
    {
        id: "1",
        title: "Get a bus",
        image: "../assets/images/png-transparent-bus-computer-icons-iconfinder-free-icon-bus-angle-text-rectangle-thumbnail.png",
        screen: "MapScreen",
    },
    {
        id: "2",
        title: "Bla Bla",
        image: "../assets/images/istockphoto-1136216828-612x612.jpg",
        screen: "BlaBla"
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2`}
                disabled={!origin}
                >
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                        style={{ width:120, height:120, resizeMode:"contain" }}
                        source={{ure: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright"
                        color="white"
                        type='antdesign'
                    />
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions
