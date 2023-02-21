import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'
import { Icon } from '@rneui/themed'

const SearchContent = props => {
    const searchData = [
        {
            id: 0,
            images: [
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
            ]
        },
        {
            id: 1,
            images: [
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
            ]
        },
        {
            id: 2,
            images: [
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/brooke-cagle-k9XZPpPHDho-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/brooke-cagle-k9XZPpPHDho-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/brooke-cagle-k9XZPpPHDho-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/brooke-cagle-k9XZPpPHDho-unsplash.jpg'),
            ]
        }
    ]

    return (
        <View>
            {
                searchData.map((data, index) => {
                    return (
                        <View key={index}>
                            {
                                data.id === 0 ? (
                                    <View style={{
                                        flexDirection: "row",
                                        flexWrap: 'wrap',
                                        justifyContent: "space-between",
                                        width: '100%'
                                    }}>
                                        {data.images.map((imageData, imageIndex) => {
                                            return (
                                                <TouchableOpacity key={imageIndex}
                                                    style={{ paddingBottom: 2, width: '33%' }}
                                                    onPressIn={() => { props.data(imageData) }}
                                                    onPressOut={() => props.data(null)}>
                                                    <Image source={imageData}
                                                        style={{ width: '100%', height: 150, }} />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </View>
                                ) : null}
                            {data.id === 1 ? (
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}>
                                    <View style={{
                                        flexDirection: "row",
                                        flexWrap: 'wrap',
                                        justifyContent: "space-between",
                                        width: '66.5%'
                                    }}>
                                        {
                                            data.images.slice(0, 4).map((imageData, imageIndex) => {
                                                return (
                                                    <TouchableOpacity key={imageIndex}
                                                        style={{ paddingBottom: 2, width: '49.5%' }}
                                                        onPressIn={() => { props.data(imageData) }}
                                                        onPressOut={() => props.data(null)}>
                                                        <Image source={imageData}
                                                            style={{ width: '100%', height: 150, }} />
                                                    </TouchableOpacity>
                                                );
                                            })}
                                    </View>
                                    <TouchableOpacity
                                        style={{marginLeft:2, width:'33%'}}
                                        onPressIn={() => { props.data(data.images[5]) }}
                                        onPressOut={() => props.data(null)}>
                                        <Image source={data.images[5]}
                                            style={{ width: '100%', height: 300 }} />
                                    </TouchableOpacity>
                                </View>
                            ) : null}
                            {
                                data.id === 2 ?
                                    (
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>
                                            <TouchableOpacity
                                                style={{ paddingRight: 2, width: '66.5%' }}
                                                onPressIn={() => { props.data(data.images[2]) }}
                                                onPressOut={() => props.data(null)}>
                                                <Image source={data.images[2]}
                                                    style={{ width: '100%', height: 300 }} />
                                            </TouchableOpacity>
                                            <View style={{
                                                flexDirection: 'row',
                                                flexWrap: 'wrap',
                                                width: '33%',
                                                justifyContent: 'space-between'
                                            }}>
                                                {
                                                    data.images.slice(0, 2).map((imageData, imageIndex) => {
                                                        return (
                                                            <TouchableOpacity
                                                                key={imageIndex}
                                                                style={{ paddingBottom: 2, width: '100%' }}
                                                                onPressIn={() => { props.data(imageData) }}
                                                                onPressOut={() => props.data(null)}>
                                                                <Image source={imageData}
                                                                    style={{ width: '100%', height: 150 }} />
                                                            </TouchableOpacity>
                                                        );
                                                    })}
                                            </View>
                                        </View>
                                    ) : null
                            }
                        </View>
                    )
                })}
        </View>
    )
}

export default SearchContent

const styles = StyleSheet.create({})