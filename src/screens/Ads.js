import React, {Component} from 'react';
import firebase from "./firebaseconfig";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { deleteAd} from "./adActions";
export default class Ads extends Component {
  constructor(props){
    super(props);
    this.state={ 
    adlist:[],
    } }

    DeleteAds = (title)=>{
      dispatch(deleteAd(title));

    }
    componentDidMount(){
      firebase.database().ref('/ads').on('value', (snapshot) =>{
        var list = []
        snapshot.forEach((child)=>{
         list.push({
          key: child.key,
          title:child.val().title,
          details: child.val().details
        })
      })
     this.setState({adlist:list})
    })
   }
   render(){
    return(
      <View style={styles.container}>
        <View style={styles.container_3}>
          <Text> Ads</Text>
        </View>
        
         <FlatList 
            data={this.state.adlist}
            keyExtractor={(item)=>item.title}
            renderItem={({item})=>{
               return(
                <TouchableOpacity  OnPress ={()=>deleteAd(item.title)}>
                <View style={styles.container_2}>
                    <Text style={styles.text_style1}>{item.title}</Text>
                     <Text>{item.details}</Text>
                </View>
                </TouchableOpacity>
               )}}/>
       </View>
    )}
  }
 
 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    container_2:{
      borderColor:'red',
        borderLeftWidth:1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        marginBottom:10,
        marginTop:10,
        padding:5

    },
    text_style1:{
      fontSize:20,
      fontWeight:'700'
    },
    container_3:{
      marginTop:30,
      backgroundColor:'red',
      padding: 10,
      paddingLeft:200,
      paddingRight:150
    }
  });