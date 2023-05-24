import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, { forwardRef, useImperativeHandle} from 'react';
import { Color } from '../../GlobalStyles';

const MenuOverlay = (props) =>{
    const {isMenuVisible, setIsMenuVisible} = props;
    return (
        <View style={styles.container}  >
            <View style={styles.header}>
                <TouchableOpacity 
                style={{
                    flex: 1,
                    flexDirection: 'row', 
                    justifyContent: 'flex-start',
                    borderBottomWidth: 2,
                    paddingBottom: 10,
                }}
                onPress={() =>{console.log('Pressed!')}}
                >
                    <View style={{}}>
                        <Image 
                            style={{width: 70, height: 70, }}
                            resizeMode="contain"
                            source={require('../../assets/avatar-rounded.png')}
                        />
                    </View>
                    <View style={{
                        justifyContent: 'center'
                    }}>
                        <Text
                            style={{
                                 fontFamily: 'Lexend_semibold',
                                 fontSize: 20,
                                 color: 'white',
                                 paddingLeft: 30,
                            }}
                        >Chinh Trong Lu</Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}
                onPress={() => {
                    console.log('Pressed!')
                }}
                >
                    <View style={{
                        flex: 1,
                        justifyContent: 'center'
                    }}>
                        <Text
                            style={{
                                fontFamily: 'Lexend_semibold',
                                fontSize: 20,
                                color: 'white',
                            }}
                        >Notifications</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
                        <Image 
                            style={{width: 20, height: 20}} 
                            source={require('../../assets/right-arrow.png')}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
            </View>

            {/* Body!!! */}
            <View style={styles.body}>
                <TouchableOpacity style={styles.element}>
                    <Text style={styles.textElement}>My Payment History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.element}>
                    <Text style={styles.textElement}>Payment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.element}>
                    <Text style={styles.textElement}>Settings</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.element}
                    onPress={() => {
                        setIsMenuVisible(false);
                    }}
                >
                    <Text style={[styles.textElement, {color: Color.secondary600}]}>Return Menu Screen</Text>
                </TouchableOpacity>                           
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={{
                    flex: 1,
                    alignItems: 'flex-start',

                    justifyContent: 'center',
                }}>
                    <Text
                        style={{
                            fontFamily: 'Lexend_light',
                            fontSize: 20,
                        }}
                    >Legal</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}>
                    <Text
                        style={{
                            fontFamily: 'Lexend_light',
                            fontSize: 14,
                            
                        }}
                    >v4.3712003</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Color.white,
    },
    header: {
        flex: 2,
        backgroundColor: Color.primary900,
        flexDirection: 'column',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30,
    },
    
    body: {
        flex: 3,
        padding: 30,
        paddingTop: 0,
    },
    element: {
        paddingTop: 30,
    },
    textElement: {
        fontFamily: 'Lexend_light',
        fontSize: 20,
    },
    footer: {
        flex: 1,
        padding: 30,
        flexDirection: 'row',
    }
});
export default MenuOverlay;