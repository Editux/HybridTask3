import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Alert } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { deleteAd, updateAd } from "./adActions";


export default function EditScreen({route, navigation}) {
  const { adId, adTitle,adDetails,adPrice } = route.params;
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  

  const deleteHandler = (key) => {
    
    dispatch(deleteAd(key));
    console.log("Ad deleted");
  };

  const updateHandler = (someid, sometitle,somedets,someprice)=>{
    dispatch(updateAd(someid,sometitle,somedets,someprice));
    console.log("Ad updated");
    setTitle("");
    setDetails("");
    setPrice("");
  };
    return (
      <View style={styles.container}>
        <Text style={styles.text_style}> Edit Your Ad Post</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={title}
          placeholder={adTitle}
          onChangeText={(title) => setTitle(title)}
        />
        <TextInput
          style={styles.input}
          value={details}
          placeholder={adDetails}
          onChangeText={(details) => setDetails(details)}
        />
        <TextInput
          style={styles.input}
          value={price}
          placeholder={adPrice}
          onChangeText={(price) => setPrice(price)}
        />
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={()=>{updateHandler(adId,title,details,price)}}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Update</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={()=>{deleteHandler(adId)}}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Delete</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  inputWrapper: {
    width: "70%",
    alignContent: "center",
    textAlign: "center",
  },
  input: {
    height: 50,
    borderWidth: 2,
    marginBottom: 10,
    padding: 5,
    borderRadius: 10,
    borderColor: "red",
    color: "black",
  },
  addButton: {
    backgroundColor: "red",
    width: "100%",
    height: 30,
    justifyContent: "center",
    marginTop: 20,
    alignContent: "center",
    textAlign: "center",
    marginTop: 10,
    borderRadius: 30,
  },
  addButtonText: {
    alignSelf: "center",
    textAlignVertical: "center",
    color: "#fff",
  },
  text_style : {
    marginBottom: 50,
    fontSize: 30,
    fontWeight : '700',
  }
});

