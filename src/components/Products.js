import React, {Fragment} from 'react';
import ListClothes from './ListClothes';
import './styles/Products.scss';
import { dataPortafolio } from '../dataClothes.json';
import { dataFilter } from '../dataFilter.json';
import { Form } from 'react-bootstrap';

const Products = (props) => {
	
  props.action("Products");

  return(
    <Fragment>
      <div className="products-main">
        <div className="filters">
          <Form.Group>
            <h5>Ordenar por:</h5>
            <Form.Control as="select">
              {dataFilter.map(filter =>{
                return <option key={filter.id}>{filter.nombre_filtro}</option>
              })}
            </Form.Control>
          </Form.Group>
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