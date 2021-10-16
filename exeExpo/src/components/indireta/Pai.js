import React, { useState } from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'

export default props => {

    const [txt, setTxt] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, txt) {
        setNum(numero)
        setTxt(txt)
    }

    return (
        <>
            <Text style={Estilo.txtG}>
                {txt}{num}
            </Text>

            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>

    )
}
