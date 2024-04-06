import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app'
import './index.css'

// A BASE DO REACT É A JUNÇÃO DESSES 3 CONCEITOS: 
// 1 - COMPONENTES
// 2- PROPRIEDADES
// 3 - ESTADO (STATE)

// React funciona com 2 principais conceitos: Componentes e Propriedades. 

// Componentes - Conteito: Componentes são funções que retornam HTML - são facilmente comparados com elementos dentro do hmtl.
// componentes são formas da gnt separar a aplicação em vários blocos.
// Todo componente pode receber atributos, são chamados de PROPRIEDADES!!!
// Todas as propriedades que eu envio para um componente são convertidas em objetos que são recebidos pelos parâmetros da função
// O conteúdo de um componente automaticamente recebe o nome "CHILDREN" (Ex: <NavLink>QUALQUER COISA</NavLink>) = (props.children)

// Criamos componentes em 2 situações: (TODO COMPONENTE PRECISA TER A PRIMEIRA LETRA MAIÚSCULA!!!)
// 1- Quando temos um elemento que se repete várias vzs na tela
// 2- Quando eu consigo eu consigo desconectar uma parte da aplicação da outra sem que afete o funcionamento, pois elas funcionam de forma independente.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
