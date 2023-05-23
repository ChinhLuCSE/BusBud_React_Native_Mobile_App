import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Button} from 'react-native';
import React, { useState, useEffect} from 'react';
import { Color } from '../GlobalStyles';
const ScreenWidth = Dimensions.get("window").width;
export default function Payments(){
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
                <Text style={styles.headerTitle}>Your Payments</Text>
            </View>
            <View style={styles.body}>
                {countPayments === 0 &&(
                    <View style={styles.noneNotification}>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontFamily: 'Lexend_semibold',
                                fontSize: 20,
                            }}>You haven’t taken a trip yet</Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            margin: 20,
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                    console.log('Pressed!')
                                }}
                            >
                                <View style={{
                                    borderColor: 'black',
                                    borderWidth: 2,
                                    paddingLeft: 25,
                                    paddingRight: 25,
                                    paddingTop: 5,
                                    paddingBottom: 5,
                                }}>
                                    <Text style={{
                                        fontFamily: 'Lexend_semibold',
                                        fontSize: 20,
                                    }}>Retry</Text>
                                </View>
                            </TouchableOpacity>
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
        padding:10,
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