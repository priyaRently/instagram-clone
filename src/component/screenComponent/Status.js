import { Animated, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Image } from '@rneui/themed';

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;

  useEffect(()=> {
    let timer = setTimeout(()=> {
      navigation.goBack();  
    }, 5000);
    Animated.timing(progress,{
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  },[]);

  const [progress,setProgress]= useState(new Animated.Value(0))
  const progressAnimation = progress.interpolate({
    inputRange: [0,5],
    outputRange: ['0%','100%']
  })
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' barStyle='light-content' />
      <View style={styles.container1}>
        <Animated.View style={{ height: '100%', backgroundColor: 'white', width: progressAnimation }}>
        </Animated.View>
      </View>

      <View style={styles.container2}>
        <View style={styles.imageContainer}>
          <Image source={image} style={{height:30,width:30, borderRadius:100}} resizeMode='cover' />
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%' }}>
          <Text style={{ color: 'white', fontSize: 15, paddingLeft: 10 }}>
            {name}
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name='close' style={{ fontSize: 20, color: 'white', opacity: 0.6 }} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={{  width:400, height: 600 }} resizeMode='contain'/>

      <View style={styles.input}>
        <TextInput placeholder='send message'
          placeholderTextColor='white'
          style={styles.textInput} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='navigation' style={{ fontSize: 30, color: 'white', marginLeft:20 }} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    backgroundColor: 'gray',
    height: 3,
    width: '95%',
    position: 'absolute',
    borderWidth: 1,
    top: 18,
  },
  container2: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: '90%'
  },
  image: {
    resizeMode: 'cover',
    width: '92%',
    height: '92%',
    borderRadius: 100,
    backgroundColor: 'orange'
  },
  imageContainer: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textInput: {
    borderColor: 'white',
    borderRadius: 25,
    width: '85%',
    height: 50,
    paddingLeft: 20,
    borderWidth: 1,
    fontSize: 20,
    color: 'white'
  }
})