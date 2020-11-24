import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
        return(
            <View style={styles.container}>
                <View style={styles.container1}>
                <Text style ={styles.fontstyle}> App for Ads</Text>
                <Text style= {styles.fontstyle}>Made by Edita Komarova</Text>
                </View>
            </View>
             )
         }
         const styles = StyleSheet.create({
            container: {
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: 'white',
                flex:1,
                
                
    
            },
            fontstyle:{
                color: 'red',
                fontSize : 16,
                fontWeight: '700' 
    
            },
            container1:{
                borderColor:'red',
                borderTopWidth:1,
                borderLeftWidth:1,
                borderRightWidth:1,
                borderBottomWidth:1,
                padding:10
                
                
            }
        })