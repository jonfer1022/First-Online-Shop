import React from 'react';
import { useDispatch } from 'react-redux';

const firtsAction = ({render},{action},{params_body}) => props => {
  let initialAction = action.initial;
  let dataAction = [];
  // mapeamos action.data para separar cada action y asignarlo a un array en cada iteración
  action.data.map(element => dataAction.push(element));
  const dispatch = useDispatch();
  dispatch(initialAction());
  // disparamos cada una de las acciones 
  dataAction.forEach((reducerAction,i) => {
    //Obtenemos primero los parametros o body si es solicitado
    let params = params_body?.params?.find(reg => reg.position === i);
    let body = params_body?.body?.find(reg => reg.position === i);
    dispatch(reducerAction(
      params ? params.data : null,
      body ? body.data : null
    ))
  })
  const Componente = render;
  return <Componente {...props}/>
}

export default firtsAction
