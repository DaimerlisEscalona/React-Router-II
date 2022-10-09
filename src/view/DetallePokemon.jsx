import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import "../assets/css/DetallePokemon.css"

export default function DetallePokemones() {

    const [datospoke, setDatospoke] = useState([]);
    const [img, setImg] = useState("");
    const { name } = useParams();
    
    const consultarPokemon = async () => {

        const endpoint = "https://pokeapi.co/api/v2/pokemon/";
        const direccion = `${endpoint}${name}`
        const response = await fetch(direccion)
        const data = await response.json()
        const getDatos = data.stats
        setDatospoke(getDatos)
        setImg(data.sprites.other.dream_world)

      }
    
      useEffect(() => {
    
        consultarPokemon()

      }, [])

    return (
        <div className="form-cont-card">
            <div className="form-cont-img-card">
                <Card.Img className="form-img-card" variant="top" src={img.front_default} />
            </div>
            <Card.Body className="form-body" >
                <Card.Title>{name}</Card.Title>
                {datospoke.map((e) => (
                <ListGroup className="list-group-flush">
                    <ListGroup.Item key={e.name} >{e.stat.name}: {e.base_stat}</ListGroup.Item>
                </ListGroup>
                ))}
            </Card.Body>
        </div>
        

        
    );
}