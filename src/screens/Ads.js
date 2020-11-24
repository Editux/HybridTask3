import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function Ads() {
    return (
      <View style={styles.container}>
        <Text>This where the ads go!</Text>
       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });