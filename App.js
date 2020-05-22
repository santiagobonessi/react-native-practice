import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState('Hello World');
  const [submit, setSubmit] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder= 'Escribe aqui'
        onChangeText={t => setText(t)}
        defaultValue={text}
      />
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#00F')}
        onPress={() => {
          setSubmit(text)
          alert('Texto enviado con exito.')
        }}>
          <Text>ACEPTAR</Text>
      </TouchableNativeFeedback>
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
  text: {
    color: 'white',
    fontSize: 24,
  },
  input: {

  }
});
