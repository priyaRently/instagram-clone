import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'
import { Icon } from '@rneui/themed'

const SearchContent = () => {
    const searchData = [
        {
            id:0,
            images:[
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/albert-dera-ILip77SbmOE-unsplash.jpg'),
            ]
        },
        {
            id:1,
            images:[
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
                require('/home/priya/Desktop/Github/Instagram/src/component/screenComponent/images/joel-muniz-HvZDCuRnSaY-unsplash.jpg'),
            ]
        },
        {
            id:2,
            images:[
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
        searchData.map((data, index)=>{
            return(
                <>
                 {
                    data.id === 0 ?
                    (
                        <View style={{flexDirection:"row",flexWrap:'wrap',justifyContent:"space-between"}}>
                            {
                                data.images.map((imageData, imageIndex)=> {
                                    return(
                                        <TouchableOpacity style={{paddingBottom:2}}>
                                            <Image source={imageData}
                                            style={{width:129,height:150,}}/>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </View>
                    ) : null }
                    {
                        data.id === 1 ?
                        (
                            <View>
                                <View style={{
                                    flexDirection: "row", flexWrap: 'wrap',
                                    justifyContent: "space-between", width: 261
                                }}>
                                    {data.images.slice(0, 4).map((imageData, imageIndex) => {
                                        return (
                                            <TouchableOpacity style={{ paddingBottom: 2 }}>
                                                <Image source={imageData}
                                                    style={{ width: 129, height: 150, }} />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                                <TouchableOpacity>
                                    <Image source={data.images[5]}
                                    style={{width:129,height:300}}/>
                                </TouchableOpacity>
                            </View>
                        ) : null}
                </>
            )
        })
      }
    </View>
  )
}

export default SearchContent

const styles = StyleSheet.create({})