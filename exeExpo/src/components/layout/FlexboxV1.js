import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {

    return (
        <View style={style.FlexV1}>
            <Quadrado />
            <Quadrado color='#900' />
            <Quadrado color='#990' />
            <Quadrado color='#090' />
            <Quadrado color='#009' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#0F0'
    }
})