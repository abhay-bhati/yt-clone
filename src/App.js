import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommended from './Recommended';
import SearchPage from './SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/search/:searchInput'>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path='/' exact>
            <Header />
            <div className='app__body'>
              <Sidebar />
              <Recommended />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
