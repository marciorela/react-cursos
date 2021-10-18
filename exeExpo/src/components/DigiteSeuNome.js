import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

export default props => {

    const [nome, setNome] = useState('teste');

    return (
        <View>
            <Text>{nome}</Text>

            <TextInput
                placeholder="Digite Seu Nome"
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
            
        </View>
    )
}