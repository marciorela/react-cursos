import React from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import Estilo from '../estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends React.Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQuantidadeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    // EXEMPLO "FUNCIONAL"
    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], [])
            .sort((a, b) => a - b)
        this.setState({ numeros })
    }

    // EXEMPLO "PROCEDURAL"
    gerarNumerosProc = () => {
        const { qtdeNumeros } = this.state
        const numeros = []

        for (let i = 0; i < qtdeNumeros; i++) {
            const n = this.gerarNumeroNaoContido(numeros)
            numeros.push(n)
        }

        numeros.sort((a, b) => a - b)

        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>

                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Quantidade de números"
                    value={`${this.state.qtdeNumeros}`}
                    onChangeText={this.alterarQuantidadeNumero}
                />

                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    {this.exibirNumeros()}
                </View>

                {/* <Text>
                    {this.state.numeros.join(',')}
                </Text> */}
            </>
        )
    }

}
