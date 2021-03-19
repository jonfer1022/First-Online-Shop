import React, {Fragment} from 'react';
import CardClothes from '../components/CardClothes';
// import { dataPortafolio } from '../dataTest.json';

const Portafolio = (props) => {

  return(
    <Fragment>
      {/* <h1 className="text-center">Categorias</h1> */}
      <div id="theLast" className="container">
        <div className="row mt-2">
					<CardClothes clothes={props.portfolio}/>
        </div>
      </div>
    </Fragment>
  )
}

export default Portafolio;