import React from 'react'
import { View, StyleSheet } from 'react-native'
import Quadrado from './Quadrado'

export default props => {

    return (
        <View style={style.FlexV3}>
            <Quadrado color='#000' lado={10}/>
            <Quadrado color='#900' lado={20}/>
            <Quadrado color='#990' lado={30}/>
            <Quadrado color='#090' lado={40}/>
            <Quadrado color='#009' lado={50}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'baseline',
        height: 300,
        width: '100%',
        backgroundColor: '#0F0'
    }
})