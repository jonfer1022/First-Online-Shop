import React, {Fragment} from 'react';
import CardClothes from '../components/CardClothes';
import { dataPortafolio } from '../dataTest.json';

const Portafolio = () => {

  return(
    <Fragment>
      {/* <h1 className="text-center">Categorias</h1> */}
      <div className="container">
        <div className="row mt-2">
					<CardClothes clothes={dataPortafolio}/>
        </div>
      </div>
    </Fragment>
  )
}

export default Portafolio;