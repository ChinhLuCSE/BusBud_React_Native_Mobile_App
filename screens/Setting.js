import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Button} from 'react-native';
import React, { useState, useEffect} from 'react';
import { Color } from '../GlobalStyles';
const ScreenWidth = Dimensions.get("window").width;
export default function Setting(){
    const [countPayments, setCountPayments] = useState(0);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image 
                        style={[styles.headerImage,{ width: 30}]} 
                        source={require('../assets/white-left-arrow.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Account Settings</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.user}>
                    <View
                        style={{
                            padding: 5,
                            backgroundColor: Color.gray400,
                            width: 70,
                            height: 70,
                            borderRadius:100,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image 
                            style={{ 
                                height: 40, 
                                width: 40, 
                            }} 
                            source={require('../assets/avatar.png')}
                            resizeMode="contain"
                        />
                    </View>
                    
                    <View style={{
                        paddingLeft: 20,
                        justifyContent: 'center',
                        // alignItems: 'center',
                    }}>
                        <Text style={{
                            fontFamily: 'Lexend_semibold',
                            fontSize: 20,
                        }}>Chinh Lu Trong</Text>
                        <Text style={{
                            fontFamily: 'Lexend_semibold',
                            fontSize: 14,
                        }}>+84 39479 3435</Text>
                    </View>
                </View>
                <View style={{
                    paddingTop: 20,

                }}>
                    <Text style={{
                        fontFamily: 'Lexend_semibold',
                        fontSize: 20,
                    }}>Favorites</Text>
                    <View style={{
                        paddingTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image style={{
                            width: 30,
                            height: 30,
                        }} source={require('../assets/home.png')}/>
                        <Text style={{
                            paddingLeft: 20,
                            fontFamily: 'Lexend_semibold',
                            fontSize: 14,
                        }}>Add Home</Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image  style={{
                            width: 33,
                            height: 30,
                        }} source={require('../assets/vali.png')}/>
                        <Text style={{
                            paddingLeft: 20,
                            fontFamily: 'Lexend_semibold',
                            fontSize: 14,
                        }}>Add Work</Text>
                    </View>
                </View>
                <View style={{paddingTop: 10}}>
                    <Text style={{
                        fontFamily: 'Lexend_semibold',
                        fontSize: 20,
                        color: Color.secondary600
                    }}>More Saved Places</Text>
                </View>
                <View style={{
                    paddingTop: 20,
                }}>
                    <Text style={{
                        fontFamily: 'Lexend_semibold',
                        fontSize: 20,
                        color: Color.secondary600,
                        paddingBottom: 10
                    }}>Privacy</Text>
                    <Text style={{
                        fontFamily: 'Lexend_light',
                        fontSize: 14}}
                    >Manage the data you share with us</Text>
                </View>
                <View style={{paddingTop: 20}}>
                    <Text style={{
                        fontFamily: 'Lexend_semibold',
                        fontSize: 20,
                        color: Color.secondary600,
                        paddingBottom: 10           
                    }}>Security</Text>
                    <Text style={{
                        fontFamily: 'Lexend_light',
                        fontSize: 14}}
                    >Controlyour account security with 2-step verification</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{
                        paddingTop: 20,
                        fontFamily: 'Lexend_semibold',
                        fontSize: 20,
                        color: Color.feedbackError,                    
                        }}>Sign Out
                    r</Text>
                </TouchableOpacity>

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
        flexDirection: 'row',
        padding:5,
    },
    headerImage: {
        paddingRight: 20,
    },  
    headerTitle: {
        fontFamily: 'Lexend_semibold',
        fontSize: 32,
        color: Color.white,
        padding:10,
    },
    body: {
        flex: 3,
        padding: 30,
    },
    user: {
        flexDirection: 'row',
    },
    noneNotification: {
        padding: 20,
    }

});