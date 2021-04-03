import React, { Fragment, useEffect } from 'react';
import Portafolio from './Portafolio';
import SectionTitle from './SectionTitle';
import Contact from './Contact';
import Slider from './Slider';
import SliderMult from './SliderMult';
import { useDispatch , useSelector } from 'react-redux';
import homeAction from '../redux/reducer/home.reducer';

const Home = (props) => {

  props.action("Home");
  
  let img = "https://raw.githubusercontent.com/jonfer1022/First-Online-Shop/main/src/img/img_subtitles.jpg"
  const dispatch = useDispatch();
  
  const categories = useSelector(store => store.home.categories);
  const discountClothes = useSelector(store => store.home.discountClothes);
  const lastestCollection = useSelector(store => store.home.lastestCollection);
  const amount = 10;

  useEffect( ()=>{
    dispatch(homeAction.getCategories());
    dispatch(homeAction.getDiscountsClothes());
    dispatch(homeAction.getLastestCollection(amount));
  },[dispatch]);

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
        {discountClothes?.length > 0 ? 
        <SliderMult id="discounts" discounts={discountClothes}/>  
        : null
        }
        <Contact />
    </Fragment>
  );
}

export default Home;