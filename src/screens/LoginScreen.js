import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
export default function LoginScreen( props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <TextInput
        style={styles.input}
        placeholder= 'Username'
        value={username}
        onChangeText={(text) => setUsername(text)}
        />
        <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder= 'Password'
        value={password}
        onChangeText={(text) => setPassword(text)}
        />
        <Button title='Login'
         
        color='red'
        />
       
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
    input:{
      
      padding :5,
      borderBottomWidth:1,
      borderRightWidth:1,
      borderLeftWidth:1,
      borderTopWidth:1,
      borderColor: 'black',
      paddingLeft: 100,
      margin: 20,

    }

  });