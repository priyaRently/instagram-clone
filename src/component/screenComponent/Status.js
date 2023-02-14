import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Image } from '@rneui/themed';

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;
  console.log(image, 12)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      {/* <View style={styles.container2}>
        <View style={{
          height: '100%',
          backgroundColor: 'white',
          width: '50%'
        }}>
        </View>
      </View> */}
      <Text style={{ color: 'white', fontSize: 15, paddingLeft: 10 }}>
        {name}
      </Text>
      <View>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
      </View>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    width:'100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    backgroundColor: 'gray',
    height: 3,
    width: '95%',
    position: 'absolute',
    borderWidth: 1,
    top: 18,
  },
  image: {
    resizeMode: 'contain',
    width: 350,
    height: 600,
    
  },
  imageContainer: {
  
    width: '100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})