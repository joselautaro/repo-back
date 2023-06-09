import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({id, name, description, image, price, category, stock }) => {

  const navigate = useNavigate()

  const volverHaciaAtras = () => {
    navigate(-1)
  }

  const { addToCart } = useContext(CartContext)

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () => {
    const newItem = {
      id,
      name,
      description,
      image,
      price,
      category,
      counter
    }
    // console.log(newItem)
    addToCart(newItem)
  }


  return (
    <div className="item">
      <>
        {/* Mapeamos los productos */}
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{description}</Card.Title>
            <Card.Text>{name}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <Card.Text>Categoria: {category}</Card.Text>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis eaque minima itaque, delectus iste illo? Vero dolorem accusantium debitis obcaecati recusandae, optio quibusdam commodi ipsum quisquam nobis repudiandae architecto!</p>
            <ItemCount max={stock} modify={setCounter} cantidad={counter} />
            <Button onClick={sumarAlCarrito}>Agregar al carrito</Button>
            {/* Agregamos boton de ir al carrito */}
            <Link to='/cart' className='btn btn-success'>
              Terminar compra
            </Link>
          </Card.Body>
          <button className='btn btn-success' onClick={volverHaciaAtras}>⬅ Ver otros productos</button>
        </Card>
      </>
    </div>
  )
}
