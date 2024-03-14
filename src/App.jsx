import React from 'react'
import { AppRouters } from './AppRouters'
import { InputContext } from './InputContext/InputContext'

export function App () {

  return (
    <>
      <InputContext>
        <AppRouters />
      </InputContext>
    </>
  )
}
