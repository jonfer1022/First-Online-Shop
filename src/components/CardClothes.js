import React, { Fragment } from 'react';
import { Card, Image } from 'react-bootstrap';
import './styles/CardClothes.scss';
import { useHistory } from "react-router-dom";
import Scroll from 'react-scroll';

const CardClothes = (data) =>{
    
    var scroll = Scroll.animateScroll;
    const history = useHistory();

    const openProductsWith = (gender = "", category = "") => {
        scroll.scrollTo(0); //Posiciona el scroll al comienzo de la página
        history.push({pathname: "/products", state:{
            gender,
            category,
            }
        });
    }

    // Mapeamos el arreglo data que contiene los productos y crea un Card por cada producto.
    return (
        <Fragment>
            {data.clothes.map((product) => (
            <Card className="card div-img"
            key={product.id}   //id de cada Card 
            border="light">
                <Card.Header className="textTitle">{product.product_name}</Card.Header>
                <a onClick={() => openProductsWith()} style={{cursor: 'pointer'}} >
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