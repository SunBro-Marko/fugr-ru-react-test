import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import AboutPage from './pages/AboutPage'
import StartPage from './pages/StartPage'
import TablePage from './pages/TablePage'

function App() {
  return (
    <>
      <Router>
        <NavBar activeRoute="/about"/>
        <Switch>
          <Route path="/data" component={StartPage}/>
          <Route path="/table/:id" component={TablePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
