import "./global/styles/styles.css"

import { Route, Switch } from "react-router-dom"

import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Start from "./pages/Start"

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  )
}

export default App
