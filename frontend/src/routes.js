import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import People from './components/People'

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={People} />
    </BrowserRouter>
  )
}