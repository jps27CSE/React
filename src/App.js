import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
      <div>
         <Navbar/>
         <Route exact path="/" component={Home}/>
         <Route  path="/about" component={About}/>
         <Route  path="/contact" component={Contact}/>
         <Route  path="/:post" component={Post}/>
      </div>
      </BrowserRouter>
    );
  }

}

export default App;
