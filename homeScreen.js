import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert, TouchableOpacity} from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Tip?</Text>

      {/* this is the buttons for the tip options */}
      <View style={styles.option}>
        <TouchableOpacity
          onPress={() => navigation.navigate('End')}
          style={styles.button}
          color="cornflowerblue"
        >
          <Text style={styles.buttonText}>10%</Text>
        </TouchableOpacity>
          
        <TouchableOpacity
          onPress={() => navigation.navigate('End')}
          style={styles.button}
          color="cornflowerblue"
        >
          <Text style={styles.buttonText}>20%</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('End')}
          style={styles.button}
          color="cornflowerblue"
        >
          <Text style={styles.buttonText}>25%</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.other}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Other')}
          style={styles.otherButton}
          color="cornflowerblue">

            <Text style={styles.buttonText}>Others</Text>
        </TouchableOpacity>
      </View>


      

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

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },

  option: {
    width: "100%",
    height: 200,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },

  button: {
    width: 150,         // 👈 Width of the button
    height: 50,         // 👈 Height of the button
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,       // 👈 Font size of the button label
  },

  other: {
    width: "100%",
    height: 100,
    alignItems: 'center',
  },

  otherButton: {
    width: "80%",
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
