import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Alert, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function App() {
  const [location, setLocation] = useState({});
  const buscarLocation = async () => {
    let {status} = await Location.requestPermissionsAsync();
    if(status !== 'granted') {
      Alert.alert('Warning','Permission to access location was denied')
    }
      let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };
  useEffect( () => {
    buscarLocation()
  })
    return (
      <View style={styles.container}>
       <MapView style={styles.map}>
         {location.coords 
          ? <Marker
          coordinate= {location.coords}
          title= 'Marcado'
          description='Punto actual'
          >
          </Marker>
          : null
        }
         
       </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    paddingTop: 22,
  },
});
