import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Calculator from './pages/Calculator'

import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Calculator />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  )
}

export default App
