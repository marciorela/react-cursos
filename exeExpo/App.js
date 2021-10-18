import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'

import Mega from './src/components/mega/Mega';

// import FlexboxV4 from './src/components/layout/FlexboxV4';
// import FlexboxV3 from './src/components/layout/FlexboxV3';
// import FlexboxV2 from './src/components/layout/FlexboxV2';
// import FlexboxV1 from './src/components/layout/FlexboxV1';
// import DigiteSeuNome from './src/components/DigiteSeuNome';
// import ListaProdutosV2 from './src/components/produtos/ListaProdutosV2';
// import ListaProdutos from './src/components/produtos/ListaProdutos';
// import UsuarioLogado from './src/components/UsuarioLogado';
// import Familia from './src/components/relacao/Familia';
// import Membro from './src/components/relacao/Membro';
// import ParImpar from './src/components/ParImpar';
// import Diferenciar from './src/components/Diferenciar';
// import ContadorV2 from './src/components/contador/ContadorV2';
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
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={12} />

        {/* 
        <FlexboxV4/>
        <FlexboxV3/>
        <FlexboxV2/>
        <FlexboxV1/>
        <DigiteSeuNome/>
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={ {nome: 'Gui', email: 'gui@gui.com'} } />
        <UsuarioLogado usuario={ {nome: 'Ana'} } />
        <UsuarioLogado usuario={ {email: 'carlos@empresa.com'} } />
        <UsuarioLogado usuario={ null } />
        <UsuarioLogado usuario={ {} } />

        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>

        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />
        </Familia>

        <ParImpar num={35}/>
        <Diferenciar />
        <ContadorV2 />
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
    </SafeAreaView >
)

const style = StyleSheet.create({
    App: {
        //backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
