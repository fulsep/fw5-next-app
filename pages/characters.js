import Image from 'next/image'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
// import { Button as BsButton } from 'react-bootstrap'
import axios from 'axios'
import { Col, Container, Row } from 'react-bootstrap'

const Character = ()=> {
    const [char, setChar] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=> {
        const {data} = await axios.get('https://rickandmortyapi.com/api/character')
        setChar(data.results)
    }
    return (
        <Container>
            <Row>
                {char.map(character=> (
                    <Col key={String(character.id)} md={3}>
                        <div>
                            <Image src={character.image} quality={50} width={100} height={100} layout='responsive' alt={character.name} />
                            <a href={character.image}>View Original Image</a>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
        )
}

export default Character