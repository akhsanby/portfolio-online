import React from 'react'
import { Switch, Route } from "react-router-dom";

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
      <div className="flex w-screen h-screen">
        <Navbar />
        
        <Switch>
          {routes.map((route, index) => 
            <Route key={index} path={route.path} component={route.component}></Route>
          )}
        </Switch>
      </div>
    )
  }
}