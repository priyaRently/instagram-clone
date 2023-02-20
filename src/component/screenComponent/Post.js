import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'

import { Icon } from '@rneui/themed'

const Post = () => {
  const postInfo = [
    {
      postTitle: 'umeshSahoo',
      postPersonImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      postImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      likes: 265,
      isLiked: false
    },
    {
      postTitle: 'umeshSahoo',
      postPersonImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      postImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      likes: 265,
      isLiked: false
    },
    {
      postTitle: 'umeshSahoo',
      postPersonImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      postImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      likes: 265,
      isLiked: false
    },
    {
      postTitle: 'umeshSahoo',
      postPersonImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      postImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      likes: 265,
      isLiked: false
    },
    {
      postTitle: 'umeshSahoo',
      postPersonImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      postImage: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
      likes: 265,
      isLiked: false
    }
  ]
  return (
    <View>
      {
        postInfo.map((data, index) => {
          const [like, setLike] = useState(data.isLiked)
          return (
            <View key={index} style={styles.container}>
              <View style={styles.container1}>
                
                <View style={styles.postImageContainer}>
                  <Image source={data.postPersonImage} style={styles.postImage} />
                  <View style={styles.postTitleContainer}>
                    <Text style={styles.postTitle}>{data.postTitle}</Text>
                  </View>
                </View>
                <Icon name='more-vert' style={{ fontSize: 20 }} />

              </View>
              
              <View style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={data.postImage} style={{ width: '100%', height: 350 }} />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => setLike(!like)}>
                    <Icon name={like ? "favorite" : 'favorite-border'} color= {like ? 'red' : 'black'} 
                    style={{ fontSize: 22, paddingRight: 10,}} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon name='chat-bubble-outline' type='ionicons' style={{ fontSize: 22, paddingRight: 10 }} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Feather name='navigation' style={{ fontSize: 22 }} />
                  </TouchableOpacity>
                </View>
                <Icon name='bookmark-border' style={{ fontSize: 22 }} />
              </View>
              
              <View style={{ paddingHorizontal: 15 }}>
                <Text>
                  Liked by {like ? "you and" : ''} {' '}
                  {like ? data.likes + 1 : data.likes} others
                </Text>
                <Text style={{ fontSize: 16, fontWeight: '700', paddingVertical: 2 }}>
                  Hello There !!
                </Text>
                <Text style={{ opacity: 0.4, paddingVertical: 2 }}>
                  View all comments
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={data.postPersonImage}
                      style={{
                        width: 25, height: 25, borderRadius: 100,
                        backgroundColor: 'orange', marginRight: 10
                      }} />
                    <TextInput placeholder='add a comment'
                      style={{ opacity: 0.5 }} />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='mood' color='lightgreen' style={{ fontSize: 18, marginRight: 10 }} />
                    <Icon name='sentiment-neutral'  color= 'pink' style={{ fontSize: 18,marginRight: 10 }} />
                    <Icon name='mood-bad' color='red'  style={{ fontSize: 18, }} />
                  </View>
                </View>

              </View>
            </View>
          )
        })
      }
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.1,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15
  },
  postImageContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  postImage: {
    width: 40,
    height: 40,
    borderRadius: 100
  },
  postTitleContainer: {
    paddingLeft: 5,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color:'black'
  },
})