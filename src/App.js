import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import VideoDetail from './pages/VideoDetail'
import SearchResult from './pages/SearchResult'
import PlaylistPage from './pages/PlaylistPage'
import TrendingPage from './pages/TrendingPage';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
      <Switch>
        <Route  exact path="/" component={HomePage}/>
        <Route  exact path="/trending" component={TrendingPage}/>
        <Route  exact path="/login" component={LoginPage}/>
        <Route  exact path="/videos/:videoId" component={VideoDetail}/>
        <Route exact path ='/search/:searchQuery' component={SearchResult}/>
        <Route exact path='/playlist' component={PlaylistPage}/>
        <Redirect to="/" />
      </Switch>
      </div>
    </div>
  );
}

export default App;
