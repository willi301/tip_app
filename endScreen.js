import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert, TouchableOpacity, TextInput} from 'react-native';

export default function EndScreen({ navigation }) {
  return (
    <View style={styles.container}>

        <View style={styles.close}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.close_text}>X</Text>
            </TouchableOpacity>

        </View>

      


      <Text style={styles.title}>Thank you ⸜(｡˃ ᵕ ˂ )⸝ </Text>

      {/* This is the button to go back to the home screen */}
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cornflowerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 50,
    color: 'white',
    marginBottom: 20,
  },

  close: {
    position: 'absolute',
    top: 20,
    right: 100,
    padding: 10,
    fontSize: 16,


  },

  close_text: {
    fontSize: 20,
    color: 'white',
  },

});