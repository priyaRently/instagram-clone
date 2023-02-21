import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'


const SearchBox = () => {
    return (
        <View style={styles.container}>
            <Icon name='search' style={styles.iconSearch} />
            <TextInput placeholder='Search' placeholderTextColor='#909090'
                style={styles.searchText} />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative'
    },
    iconSearch: {
        fontSize: 18,
        position: 'absolute',
        zIndex: 1,
        opacity: 0.7,
        left: 25
    },
    searchText: {
        width: '90%',
        backgroundColor: '#EBEBEB',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15,
        padding: 4,
        paddingLeft: 40
    }
})