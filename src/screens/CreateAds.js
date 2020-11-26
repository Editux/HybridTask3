import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { postAd } from "./adActions";
import { connect } from "react-redux";

const CreateAds = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  //   const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    // e.preventDefault();
    dispatch(postAd(title, details, price));
    // dispatch(actionGoesHere(title, details, price, userName));
  
    
    setTitle("");
    setDetails("");
    setPrice("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text_style}> Create Your Ad Post</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={title}
          placeholder="Ad title"
          onChangeText={(title) => setTitle(title)}
        />
        <TextInput
          style={styles.input}
          value={details}
          placeholder="Ad details"
          onChangeText={(details) => setDetails(details)}
        />
        <TextInput
          style={styles.input}
          value={price}
          placeholder="Ad price (optional)"
          onChangeText={(price) => setPrice(price)}
        />
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={submitHandler}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>Post and ad</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CreateAds;


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

