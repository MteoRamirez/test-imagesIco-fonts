import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
