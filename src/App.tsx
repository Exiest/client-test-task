import "./global/styles/styles.css"

import { useState } from "react"
import { Route, Switch } from "react-router-dom"

import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Start from "./pages/Start"

function App() {
  const [hasAuth, setAuth] = useState(false)
  const [credentials, setCredentials] = useState()

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Start} />
        <Route
          path="/login"
          render={(props) => <Login {...props} onLogin={() => setAuth(true)} />}
        />
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  )
}

export default App
