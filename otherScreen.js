import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert, TouchableOpacity, TextInput} from 'react-native';


export default function Other({ navigation }) {
  return (
    <View style={styles.container}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>go back</Text>
          </TouchableOpacity>
        <Text style={styles.title}>Enter Tip</Text>

        {/* Tip input from user */}
        <TextInput
        style={styles.input}
        keyboardType="numeric"  // 👈 This brings up a number pad
        placeholder="Enter a number"
        />


      <StatusBar style="auto" />
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

  button: {
    width: "100",         // 👈 Width of the button
    height: "50",         // 👈 Height of the button
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: 'blue',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,       // 👈 Font size of the button label
  },

  input: {
    marginTop: 40,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },

});