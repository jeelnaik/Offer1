
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homes from './pages/Homes'
import Home from './pages/Home'
import Message from './pages/Message'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/homes" component={Homes} />
            <Route exact path="/" component={Homes} />
            <Route exact path="/home/:homeId" component={Home} />
            <Route exact path="/home/send" component={Message} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
