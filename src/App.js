import React from 'react'
import {
  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import AboutPage from './pages/AboutPage'
import StartPage from './pages/StartPage'
import {TableDataProvider} from './components/TableDataProvider/TableDataProvider'

function App() {
  return (
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={StartPage}/>
          <Route exact path='/table/:size' component={TableDataProvider}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </Router>
  )
}

export default App
