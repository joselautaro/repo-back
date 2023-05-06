import React from 'react';
import './item.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import { ItemDetailContainer } from '../ItemDetail/ItemDetail';


// Clase de routing y navegacion, pasamos el category como prop y lo renderizamos en la card
export const Item = ({ id, name, description, image, price, category }) => {
  return (
    <div className="item">

      <>
        {/* Mapeamos los productos */}

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{description}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <Card.Text>$ {price}</Card.Text>
            <Card.Text>Categoria: {category}</Card.Text>

            <Link to={`/detail/${id}`}>
              <Button>Ver más detalles</Button>
            </Link>
          </Card.Body>
        </Card>
      </>


    </div>
  )
}
