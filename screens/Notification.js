import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, { useState, useEffect} from 'react';
import { Color } from '../GlobalStyles';
const ScreenWidth = Dimensions.get("window").width;
import { useNavigation } from "@react-navigation/native";
export default function Notifications(){
    const navigation = useNavigation();
    const [countNotifications, setCountNotifications] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        console.log('Pressed!')
                        navigation.navigate("HomeScreen");
                        }}
                >
                    <Image 
                        style={[styles.headerImage,{ width: 30}]} 
                        source={require('../assets/white-left-arrow.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
            </View>
            <View style={styles.body}>
                {countNotifications === 0 &&(
                    <View style={styles.noneNotification}>
                        
                        <Image 
                            style={{height: 200, }}
                            source={require('../assets/no-notification.png')}
                            resizeMode="contain"
                        />
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontFamily: 'Lexend_semibold',
                                fontSize: 20,
                            }}>You are all up to date!</Text>
                            <Text style= {{
                                fontFamily: 'Lexend_light',
                                fontSize: 14,                                
                            }}>No new notifications available at the moment,</Text>
                            <Text style= {{
                                fontFamily: 'Lexend_light',
                                fontSize: 14,                                
                            }}>come back soon to discover new offers</Text>
                            
                        </View>
                    </View>
                )}
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Color.white,
    },
    header: {
        flex: 1,
        backgroundColor: Color.primary900,
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerImage: {
        paddingRight: 20,
    },  
    headerTitle: {
        fontFamily: 'Lexend_semibold',
        fontSize: 36,
        color: Color.white,
        paddingLeft:20,
    },
    body: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noneNotification: {
        padding: 20,
    }

});