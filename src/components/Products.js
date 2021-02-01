import React, {Fragment} from 'react';
import ListClothes from './ListClothes';
import './styles/Products.scss';

const Products = (props) => {
	
  props.action("Products");

  return(
    <Fragment>
      <div className="products-main">
        <div className="filters">Filtros</div>
        <div className="products-list">
          <ListClothes />   
        </div> 
      </div>
    </Fragment>
  )
}

export default Products;