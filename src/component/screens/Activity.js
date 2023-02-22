import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Activity = () => {
  return (
    <View style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white'
    }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomWidth: 0.5,
        borderBottomColor: '#DEDEDE',
        padding: 10
      }}>
        Activity
        </Text>
        <ScrollView style={{margin:10}}>
          <Text style={{fontWeight:'bold'}}>
            This Week
          </Text>
        </ScrollView>
    </View>
  )
}

export default Activity

const styles = StyleSheet.create({})