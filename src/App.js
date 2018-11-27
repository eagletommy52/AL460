import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Calendar from './components/Calendar';
import Store from './components/Store';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/store' component={Store} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;