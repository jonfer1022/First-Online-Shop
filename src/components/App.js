import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Portafolio from './Portafolio';
import SectionTitle from './SectionTitle';
import Contact from './Contact';
import Footer from './Footer';
import Slider from './Slider'
import { Header } from './Header';
import { Layout } from './Layout';

function App() {
  return (
    <Fragment>
      <header>
        <NavBar/>
        <Header/>
      </header>
      <br/>
      <Slider />
      <br/>
      <SectionTitle 
        title="¡LO ÚLTIMO!" 
        parrafo="Descubre nuestra última colección." 
        img="/static/media/bg_image.36d76ca7.jpg"
      />
      <Portafolio />
      <br/>
      <SectionTitle 
        title="¡Descuentos!" 
        parrafo="Últimos productos a muy buen precio."
        img="/static/media/bg_image.36d76ca7.jpg"
      />
      <div>--</div>
      <Contact />
      <Footer />
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
