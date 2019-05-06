import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link ,Switch,Redirect} from "react-router-dom";
import Home from './Home'
import Standing from './Standing'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/standing">Standing</Link>
            </li>
          </ul>
        </nav>
		<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/standing/:id" component={Standing} />
        	<Redirect from="/standing" to="/standing/PL" />
			<Redirect to="/" />
		</Switch>
      </div>
    </Router>
    );
  }
}

export default App;
