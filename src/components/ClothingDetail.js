import './styles/ClothingDetail.scss';
import React, {Fragment, useState, useRef, useLayoutEffect, useEffect} from 'react';
import Carousel from "react-elastic-carousel";
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import productsAction from '../redux/reducer/products.reducer';
import { useDispatch , useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

const ClothingDetail = (props) => {
  
  props.action("Products"); //clothing-detail
  
  const dispatch = useDispatch();
  const location = useLocation();
  const product = useSelector(store => store.products.infoProduct || {});
  const carouselRef = useRef(null);
  const [amount, setAmount] = useState(1);
  const product_id = useSelector(store => store.products.product_id ? store.products.product_id : location.state.product_id);
  const [selectImg, setSelectImg] = useState(0);
  const [size, setSize] = useState(location.state.size_id ? location.state.size_id : 0);
  let sizes_arr = [], id_sizes_arr = [];  
  let buttonSize = []
  
  // UseLayoutEffect que funciona antes de del renderizado del componente
  useLayoutEffect( ()=>{
    dispatch(productsAction.getProductById(product_id));
  },[dispatch]);

  const setItem = (item) => carouselRef.current.goTo(item)
  
  if(product?.length > 0) { 
    id_sizes_arr = product[0].id_sizes.split(',');
    sizes_arr = product[0].sizes.split(',');
  }
  
  for (let i = 0; i < sizes_arr.length; i++) {
    switch (sizes_arr[i]) {
      case "X-Small": sizes_arr[i] = "XS"; break;
      case "Small": sizes_arr[i] = "S"; break;
      case "Middle": sizes_arr[i] = "M"; break;
      case "Large": sizes_arr[i] = "L"; break;
      case "X-Large": sizes_arr[i] = "XL"; break;
      default: break;
    } 
  };

  //effect usado para escoger el tamaño del producto escogido.
  useEffect(() =>{
    buttonSize = id_sizes_arr.map( reg => document.getElementById(`buttonSize${reg}`));
    if(buttonSize.length ? buttonSize[0]: false) {
      for (let i = 0; i < id_sizes_arr.length; i++) {
        if(id_sizes_arr[i] === size) {
          buttonSize[i].style.backgroundColor = "#18a10b"; 
          buttonSize[i].style.color = "white"; 
        }
        else {
          buttonSize[i].style.backgroundColor = "#DCDCDC"; 
          buttonSize[i].style.color = "rgb(100, 100, 100)"; 
        }
      }
    };
  },[product, size])

  return(
    <Fragment>
      <div className="detail-main">
        <div id="detail-images">
          { product?.length > 0 ? 
            <div className="img-min">
              <div>
                <Image onClick={() => setItem(0) } style={selectImg === 0 ? {border: "solid"}: {}} className="img-responsive"src={product[0].image_path}/>
              </div>
              <div>
                <Image onClick={() => setItem(1) } style={selectImg === 1 ? {border: "solid"}: {}} className="img-responsive"src={product[1].image_path}/>
              </div>
              <div>
                <Image onClick={() => setItem(2) } style={selectImg === 2 ? {border: "solid"}: {}} className="img-responsive"src={product[2].image_path}/>
              </div>
            </div>
            : <div>¡Data aún no disponible!</div>
          }
          { product?.length > 0 ? 
            <Carousel
              className="carousel" 
              ref={carouselRef} 
              onChange={(item,page) => setSelectImg(item.index)}
            >
              {product.map(reg =>
                <Image className="img-responsive-carousel"src={reg.image_path}/>
              )}
            </Carousel>
            : <div>¡Data aún no disponible!</div>
          }
        </div>
        { product?.length > 0 ? 
          <div id="detail-features">
            <div className="title">
              {product[0].product_name}
            </div>
            <div className="price">
              PRECIO: ${product[0].price}
            </div>
            <div className="discount">
              DESCUENTO: {product[0].percentage !== 0 ? product[0].percentage : "-"}%
            </div>
            <div className="size">
              TALLA: {sizes_arr.map((reg,i) =>
                <button id={`buttonSize${id_sizes_arr[i]}`} onClick={() => setSize(id_sizes_arr[i])}>{reg}</button>
              )}
            </div>
            <div className="amount">
              <span>CANTIDAD: </span>
              <div className="boton-cant">
                <button disabled={amount<=1} onClick={() => setAmount(amount-1)}>-</button>
                <input type="number" min="1" max="10" value={amount} onChange={(e) => setAmount(e.target.value >= 10 ? 10: e.target.value <=1 ? 1: 0)}></input>
                <button disabled={amount>=10} onClick={() => setAmount(amount+1)}>+</button>
              </div>
            </div>
            <div className="description">
              <span>DESCRIPCIÓN DEL PRODUCTO:</span>
              <p>{product[0].description}</p>
            </div>
            <div className="button">
              <OverlayTrigger
                placement = "left"
                delay={{ show: 100, hide: 300 }}
                overlay={ size === 0 ? <Tooltip>¡No olvides seleccionar una talla!</Tooltip> : <div></div>}
              >
                <a className={size === 0 ? "isDisabled": "button-buy"}>Agregar al carrito</a>
              </OverlayTrigger>
            </div>
            <div className="change">
              <span>CAMBIOS Y GARANTIAS:</span>
              <p>
                Si el cambio es para un ítem que NO es del SALE te enviamos sin costo, de lo contrario tu pagas el envio a tu casa.
                Cambios: Tienes 60 días desde que llega tu ropa para hacer el cambio.
                Garantías: Tienes 90 días desde que llega tu ropa para hacer la garantía.
                El cambio o devolución no aplica si la ropa no está nueva o si es un Body o Vestido de baño por ser ropa interior.
              </p>
            </div>
          </div>  
          : <div>¡Data aún no disponible!</div>
        }
      </div>
    </Fragment>
  )
}

export default ClothingDetail;