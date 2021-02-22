import React, { Fragment } from 'react';
import firtsAction from '../lib/firtsAction'
import Portafolio from './Portafolio';
import SectionTitle from './SectionTitle';
import Contact from './Contact';
import Slider from './Slider';
import SliderMult from './SliderMult';
import imagen from '../img/img-portafolio/01-small.jpg';
import { dataSliderMult } from '../dataSliderMult.json';
import { useDispatch, useSelector } from 'react-redux';
import { getDataInitial, getCategoriesAction, getDiscountClothesAction } from '../redux/ducks/home.Ducks';

const Home = (props) => {

  const dispatch = useDispatch();
  const categories = useSelector(store => store.home.categories);
  const discountClothes = useSelector(store => store.home.discountClothes);
  
  // console.log(discountClothes);
  props.action("Home");

  return(
    <Fragment>
        <Slider id="categories" categories={categories}/>
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

export default firtsAction( {render: Home} , {action: { initial: getDataInitial , data: [getCategoriesAction, getDiscountClothesAction] }} );