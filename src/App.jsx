import React from 'react'
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import { 
  Navbar, 
  Home, 
  About, 
  Experience, 
  Skills, 
  Interest, 
  Awards 
} from './components'

export default class App extends React.Component {
  render() {
    const routes = [
      { path: '/about', name: 'About', component: About },
      { path: '/experience', name: 'Experience', component: Experience },
      { path: '/skills', name: 'Skills', component: Skills },
      { path: '/interest', name: 'Interest', component: Interest },
      { path: '/awards', name: 'Awards', component: Awards },
      { path: '/', name: 'Home', component: Home }
    ]

    return (
      <div className="App">
        <Navbar />
        
        <Switch>
          {routes.map((route, index) => 
            <Route path={route.path} component={route.component}></Route>
          )}
        </Switch>
      </div>
    )
  }
}