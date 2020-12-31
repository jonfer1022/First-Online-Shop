// import logo from './logo.svg';
// import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import { Layout } from './Layout';
import './styles/Header.scss'

function App() {
  return (
    <Fragment>
      <header>
        <NavBar></NavBar>
        <div class="intro">
          <div class="overlay">
            <div class="container">
              <div class="row">
                <div class="intro-text">
                  <h1>Touché</h1>
                  <p>Restaurant / Coffee / Pub</p>
                  <a href="#about" class="btn btn-custom btn-lg page-scroll">Discover Story</a> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Layout>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path ="/home" component={Home}/>
            <Route exact path ="/categorias" component={FirstApp}/>
            <Route exact path ="/producto" component={Products}/> */}
            <Redirect from="/" to="/home" />
            {/* <Route component={NotFound}/> */}
          </Switch>
        </BrowserRouter>
      </Layout>
    </Fragment>
  );
}

export default App;
