import React, {Fragment, useEffect, useState} from 'react';
import ListClothes from './ListClothes';
import './styles/Products.scss';
import { dataFilter } from '../dataFilter.json';
import { Form } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import { useDispatch , useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import productsAction from '../redux/ducks/products.Ducks';

const Products = (props) => {

  const dispatch = useDispatch();
  const location = useLocation();
  const products = useSelector(store => store.products.products || {});

  const [gender, setGender] = useState(location.state.gender);
  const [category, setCategory] = useState(location.state.category);
  const [sortBy, setSortBy] = useState(0);
  const [value, setValue] = useState([0, 200]);

  props.action("Products");
  const maxItemsByPage = 12;

  useEffect( ()=>{
    dispatch(productsAction.getAllProducts(
      gender,
      category,
      sortBy
    ));
  },[dispatch])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(()=>{
    if(sortBy != 0){
      dispatch(productsAction.getAllProducts(
        gender,
        category,
        sortBy
      ))
    }
  },[sortBy])

  // const valuetext = (value) => {
  //   return `${value}°C`;
  // }
  // console.log(value);

  return(
    <Fragment>
      <div className="products-main">
        <div className="filters">
          <div className="ordenar">
            <Form.Group>
              <h5>Ordenar por:</h5>
              <Form.Control 
                as="select"
                onChange = {(e) => setSortBy(dataFilter.filter(el => el.nombre_filtro === e.target.value)[0].id)}  
              >
                {dataFilter.map(filter =>{
                  return <option key={filter.id}>{filter.nombre_filtro}</option>
                })}
              </Form.Control>
            </Form.Group>
          </div>
          <div className="talla">
            <h5>Talla</h5>
            <div className="colm-1">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="XL" />
                <Form.Check type="checkbox" label="L" />
                <Form.Check type="checkbox" label="M" />
              </Form.Group>
            </div>
            <div className="colm-2">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="S" />
                <Form.Check type="checkbox" label="XS" />
                <Form.Check type="checkbox" label="All" />
              </Form.Group>
            </div>
          </div>
          <div className="rango">
            <h5>Rango de precio</h5>
            <div className="slider-rango">
              <Slider
                value={value}
                min={0}
                max={200}
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