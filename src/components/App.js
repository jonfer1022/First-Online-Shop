import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import Portafolio from './Portafolio';
import SectionTitle from './SectionTitle';
import Contact from './Contact';
import Footer from './Footer';
import Slider from './Slider';
import SliderMult from './SliderMult';
import Header from './Header';
import { Layout } from './Layout';
import imagen from '../img/img-portafolio/01-small.jpg';
import { dataSlider } from '../dataSlider.json';
import { dataSliderMult } from '../dataSliderMult.json';

function App() {
  
  return (
    <Fragment>
      <header>
        <NavBar/>
        <Header id="header"/>
      </header>
      <Slider id="categories" categories={dataSlider}/>
      <br/>
      <SectionTitle 
        title="¡LO ÚLTIMO!" 
        parrafo="Descubre nuestra última colección." 
        img={"https://raw.githubusercontent.com/jonfer1022/First-Online-Shop/main/src/img/img_subtitles.jpg"||imagen}
      />
      <Portafolio />
      <br/>
      <SectionTitle 
        title="¡Descuentos!" 
        parrafo="Últimos productos a muy buen precio."
        img={"https://raw.githubusercontent.com/jonfer1022/First-Online-Shop/main/src/img/img_subtitles.jpg"||imagen}
      />
      <br/>
      {/* <SliderMult id="discounts" discounts={dataSliderMult}/> */}
      <SliderMult id="discounts" discounts={dataSliderMult}/>
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
