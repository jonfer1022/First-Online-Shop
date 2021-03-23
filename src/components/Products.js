import React, {Fragment, useEffect, useState} from 'react';
import ListClothes from './ListClothes';
import './styles/Products.scss';
import { dataFilter } from '../dataFilter.json';
import { Form } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import { useDispatch , useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import productsAction from '../redux/ducks/products.Ducks';
import master_data from '../master_data';
import { Checkbox, FormControlLabel } from '@material-ui/core';

let string_sizes = [];
let priceMin = 1000, priceMax = 10000;

const Products = (props) => {
  
  props.action("Products");

  const sizes = master_data.clothes_sizes;
  const genders = master_data.clothes_gender;
  const categories = master_data.clothes_categories;

  const dispatch = useDispatch();
  const location = useLocation();

  const products = useSelector(store => store.products.products || {});

  const [gender, setGender] = useState(location.state.gender||"");
  const [category, setCategory] = useState(location.state.category||"");
  const [trigger, setTrigger] = useState(false)
  const [sortBy, setSortBy] = useState(0);
  const [price, setPrice] = useState([priceMin, priceMax]);
  const [size, setSize] = useState([]);
  const [triggerPrice, setTriggerPrice] = useState(false);
  const [triggerGender, setTriggerGender] = useState(false);
  const [triggerCategories, setTriggerCategories] = useState(false);

  const [checkGender, setCheckGender] = useState([
    location.state.gender === genders.male ? true : false,
    location.state.gender === genders.female ? true : false,
  ]);

  const [checkCategories, setCheckCategories] = useState([
    location.state.category === categories.jackets,
    location.state.category === categories.sweater,
    location.state.category === categories.shirts,
    location.state.category === categories.dresses,
    location.state.category === categories.shoes
  ])

  // console.log(checkGender, gender);
  const maxItemsByPage = 12;

  // UseEffect que funciona solamente cuando se renderiza por primera vez el componente 
  useEffect( ()=>{
    string_sizes = [];
    dispatch(productsAction.getAllProducts(
      gender,
      category,
      sortBy,
      size,
      price[0],
      price[1]
    ));
  },[dispatch]);

  // Cambia el valor del slider
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };

  // Disparador de la acción de los filtros con cada acción que se ejecute
  useEffect(()=>{
    // console.log(sortBy, size, price[0], price[1], gender, category);
    if(sortBy !== 0 || size !== [] || triggerPrice || triggerGender || triggerCategories){
      dispatch(productsAction.getAllProducts(
        gender,
        category,
        sortBy,
        size,
        price[0],
        price[1]
      ))
      setTriggerPrice(false);
      setTriggerGender(false);
      setTriggerCategories(false);
    }
  },[trigger]);


  // Handler que une en un arreglo los tamaños de los productos a filtrar
  const setSizesFilter = (value, clothesSizes) =>{
    if(value) string_sizes.push(clothesSizes)
    else string_sizes.splice(string_sizes.findIndex(el => el === clothesSizes),1);
    setSize(string_sizes);
    setTrigger(!trigger);
  };

  // Handler que cambia cambia la busqueda por alguno de los generos o los dos cuando se deshabilitan los checkbox
  const checkGenderFilter = (valueCheck, genero) =>{
    if(valueCheck && (genero === genders.male)){
      setCheckGender([valueCheck,false]);
      setGender(genders.male);
    }
    else if(valueCheck && (genero === genders.female)){
      setCheckGender([false,valueCheck]);
      setGender(genders.female);
    }
    else{
      setCheckGender([
        genero === genders.male ? valueCheck : false,
        genero === genders.female ? valueCheck : false
      ])
      setGender("");
    }
    setTriggerGender(true);
    setTrigger(!trigger);
  }

  // Función que se ejecuta cuando se suelta el click del elemento
  let sliderElement = document.getElementById('priceSlider');
  if(sliderElement) {
    sliderElement.onmouseup = () =>  {
      setTriggerPrice(true);
      setTrigger(!trigger);
    }
  }

  // Handler que cambia cambia la busqueda por alguno de los generos o los dos cuando se deshabilitan los checkbox
  const checkCategoriesFilter = (valueCheck, categoria) =>{
    console.log(valueCheck, categoria);
    if(valueCheck && (categoria === categories.jackets)){
      setCheckCategories([true, false, false, false, false]);
      setCategory(categories.jackets);
    }
    else if(valueCheck && (categoria === categories.sweater)){
      setCheckCategories([false, true, false, false, false]);
      setCategory(categories.sweater);
    }
    else if(valueCheck && (categoria === categories.shirts)){
      setCheckCategories([false, false, true, false, false]);
      setCategory(categories.shirts);
    }
    else if(valueCheck && (categoria === categories.dresses)){
      setCheckCategories([false, false, false, true, false]);
      setCategory(categories.dresses);
    }
    else if(valueCheck && (categoria === categories.shoes)){
      setCheckCategories([false, false, false, false, true]);
      setCategory(categories.shoes);
    }
    else{
      setCheckCategories([false, false, false, false, false]);
      setCategory("");
    }
    setTriggerCategories(true);
    setTrigger(!trigger);
  }

  return(
    <Fragment>
      <div className="products-main">
        <div className="filters">
          <div className="genero">
              <h5>Genero</h5>
            <div className="genero-check">
              <FormControlLabel control ={ <Checkbox checked={checkGender[0]} onChange={(e) => checkGenderFilter(e.target.checked, genders.male)} /> } label="Masculino" />
              <FormControlLabel control ={ <Checkbox checked={checkGender[1]} onChange={(e) => checkGenderFilter(e.target.checked, genders.female)} /> } label="Femenino" />
            </div>
          </div>
          <div className="ordenar">
            <Form.Group>
              <h5>Ordenar por:</h5>
              <Form.Control as="select"
                onChange = {(e) => {
                  setSortBy(dataFilter.filter(el => el.nombre_filtro === e.target.value)[0].id)
                  setTrigger(!trigger);
                }}  
              >
                {dataFilter.map(filter =>{
                  return <option key={filter.id}>{filter.nombre_filtro}</option>
                })}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="categories">
            <h5>Tipo de prenda:</h5>
            <div className="colm-1">
              <FormControlLabel control ={ <Checkbox color="primary" checked={checkCategories[1]} onChange={(e)=> checkCategoriesFilter(e.target.checked, categories.sweater)}/> } label="Buzos" />
              <FormControlLabel control ={ <Checkbox color="primary" checked={checkCategories[2]} onChange={(e)=> checkCategoriesFilter(e.target.checked, categories.shirts)}/> } label="Camisas" />
              <FormControlLabel control ={ <Checkbox color="primary" checked={checkCategories[0]} onChange={(e)=> checkCategoriesFilter(e.target.checked, categories.jackets)}/> } label="Chaquetas" />
            </div>
            <div className="colm-2">
              <FormControlLabel control ={ <Checkbox color="primary" checked={checkCategories[3]} onChange={(e)=> checkCategoriesFilter(e.target.checked, categories.dresses)}/> } label="Vestidos" />
              <FormControlLabel control ={ <Checkbox color="primary" checked={checkCategories[4]} onChange={(e)=> checkCategoriesFilter(e.target.checked, categories.shoes)}/> } label="Zapatos" />
            </div>
          </div>
          <div className="talla">
            <h5>Talla</h5>
            <div className="colm-1">
              <FormControlLabel control ={ <Checkbox color="primary" onChange={(e) => setSizesFilter(e.target.checked, sizes.x_large)}/> } label="XL" />
              <FormControlLabel control ={ <Checkbox color="primary" onChange={(e) => setSizesFilter(e.target.checked, sizes.large)}/> } label="L" />
              <FormControlLabel control ={ <Checkbox color="primary" onChange={(e) => setSizesFilter(e.target.checked, sizes.middle)}/> } label="M" />
            </div>
            <div className="colm-2">
              <FormControlLabel control ={ <Checkbox color="primary" onChange={(e) => setSizesFilter(e.target.checked, sizes.small)}/> } label="S" />
              <FormControlLabel control ={ <Checkbox color="primary" onChange={(e) => setSizesFilter(e.target.checked, sizes.x_small)}/> } label="XS" />
              {/* <FormControlLabel control ={ <Checkbox color="primary" onChange={(e) => setSizesFilter(e.target.checked, sizes.all)}/> } label="ALL" /> */}
            </div>
          </div>
          <div className="rango">
            <h5>Rango de precio</h5>
            <div className="slider-rango">
              <Slider
                id = "priceSlider"
                value={price}
                step={1000}
                min={priceMin}
                max={priceMax}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                // getAriaValueText={valuetext}
              />
            </div>
          </div>
        </div>
        <div className="products-list">
          {products.length > 0 ? 
            <ListClothes 
            amountItems = {maxItemsByPage}
            clothes = {products}
            />
          : "No hay productos disponibles" }   
        </div> 
      </div>
    </Fragment>
  )
}

export default Products;