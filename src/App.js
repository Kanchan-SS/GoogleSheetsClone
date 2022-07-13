import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login.js";
import Landing from "./Landing.js";
import Signin from "./Signin.js";
import Addtask from "./Addtask.jsx";
import Tasklist from "./Tasklist.jsx";
import Edit from "./Edit.jsx";

const App = () => {
  return (

    <div className="app-content">
      <Router>
        

        <Switch>
        <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signin">
            <Signin />
          </Route>

          <Route path="/addtask">
            <Addtask />
          </Route>

          <Route path="/tasklist">
            <Tasklist/>
          </Route>
          
          <Router path="/edit">
            <Edit/>
          </Router>

        </Switch>
      </Router >
    </div>


  );
}

export default App;