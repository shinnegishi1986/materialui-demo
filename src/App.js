import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
	  <Button variant="contained">Hello World</Button>;
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
