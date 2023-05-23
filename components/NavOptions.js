import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../slices/navSlice'
import { Color } from '../GlobalStyles'

const data = [
    {
        id: "1",
        title: "Get a bus",
        image: require("../assets/bus.png"),
        screen: "MapScreen",
        bg_color: Color.secondary600,
    },
    {
        id: "2",
        title: "Bus Stops",
        image: require("../assets/location.png"),
        screen: "BlaBla",
        bg_color: Color.primary500,
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    const [containerWidth, setContainerWidth] = useState(0);
    const onLayoutContainer = (event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    };
    const elementWidth = (containerWidth - 10) / 2; // Subtract 10 for padding
    const elementHeight = elementWidth;

  return (
    <FlatList 
        style={styles.container}
        onLayout={onLayoutContainer}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={[styles.subContainer, {height: elementHeight*1.1, width: elementWidth - 15, backgroundColor: item.bg_color}]}
                disabled={!origin}
                >
                <View style={{flexDirection: 'column'}}>
                    <View style= {styles.image}>
                        <Image
                            style={{width: elementWidth/2.5}}
                            source={item.image}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={styles.content}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }, 
    subContainer: {
        flex: 1,
        margin: 10,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex:5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 2,
        fontFamily: 'Lexend_medium',
        fontSize: 20,
        color: 'white',
    },
});

export default NavOptions
