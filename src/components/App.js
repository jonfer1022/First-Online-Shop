import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Products from './Products';
import { Layout } from './Layout';
import Home from './Home';
import Header from './Header';
import NavBar from './NavBar';
import './styles/body.scss';

function App() {
  
  const [side,setSide] = useState(null)

  const lugar = data => setSide(data);

  return (
    <Fragment>
      <header>
        <NavBar side={side}/>
        {side === "Home" ? <Header id="header"/> : null}
      </header>
      <body>
        <Layout>
          <BrowserRouter>
            <Switch>
              <Route exact path ="/home" children={<Home action={lugar}/>} />
              <Route exact path ="/products" children={<Products action={lugar} />}/>              
              <Redirect from="/" to="/home" />
              {/* <Route component={NotFound}/> */}
            </Switch>
          </BrowserRouter>
        </Layout>
        <Footer />
      </body>
    </Fragment>
  );
}

export default App;
