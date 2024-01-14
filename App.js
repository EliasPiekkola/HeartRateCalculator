import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [Age, setAge] =useState('')
  const [Lower,setLower] =useState(0)
  const [Upper,setUpper] =useState(0)

  /*function Calculate() {
    const result = euros*0.9
    setPounds(result)
  }*/

  const calculateHeartRate = () => {
    const lowerResult = (220 - Age) * 0.65;
    const upperResult = (220 - Age) * 0.85;
    setLower(lowerResult);
    setUpper(upperResult);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
        keyboardType='decimal-pad' 
        value={Age}
        onChangeText={text => setAge(text)}
      />
      <Text style={styles.field}>Lower Heart Rate: {Lower}</Text>
      <Text style={styles.field}>Upper Heart Rate: {Upper}</Text>
      <Button onPress={calculateHeartRate} title='Calculate'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 8, 
  },
  field:{
    marginBottom: 8
  }
});
