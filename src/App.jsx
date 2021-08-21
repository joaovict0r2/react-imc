import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Calculator from './pages/Calculator'

import { CalculationsProvider } from './hooks/useCalculations'

import GlobalStyle from './styles/global'

function App() {
  return (
    <CalculationsProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Calculator />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </CalculationsProvider>
  )
}

export default App
