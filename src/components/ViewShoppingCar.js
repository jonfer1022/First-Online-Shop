import React, {Fragment, useState, useRef, useLayoutEffect, useEffect} from 'react';
import './styles/ViewShoppingCar.scss';
import { Modal } from 'react-bootstrap';
import productsAction from '../redux/reducer/products.reducer';
import { useDispatch , useSelector } from 'react-redux';
import { mdiDeleteCircle, mdiCheckCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import Alert from './Alert';
import master_data from '../master_data';

// const _ = require("lodash");
let arrayProducts = [];

const ViewShoppingCar = (props) => {
  
  props.action("Products"); 
  const dispatch = useDispatch();
  const sizes = master_data.clothes_sizes;

  // UseLayoutEffect que funciona antes de del renderizado del componente
  useLayoutEffect( ()=>{
    dispatch(productsAction.getDetailAddedProducts());
  },[dispatch]);

  const total_added_products = useSelector(store => store.products.total_added_products || 0);
  const message = useSelector(store => store.products.message || "");
  const products = useSelector(store => store.products.productsAdded || []); 
  let total = 0;

  const [showAlert, setShowAlert] = useState(false);
  const [flagRender, setFlagRender] = useState(false);
  const [different, setDifferent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Efecto que asigna el valor products 
  useEffect(() => {
    if(products.length) {
      //Se realiza un copia profunda de tal manera que son dos variables Objetos que no están vinculados.
      arrayProducts = JSON.parse(JSON.stringify(products));
      setFlagRender(!flagRender);
      setDifferent(false);
    }
  }, [products]);

  products.forEach(reg => {
    total = total + (reg.x_small ? reg.x_small * reg.price : 0) + (reg.small ? reg.small * reg.price : 0) + (reg.middle ? reg.middle * reg.price : 0) + (reg.large ? reg.large * reg.price : 0) + (reg.x_large ? reg.x_large * reg.price : 0);
  });

  // Método que dispara la acción para borrar el tamaño seleccionado.
  const deleteSizeProduct = (product, size) => {
    dispatch(productsAction.submitDeleteSizeProduct(product, size));
    setShowAlert(true);
  }

  // Limpiar mensae
  if(showAlert && message?.length){
    setTimeout(function(){ 
      setShowAlert(false);
      dispatch(productsAction.eraseInfo()); 
    }, 3500);
  }

  const handleChangeSize = (value, index, key) => {
    arrayProducts[index][key] = value;
    if( products[index][key] == arrayProducts[index][key]) arrayProducts[index][`${key}_same`] = false;
    else arrayProducts[index][`${key}_same`] = true;
    setFlagRender(!flagRender);
    
    //Método que averigua si hay al menos un dato ingresado.
    diff: for (let i = 0; i < products.length; i++) {
      for (const key in products[i]) {
        if( products[i][key] !== arrayProducts[i][key]){
          setDifferent(true);
          break diff;
        } else if( i == ( products.length - 1) ){
          setDifferent(false);
        }
      }
    }
    // products[index][key] = value; Extrañamente si se actualiza. Peero, recordar que los Objetos por defecto no son Inmutables
  }

  // Método que dispara la acción para actualizar la compra al tamaño seleccionado.
  const handleUpdateProduct = (id, size, amount) =>{
    dispatch(productsAction.submitUpdateSizeProduct(id, size, amount));
    setShowAlert(true);
  }

  // Método que dispara la acción para actualizar la compra con todos los cambios.
  const updateAllProducts = () => {
    dispatch(productsAction.submitUpdateAllProduct(arrayProducts));
    setShowAlert(true);
  }

  return(
    <>
      <div className="view-car-main">
        <Alert 
          show = {showAlert && message?.length}
          message = {message} 
        />
        <h5>View Shopping Car</h5>
        { arrayProducts.length > 0 ?
          <div className="view-car-detail-main">
            { arrayProducts.map( (item,i) => (
              <div className="view-car-detail">
                <div className="view-car-image">
                  <img src ={item.image_path}></img>
                </div>
                <div className="view-car-text">
                  <div className="title"><span>Producto:</span> {item.product_name}</div>
                  <div className="description"><span>Descripción:</span> {item.description}</div>
                </div>
                <div className="view-car-table">
                  <div className="header">
                    <div className="size">Tamaño</div>
                    <div className="price">Precio/u</div>
                    <div className="amount">Cantidad</div>
                    <div className="subtotal">Sub-Total</div>
                    <div className="actions">Acciones</div>
                  </div>
                  <div className="body">
                    { item.x_small ?
                      <div className="x_small">
                        <div className="size">XS</div>
                        <div className="price">{item.price}</div>
                        <div className="amount">
                          <input type="number" value={`${item.x_small}`.replace(/^(0+)/g, '')} onChange={({target}) => { handleChangeSize(target.value > 0 ? target.value : 1, i, "x_small") }} />
                        </div>
                        <div className="subtotal">{item.price * item.x_small}</div>
                        <div className="actions" >
                          {item.x_small_same ?
                            <Icon path={ mdiCheckCircleOutline }
                              title="update"
                              size={1}
                              horizontal
                              vertical
                              rotate={180}
                              color="green"
                              onClick={() => handleUpdateProduct(item.id, sizes.x_small, item.x_small)}
                            />
                            : null 
                          }
                          <Icon path={ mdiDeleteCircle }
                            title="delete"
                            size={1}
                            horizontal
                            vertical
                            rotate={180}
                            color="red"
                            onClick={() => deleteSizeProduct(item.id, sizes.x_small)}
                          />
                        </div>
                      </div> 
                    : null }
                    { item.small >= 0 ?
                      <div className="small">
                        <div className="size">S</div>
                        <div className="price">{item.price}</div>
                        <div className="amount">
                          <input type="number" value={`${item.small}`.replace(/^(0+)/g, '')} onChange={({target}) => { handleChangeSize(target.value > 0 ? target.value : 1, i, "small") }} />
                        </div>
                        <div className="subtotal">{item.price * item.small}</div>
                        <div className="actions" >
                          { item.small_same ? 
                            <Icon path={ mdiCheckCircleOutline }
                              title="update"
                              size={1}
                              horizontal
                              vertical
                              rotate={180}
                              color="green"
                              onClick={() => handleUpdateProduct(item.id, sizes.small, item.small)}
                            />
                          : null
                          }
                          <Icon path={ mdiDeleteCircle }
                            title="delete"
                            size={1}
                            horizontal
                            vertical
                            rotate={180}
                            color="red"
                            onClick={() => deleteSizeProduct(item.id, sizes.small)}
                          />
                        </div>
                      </div> 
                    : null }
                    { item.middle ?
                      <div className="middle">
                        <div className="size">M</div>
                        <div className="price">{item.price}</div>
                        <div className="amount">
                          <input type="number" value={`${item.middle}`.replace(/^(0+)/g, '')} onChange={({target}) => { handleChangeSize(target.value > 0 ? target.value : 1, i, "middle") }} />
                        </div>
                        <div className="subtotal">{item.price * item.middle}</div>
                        <div className="actions" >
                          { item.middle_same ? 
                            <Icon path={ mdiCheckCircleOutline }
                              title="update"
                              size={1}
                              horizontal
                              vertical
                              rotate={180}
                              color="green"
                              onClick={() => handleUpdateProduct(item.id, sizes.middle, item.middle)}
                            />
                            : null
                          }
                          <Icon path={ mdiDeleteCircle }
                            title="delete"
                            size={1}
                            horizontal
                            vertical
                            rotate={180}
                            color="red"
                            onClick={() => deleteSizeProduct(item.id, sizes.middle)}
                          />
                        </div>
                      </div> 
                    : null }
                    { item.large ?
                      <div className="large">
                        <div className="size">L</div>
                        <div className="price">{item.price}</div>
                        <div className="amount">
                          <input type="number" value={`${item.large}`.replace(/^(0+)/g, '')} onChange={({target}) => { handleChangeSize(target.value > 0 ? target.value : 1, i, "large") }} />
                        </div>
                        <div className="subtotal">{item.price * item.large}</div>
                        <div className="actions" >
                          { item.large_same ? 
                            <Icon path={ mdiCheckCircleOutline }
                              title="update"
                              size={1}
                              horizontal
                              vertical
                              rotate={180}
                              color="green"
                              onClick={() => handleUpdateProduct(item.id, sizes.large, item.large)}
                            />
                            : null
                          }
                          <Icon path={ mdiDeleteCircle }
                            title="delete"
                            size={1}
                            horizontal
                            vertical
                            rotate={180}
                            color="red"
                            onClick={() => deleteSizeProduct(item.id, sizes.large)}
                          />                      
                        </div>
                      </div> 
                    : null }
                    { item.x_large ?
                      <div className="x_large">
                        <div className="size">XL</div>
                        <div className="price">{item.price}</div>
                        <div className="amount">
                          <input type="number" value={`${item.x_large}`.replace(/^(0+)/g, '')} onChange={({target}) => { handleChangeSize(target.value > 0 ? target.value : 1, i, "x_large") }} />
                        </div>
                        <div className="subtotal">{item.price * item.x_large}</div>
                        <div className="actions" >
                          { item.x_large_same ? 
                            <Icon path={ mdiCheckCircleOutline }
                              title="update"
                              size={1}
                              horizontal
                              vertical
                              rotate={180}
                              color="green"
                              onClick={() => handleUpdateProduct(item.id, sizes.x_large, item.x_large)}
                            />
                            : null
                          }
                          <Icon path={ mdiDeleteCircle }
                            title="delete"
                            size={1}
                            horizontal
                            vertical
                            rotate={180}
                            color="red"
                            onClick={() => deleteSizeProduct(item.id, sizes.x_large)}
                          />
                        </div>
                      </div> 
                    : null }
                  </div>
                </div>
              </div>))
            }
          </div> : products.msg ? products.msg : null
        }
        <div className="view-car-total">
          <div className="titles">
            <span>Cantidad de productos:</span>
            <span>Total:</span>
          </div>
          <div className="result">
            <span>{total_added_products}</span>
            <span>{`$${total}`}</span>
          </div>
          <div className="free">{total > 100000 ? `¡Felicitaciones el envío es GRATIS!` : `Falta $${100000-total} para que el envío sea GRATIS`}</div>
          <a className="button-buy" 
            onClick = { () => { different ? updateAllProducts() : setShowModal(true) }}
          >{different ? `Actualiza el carro de compras`: "Comprar"}</a>
        </div>
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>¡Vamos a comprar!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Siguiente paso, conexión con pasarela de pago.</Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default ViewShoppingCar;