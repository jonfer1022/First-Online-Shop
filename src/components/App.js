import React, { Fragment, useState } from 'react';
import { Route, Switch, Redirect, /*BrowserRouter*/ } from 'react-router-dom';
import { Provider } from 'react-redux';
import generateStore, { history } from '../redux/store';
import { ConnectedRouter } from 'connected-react-router';
import Home from './Home';
import Products from './Products';
import ClothingDetail from './ClothingDetail';
import Footer from './Footer';
import { Layout } from './Layout';
import Header from './Header';
import NavBar from './NavBar';
import './styles/body.scss';

function App() {
  
  const [side,setSide] = useState(null)
  const store = generateStore()
  const lugar = data => setSide(data);

  return (
    <Fragment>
      <Provider store = { store }>
        <ConnectedRouter history={history}>
          <header>
            <NavBar side={side}/>
            {side === "Home" ? <Header id="header"/> : null}
          </header>
          <body>
            <Layout>
              {/* <BrowserRouter> */}
                <Switch>
                  <Route exact path ="/home" children={<Home action={lugar}/>} />
                  <Route path ='/products' children={<Products action={lugar} />}/>
                  <Route path ='/clothing-detail' children={<ClothingDetail action={lugar} />}/>              
                  <Redirect from="/" to="/home" />
                  {/* <Route component={NotFound}/> */}
                </Switch>
              {/* </BrowserRouter> */}
            </Layout>
            <Footer />
          </body>
        </ConnectedRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
