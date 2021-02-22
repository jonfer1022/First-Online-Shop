import React from 'react';
import { useDispatch } from 'react-redux';

const firtsAction = ({render},{action}) => props => {
  let initialAction = action.initial;
  let dataAction = [];
  // mapeamos action.data para separar cada action y asignarlo a un array en cada iteración
  action.data.map(element => dataAction.push(element));
  const dispatch = useDispatch();
  dispatch(initialAction());
  // disparamos cada una de las acciones 
  dataAction.forEach(reg => {dispatch(reg())})
  const Componente = render;
  return <Componente {...props}/>
}

export default firtsAction
