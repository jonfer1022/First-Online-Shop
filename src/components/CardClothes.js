import React, { Fragment } from 'react';
import { Card, Image } from 'react-bootstrap';
import './styles/CardClothes.scss';
// import RopaImg from '../img/img-portafolio/01-small.jpg';

const CardClothes = (data) =>{
    // console.log(RopaImg);
    // Mapeamos el arreglo data que contiene los productos y crea un Card por cada producto.
    return (
        <Fragment>
            {data.clothes.map((product) => (
            <Card className="card div-img"
            key={product.id}   //id de cada Card 
            border="light">
                <Card.Header className="textTitle">{product.product_name}</Card.Header>
                <a href={"/producto"} >
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