import React, { Component } from "react"
import "./App.css"

//Router components
import { Switch, Route, Redirect } from "react-router-dom"

//App components to route
import Login from "../Login/Login"
import Signup from "../Signup/Signup"
import Calendar from "../Calendar/Calendar"
import PersonalCalendar from "../PersonalCalendar/PersonalCalendar"
import Issues from "../Issues/Issues"
import Issue from "../Issue/Issue"
import Contact from "../Contact/Contact"
import Account from "../Account/Account"

/**
 * Represents the overall Civix application.
 */
class App extends Component {
  /**
   * Creates an instance of the application component.
   */
  constructor(props) {
    super(props)
  }

  /**
   * Renders the application component on the screen, routed as follows:
   * /login -> login page
   * /signup -> signup page
   * /calendar -> calendar dashboard (with community & personal calendar)
   * /issues -> ballot board
   * /contact -> representatives hub
   * /account -> profile page
   * @return the application component, with the login page displayed by default
   */
  render() {
    return (
      <div className="app-routes">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/issues" component={Issues} />
          <Route path="/issue/:id" component={Issue} />
          <Route path="/contact" component={Contact} />
          <Route path="/account" component={Account} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    )
  }
}

export default App
