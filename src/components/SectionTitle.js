import React, {Fragment} from 'react';
import './styles/SectionTitle.scss';

const SectionTitle = (props) => {
  
  return(
    <Fragment>
      <div className="section-title text-center center" style={{backgroundImage: `url(${props.img})`}}>
        <div className="overlay">
          <h2>{props.title}</h2>
          <hr style={{height: "4px"}}/>
          <p>{props.parrafo}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default SectionTitle;