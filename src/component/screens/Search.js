import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image, ScreenHeight } from '@rneui/base'
import SearchBox from '../screenComponent/SearchBox'
import SearchContent from '../screenComponent/SearchContent'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'


const Search = () => {

  const [image, setImage] = useState(null);
  const getData = data => {
    setImage(data);
  }
  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SearchBox />
        <SearchContent data={getData} />
        <TouchableOpacity style={{
          margin: 25,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <AntDesign name='pluscircleo' style={{ fontSize: 40, opacity: 0.5 }} />
        </TouchableOpacity>
      </ScrollView>
      {
        image ?
          (
            <View style={{
              zIndex: 1,
              backgroundColor: '#525252',
              width: '100%',
              height: '100%',
              position: 'absolute',
              opacity: 0.8
            }}>
              <StatusBar backgroundColor='#525252' barStyle='dark-content' />
              <View style={{
                position: 'absolute',
                top: windowHeight / 6,
                left: windowWidth / 10,
                backgroundColor: 'white',
                elevation: 50,
                zIndex: 1,
                borderRadius: 15,
                width: '90%',
                height: 465
              }}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 10,
                  paddingHorizontal: 15
                }}>
                  <Image source={image}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 100
                    }} />
                  <View style={{ paddingLeft: 8 }}>
                    <Text style={{ fontSize: 12, fontWeight: '600' }}>
                      the_anoonymous_guy
                    </Text>
                  </View>
                </View>
                <Image source={image} style={{ width: '100%', height: '80%' }} />
                <View style={{
                  justifyContent: 'space-around',
                  flexDirection: "row",
                  width: '100%',
                  alignItems: 'center',
                  padding: 8
                }}>
                  <Ionic name='ios-heart-outline' style={{ fontSize: 26 }} />
                  <Ionic name='ios-person-circle-outline' style={{ fontSize: 26 }} />
                  <Feather name='navigation' style={{ fontSize: 26 }} />
                </View>
              </View>
            </View>
          ) : null
      }
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'relative',

  }
})