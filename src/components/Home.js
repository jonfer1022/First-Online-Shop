import React, { Fragment } from 'react';
import firtsAction from '../lib/firtsAction'
import Portafolio from './Portafolio';
import SectionTitle from './SectionTitle';
import Contact from './Contact';
import Slider from './Slider';
import SliderMult from './SliderMult';
import { /*useDispatch ,*/ useSelector } from 'react-redux';
import { getDataInitial, getCategoriesAction, getDiscountClothesAction, getLastestCollectionAction } from '../redux/ducks/home.Ducks';
// import imagen from '../img/img-portafolio/01-small.jpg';
// import { dataSliderMult } from '../dataSliderMult.json';

const Home = (props) => {

  let img = "https://raw.githubusercontent.com/jonfer1022/First-Online-Shop/main/src/img/img_subtitles.jpg"
  // const dispatch = useDispatch();
  const categories = useSelector(store => store.home.categories);
  const discountClothes = useSelector(store => store.home.discountClothes);
  const lastestCollection = useSelector(store => store.home.lastestCollection);
  
  props.action("Home");

  return(
    <Fragment>
        <Slider id="categories" categories={categories}/>
        <br/>
        <SectionTitle 
          title="¡LO ÚLTIMO!" 
          parrafo="Descubre nuestra última colección." 
          img={img}
        />
        <Portafolio portfolio={lastestCollection}/>
        <br/>
        <SectionTitle 
          title="¡Descuentos!" 
          parrafo="Últimos productos a muy buen precio."
          img={img}
        />
        <br/>
        {discountClothes.length > 0 ? 
        <SliderMult id="discounts" discounts={discountClothes}/>  
        : null
        }
        <Contact />
    </Fragment>
  );
}

export default firtsAction( 
  {render: Home} , 
  {action: { initial: getDataInitial , data: [getCategoriesAction, getDiscountClothesAction, getLastestCollectionAction] } } ,
  {params_body: {
    params: [{position: 2, data: {amount: 10}}],
    // body: [{position: 2, data: {data1: 15, data2:2} }]
  }} 
);