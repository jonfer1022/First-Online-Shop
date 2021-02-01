import React, { Fragment } from 'react';
import Portafolio from './Portafolio';
import SectionTitle from './SectionTitle';
import Contact from './Contact';
import Slider from './Slider';
import SliderMult from './SliderMult';
import imagen from '../img/img-portafolio/01-small.jpg';
import { dataSlider } from '../dataSlider.json';
import { dataSliderMult } from '../dataSliderMult.json';

const Home = (props) => {

  props.action("Home");

  return(
    <Fragment>
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
        <SliderMult id="discounts" discounts={dataSliderMult}/>
        <Contact />
    </Fragment>
  );
}

export default Home;