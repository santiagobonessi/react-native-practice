import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { Camera } from 'expo-camera';


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const getPermission = async () => {
    let { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status == 'granted')
    console.log(status);
  };
  useEffect( () => {
    getPermission();
  })

  if(hasPermission === null) {
    return <View><Text>Esperando permisos</Text></View>
  }
  if(hasPermission === false) {
    return <View><Text>No tenemos acceso a la camara</Text></View>
  }
    return (
      <View style={styles.container}>
        <Camera 
        style= {styles.camera}
        type={type}
        >
          <Button
          title='Cambiar Camara'
          onPress={() => {
            const {front, back} = Camera.Constants.Type;
            const newType = type === back ? front : back;
            setType(newType)
          }}
          ></Button>
        </Camera>
      </View>
    );
}

const styles = StyleSheet.create({  
  camera: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    paddingTop: 22,
  },
});
