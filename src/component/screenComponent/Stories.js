import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'

const Stories = () => {
    const navigation = useNavigation();

    const storyInfo = [
        {
            id: 1,
            name: 'Your Story',
            image:  require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/brooke-cagle-k9XZPpPHDho-unsplash.jpg')
        },
        {
            id: 2,
            name: 'Sayan',
            image: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg')
            
        },
        {
            id: 3,
            name: 'Amar',
           image:require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/elijah-hiett-KCzCfkic-ig-unsplash.jpg')
        },
        {
            id: 4,
            name: 'Umesh',
            image: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/liam-burnett-blue--qwEUsg7UbI-unsplash.jpg'),
        },
        {
            id: 5,
            name: 'Sayam',
            image: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/elijah-hiett-KCzCfkic-ig-unsplash.jpg')
        },
        {
            id: 0,
            name: 'Sangram',
            image: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/elijah-hiett-KCzCfkic-ig-unsplash.jpg')
        },
        {
            id: 6,
            name: 'Spandita',
            image: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/elijah-hiett-KCzCfkic-ig-unsplash.jpg')
        },
        {
            id: 7,
            name: 'Sayan',
            image: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/elijah-hiett-KCzCfkic-ig-unsplash.jpg')
        },
        {
            id: 8,
            name: 'Rishi',
            image: require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/elijah-hiett-KCzCfkic-ig-unsplash.jpg')
        },


    ]
    return (
        <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 20 }}>
            {
                storyInfo.map((data, index) => {
                    return (
                        <TouchableOpacity key={index}
                            onPress={() =>
                                navigation.push('Status', {
                                    name: data.name,
                                    image: data.image,
                                })
                            }>
                            <View style={{
                                flexDirection: 'column',
                                paddingHorizontal: 8,
                                position: 'relative'
                            }}>
                                {
                                    data.id == 1 ? (
                                        <View style={{
                                            position: 'absolute',
                                            bottom: 15,
                                            right: 10,
                                            zIndex: 1
                                        }}>
                                            <Entypo name='add-circle'
                                                style={styles.plus} />
                                        </View>
                                    ) : null
                                }
                                <View style={styles.imageContainer}>
                                    <Image source={data.image} style={styles.image} />
                                </View>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 10,
                                    opacity: data.id == 0 ? 1 : 0.5
                                }}>{data.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}

export default Stories

const styles = StyleSheet.create({
    plus: {
        fontSize: 20,
        color: '#405de6',
        backgroundColor: 'white',
        borderRadius: 100,

    },
    imageContainer: {
        width: 68,
        height: 68,
        backgroundColor: 'white',
        borderWidth: 1.8,
        borderRadius: 100,
        borderColor: '#c13584',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        resizeMode: 'cover',
        width: '92%',
        height: '92%',
        borderRadius: 100,
        backgroundColor: 'orange',
    },
})
