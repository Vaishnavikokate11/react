//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

//import { UseReff } from "./hooks/UseRef"
import { BioProvider } from "./hooks/ContextApi"
import { About } from "./hooks/ContextApi/About"
import { Home } from "./hooks/ContextApi/Home"
import { ReducerComp } from "./hooks/UseReducer"
//import { UseIde } from "./hooks/UseId"
//import { ForwordRef } from "./hooks/UseRef/ForwordRef"

//import { EffectChallenge } from "./hooks/UseEffect/EffectChallenge"
//import { FetchDate } from "./hooks/UseEffect/HownotToFetchApi"

//import { Counter } from "./hooks/useState"
//import { Challenge } from "./hooks/useState/Challenge"
//import { Controller } from "./hooks/useState/Controller"
//import { Registration } from "./hooks/useState/Registration"
//import { ReactUseEffect } from "./hooks/UseEffect"
//import { Login } from "./hooks/useState/Login"

function App() {
  
  return (
    <>
    {/*<Counter/>*/}
    {/*<Challenge/>*/}
   {/*<Controller/>*/}
    {/* <Registration/>*/}
    {/*<Login/>*/}
    {/*<ReactUseEffect/>*/}
    {/*<EffectChallenge/>*/}
    {/*<FetchDate/>*/}

    {/*<UseReff/>*/}

    {/*<ForwordRef/>*/}
      {/*<UseIde/>*/}
      {/*<BioProvider>
        <Home/>
        <About/>
      </BioProvider>*/}

      <ReducerComp/>
    </>
  )
}

export default App
