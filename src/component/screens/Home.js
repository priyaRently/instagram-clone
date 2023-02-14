import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Stories from '../screenComponent/Stories'

const Home = () => {

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
    
      <StatusBar backgroundColor='white'
        barStyle='dark-content' animated={true} />
      <View style={styles.container}>
        <Icon name='add' style={{ fontSize: 24 }} />
        <Text style={styles.title} >
          Instagram
        </Text>
        <Icon name='navigation' style={{ fontSize: 24, }} />
      </View>

        <Stories/>
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