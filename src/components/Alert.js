import './styles/Alert.scss';
import React, { Fragment, useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiCheckUnderlineCircleOutline } from '@mdi/js';

const Alert = (props) =>{

  const { show, message } = props;

  const [flag, setFlag] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false); //Variable que al renderizarse por primera vez se le asignará un elemento 

  useEffect( ()=>{
    setAlertSuccess(document.getElementById("alert-main-success"));
  },[]);

  useEffect( ()=>{
    if(show){
      alertSuccess.style.animation = "1.4s appear-alert 1";
      alertSuccess.style.animationFillMode = "forwards";
      setFlag(true);
    } 
    else if(!show && flag){
      alertSuccess.style.animation = "1s appear-alert-hide 1";
      alertSuccess.style.animationFillMode = "forwards";
    }
  },[show]);

  return (
    <Fragment>
      <div id = "alert-main-success">
        <div className = "alert-icon">
          <Icon path={ mdiCheckUnderlineCircleOutline }
            title="check_alert"
            size={1.5}
            horizontal
            vertical
            rotate={180}
            color="green"
          />
        </div>
        <div className = "alert-msg">
          <span>{message}</span>
        </div>
      </div>
    </Fragment>
  )
}

export default Alert;