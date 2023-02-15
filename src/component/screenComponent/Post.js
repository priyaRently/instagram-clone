import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Post = () => {
  const postInfo = [
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
                <Icon name='more' style={{ fontSize: 20 }} />
              </View>
              <View style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image source={data.postImage} style={{ width: '100%', height: 350 }} />
              </View>
              <View>
                <View>
                  <TouchableOpacity>
                    <Icon name={like ? "favorite":'favorite'} style={{fontSize:20,paddingRight:10,color:like?'red':'black'}}/>
                  </TouchableOpacity>
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
    justifyContent: 'center',
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
  },
})