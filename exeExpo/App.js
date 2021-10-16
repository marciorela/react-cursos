import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, StyleSheet } from 'react-native'
import ContadorV2 from './src/components/contador/ContadorV2';

// import Pai from './src/components/direta/Pai'
// import Pai from './src/components/indireta/Pai'
// import Contador from './src/components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import MinMax from './components/MinMax'
// import X, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'
// import Aleatorio from './components/Aleatorio'

export default () => (
    <View style={style.App}>

        <ContadorV2 />
        {/* 
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao/>
        <Titulo principal="Cadastro de Produto" secundario="Tela de Cadastro de Produto"/>
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min={20} max={94} />
        <X/>
        <Comp1/>
        <Comp2/>
        <Primeiro/>
        */}
    </View>
)

const style = StyleSheet.create({
    App: {
        //backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})

// export default () => {
//     return <Text>Primeiro Componente!!!</Text>
// }

// OU...
// export default function () {
//     return <Text>Primeiro Componente</Text>
// }

// OU...
// const App = function () {
//     return <Text>Primeiro Componente</Text>
// }
// export default App

// OU...
// function App() {
//     return <Text>Primeiro Componente</Text>
// }
// export default App
