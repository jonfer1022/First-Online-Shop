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
        <div class="intro">hola</div>
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
