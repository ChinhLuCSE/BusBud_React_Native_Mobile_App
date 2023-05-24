import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SideMenu(){
  return (
    <View style={styles.sideMenuContainer}>
      <Text style={styles.sideMenuItem}>Menu Item 1</Text>
      <Text style={styles.sideMenuItem}>Menu Item 2</Text>
      <Text style={styles.sideMenuItem}>Menu Item 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sideMenuContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  sideMenuItem: {
    flex: 1, 
  }
});