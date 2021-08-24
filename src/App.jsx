import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Calculator from './pages/Calculator'
import CalculationCompleted from './pages/CalculationCompleted'

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
          <Route path="/finished">
            <CalculationCompleted />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </CalculationsProvider>
  )
}

export default App
