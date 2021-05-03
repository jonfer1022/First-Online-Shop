import React, { Fragment } from 'react';
import { Card, Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './styles/CardClothes.scss';
import Scroll from 'react-scroll';
import productsAction from '../redux/reducer/products.reducer';
// import { useHistory } from "react-router-dom";

const CardClothes = (data) =>{
    
    var scroll = Scroll.animateScroll;
    // const history = useHistory();
    const dispatch = useDispatch();

    const openSpecificProduct = (product_id) => {
        scroll.scrollTo(0); //Posiciona el scroll al comienzo de la página
        // history.push({pathname: "/clothing-detail", data:{ product_id }});
        dispatch(productsAction.saveProductId(product_id));       
    }

    // Mapeamos el arreglo data que contiene los productos y crea un Card por cada producto.
    return (
        <Fragment>
            {data.clothes.map((product) => (
            <Card className="card div-img"
            key={product.id}   //id de cada Card 
            border="light">
                <Card.Header className="textTitle">{product.product_name}</Card.Header>
                <a onClick={() => openSpecificProduct(product.id)} style={{cursor: 'pointer'}} >
                    <Image src={product.image_path}
                    className="img-responsive" rounded/>
                </a>
                <div className="div-footer">
                    {product?.description?.length > 0 ? product.description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec"}
                </div>
                {/* <Card.Footer className="card-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
                </Card.Footer> */}
            </Card>
            ))}
        </Fragment>
    )
}

export default CardClothes;