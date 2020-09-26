import React from 'react'
import {
  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import AboutPage from './pages/AboutPage'
import StartPage from './pages/StartPage'
import {TableDataProvider} from './components/TableDataProvider/TableDataProvider'

function App() {
  let baseUrl
  if(process.env.NODE_ENV === 'development') {
    baseUrl = ''
  }

  if(process.env.NODE_ENV === 'production') {
    baseUrl = 'fugr-ru-react-test'
  }
  return (
      <Router basename={baseUrl}>
        <NavBar/>
        <Switch>
          <Route exact path='/table/:size' component={TableDataProvider}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/" component={StartPage}/>
        </Switch>
      </Router>
  )
}

export default App
