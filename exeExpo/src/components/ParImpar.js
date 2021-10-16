import React from 'react'
import { View, Text } from 'react-native'
import Estilo from './estilo'

export default props => {

    return (
        <View>
            <Text style={Estilo.txtG}>O resultado é: </Text>

            {(props.num || 0) % 2 === 0
                ? <Text style={Estilo.txtG}>Par</Text>
                : <Text style={Estilo.txtG}>Ímpar</Text>
            }

        </View>
    )
}