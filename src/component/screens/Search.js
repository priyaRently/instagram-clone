import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenHeight } from '@rneui/base'
import SearchBox from '../screenComponent/SearchBox'
import SearchContent from '../screenComponent/SearchContent'

const Search = () => {
  return (
    <View>
      <ScrollView>
        <SearchBox/>
        <SearchContent/>
      </ScrollView>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    position:'relative',
    
  }
})