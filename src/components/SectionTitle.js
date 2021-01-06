import React, {Fragment} from 'react';
import './styles/SectionTitle.scss';

const SectionTitle = (props) => {
  
  // style={{background: "#444 url(../../img/TitleCollection.jpg) center center no-repeat fixed"}}
  // /static/media/TitleCollection.5d0497ca.jpg
  // style={{backgroundImage: "url(/static/media/TitleCollection.5d0497ca.jpg)"}} 
  // console.log(props.img);
  // http://localhost:3000/static/media/TitleCollection.5d0497ca.jpg
  return(
    <Fragment>
      <div className="section-title text-center center" style={{backgroundImage: `url(${props.img})`}}>
        <div className="overlay">
          <h2>{props.title}</h2>
          <hr/>
          <p>{props.parrafo}</p>
        </div>
      </div>
    </Fragment>
  )
}

export default SectionTitle;