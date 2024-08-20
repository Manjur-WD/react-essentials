import React from 'react'
import UseStateHook from '../components/UseStateHook'
import UseEffectHook from '../components/UseEffectHook'
import BestDataFetchTechnique from '../components/BestDataFetchTechnique'
import UseReducersHook from '../components/UseReducersHook'
import UseContextHook from '../components/UseContextHook'
import ContextReducer from '../components/ContextReducer'

const HooksIntro = () => {
  return (
    <>
      <UseStateHook />
      <UseEffectHook />
      <BestDataFetchTechnique />
      <UseReducersHook />
      <UseContextHook />
      <ContextReducer />
    </>
  )
}

export default HooksIntro
