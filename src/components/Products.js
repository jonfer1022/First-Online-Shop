import React, {Fragment} from 'react';
import ListClothes from './ListClothes';
import './styles/Products.scss';
import { dataPortafolio } from '../dataClothes.json';
import { dataFilter } from '../dataFilter.json';
import { Form } from 'react-bootstrap';
import Slider from '@material-ui/core/Slider';
import { useDispatch , useSelector } from 'react-redux';

const Products = (props) => {
  
  props.action("Products");

  const algo = useSelector(store => store.products.products);
  console.log(algo);

  const [value, setValue] = React.useState([0, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <Form.Control as="select">
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
          <ListClothes 
            amountItems = {12}
            clothes = {dataPortafolio}
          />   
        </div> 
      </div>
    </Fragment>
  )
}

export default Products;