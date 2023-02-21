import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import Stories from '../screenComponent/Stories'
import Post from '../screenComponent/Post'

const Home = () => {

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
    
      <StatusBar backgroundColor='white'
        barStyle='dark-content' animated={true} />
      <View style={styles.container}>
        <Feather name='plus-square' style={{ fontSize: 24,color:'black' }} />
        <Text style={styles.title} >
          Instagram
        </Text>
        <Fontisto name='messenger' style={{ fontSize: 24, color:'black' }} />
      </View>
        <ScrollView>
        <Stories/>
        <Post/>
        <View style={{justifyContent:'center', alignItems:"center", padding:20}}>
          <Icon name='cached' style={{fontSize:60,opacity:0.2}}/>
        </View>
        </ScrollView>
        
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '500',
    color:'black'
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  add: {
    borderRadius:2,
    borderWidth:2,
    borderColor:'black',
  }
})