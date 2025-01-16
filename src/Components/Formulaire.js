import React from 'react'
import { Button, Table, Form, Container, Col, Row, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'
import { useAuth } from './AuthContext';
import { useLocation } from 'react-router-dom';

const Formulaire = () => {

    const location = useLocation();

    const { zone } = location.state || {};

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const newItems = [];
    const [items, setItems] = useState([]); // Liste dynamique d'items


    useEffect(() => { // Récupération DB
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3002/api/data');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des données');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => { // Mise à jour state items
        if (JSON.stringify(items) !== JSON.stringify(newItems)) {
            setItems(newItems)
        }


    }, [newItems])



    const searchByName = (name) => {
        return items.find((item) => item.name === name);
    };

    const handleClick = async (e) => {
        setLoading(true)
        setItems(items)
        setLoading(false)

        try {
            const response = await axios.post('http://localhost:3002/api/nouveaurapport', {
              date: new Date(),
              id_user: 3
            });
      
            console.log('Réponse du serveur:', response.data);
          } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
          }
          
        console.log(items)
    }


    // Ajout d'un nouvel item

    const addItem = (item) => {
        const newItem = { id: item.id, name: item.Nom, conforme: true, description: "", invervention: false }; // Création d'un item unique
        newItems.push(newItem)
    }


    const handleCheked = (event) => {
        const nom = event.target.name
        const item = searchByName(nom)
        item.conforme = event.target.checked

    }

    const handleWrite = (event) => {
        const nom = event.target.name
        const item = searchByName(nom)
        item.description = event.target.value
    }



    const handleChange = (event) => {
        const nom = event.target.name
        const item = searchByName(nom)
        item.invervention = event.target.value

    };

    function Endroit() {

        let message;

        switch (zone) {
            case 'A_I':
                message = 'Arrivée Internationale';
                break;
            case 'A_N':
                message = 'Arrivée Nationale';
                break;
            case 'D_I':
                message = 'Départ international';
                break;
            case 'D_N':
                message = 'Départ National';
                break;
            case 'H_P':
                message = 'Hall Public';
                break;
            case 'ERG':
                message = 'Enregistrement';
                break;

            default:
                message = 'Statut inconnu.';
        }
        return message;
    }


    if (loading) {
        return <p>Chargement des données...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }





    return (


        <>
            <NavbarApp></NavbarApp>

            <Container>

                <Row className='bg-light'> <h1 className='mt-4 text-primary'>Formulaire : {Endroit()} </h1> </Row>

                <Col>

                    <Row>
                        <Table striped bordered hover responsive className='mt-3 '>
                            <thead className="table-dark">
                                <tr>
                                    <th>Objets à controler</th>
                                    <th>Conforme ?	</th>
                                    <th>Observation ?  </th>
                                    <th>Intervention ?	</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    data.map((item) => (

                                        item[zone] === 1 && (

                                            <tr key={item.id}>        {addItem(item)}
                                                <td>{item.Nom}</td>
                                                <td>
                                                    <Form.Check className='custom-checkbox'
                                                        name={item.Nom}
                                                        onChange={handleCheked}
                                                    ></Form.Check>
                                                </td>
                                                <td>
                                                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème "

                                                        name={item.Nom}
                                                        onChange={handleWrite} />

                                                </td>
                                                <td>

                                                    <Form.Group>
                                                        <Form.Check
                                                            name={item.Nom}
                                                            type="radio"
                                                            label="Oui"
                                                            value={true}
                                                            onChange={handleChange}
                                                        />
                                                        <Form.Check
                                                            name={item.Nom}
                                                            type="radio"
                                                            label="Non"
                                                            value={false}
                                                            onChange={handleChange}
                                                        />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                        )
                                    ))}
                            </tbody>

                        </Table>
                    </Row>
                    <Row>
                        <Col size='lg'>
                            <Button size='lg' className='my-3' onClick={handleClick}> <h4 className='mx-3'> Soumettre le Rapport </h4> </Button>
                        </Col>
                    </Row>

                </Col>
            </Container>

        </>

    )
}

export default Formulaire