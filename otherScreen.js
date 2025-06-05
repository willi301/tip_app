import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Button, View, Text, Alert, TouchableOpacity} from 'react-native';


export default function Other() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Second Screen</Text>
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

});