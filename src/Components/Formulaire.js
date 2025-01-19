import React from 'react'
import { Button, Table, Form, Container, Col, Row, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'
import { useAuth } from './AuthContext';
import { useLocation } from 'react-router-dom';

const Formulaire = () => {

    const { user, login, logout } = useAuth();


    const location = useLocation();

    const { zone } = location.state || {};

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const newItems = [];
    const [items, setItems] = useState([]); // Liste dynamique d'items

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = () => {
        closeModal();
        alert('Action confirmée !');
        handleClick();
        // Vous pouvez ajouter ici le code pour effectuer l'action
    };

    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        },
        content: {
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            width: '90%',
        },
        buttons: {
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
        },
        confirmButton: {
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
        cancelButton: {
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };
    



    useEffect(() => { // Récupération DB
        console.log(user.userlig.id)

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

    const handleClick = async () => {
        let idRapport = 0

        setLoading(true)
        setItems(items)
        //création d'un nouveau rapport
        try {
            const response = await axios.post('http://localhost:3002/api/nouveaurapport', {
                date: new Date(),
                id_user: user.userlig.id,
                zone: zone
            });

            console.log('Réponse du serveur:', response.data);

            idRapport = response.data.data.insertId

        } catch (error) {
            console.error('Erreur lors de l\'envoi des données:', error);
        }

      

        let data1 = []

        items.map((item) => (data1.push([ item.conforme ,  item.description, item.id,  item.intervention, idRapport])))


        try {
            const response = await axios.post('http://localhost:3002/api/insererElements', { data1 });
            alert(response.data.message); // Afficher le message de confirmation
        } catch (error) {
            if (error.response) {
                // Erreur provenant du serveur
                console.error('Erreur du serveur :', error.response.data.message);
                alert('Erreur : ' + error.response.data.message);
            } else if (error.request) {
                // Pas de réponse du serveur
                console.error('Pas de réponse du serveur :', error.request);
                alert('Erreur réseau : pas de réponse du serveur');
            } else {
                // Erreur lors de la configuration de la requête
                console.error('Erreur dans la requête :', error.message);
                alert('Une erreur est survenue : ' + error.message);
            }
        }

        setLoading(false)



    }


    // Ajout d'un nouvel item

    const addItem = (item) => {
        const newItem = { id: item.id, name: item.Nom, conforme: true, description: "", intervention: false }; // Création d'un item unique
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
        item.intervention = event.target.value

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
                            <Button size='lg' className='my-3' onClick={openModal}> <h4 className='mx-3'> Soumettre le Rapport </h4> </Button>
                        </Col>


                    </Row>

                </Col>
            </Container>

               {/* Modal */}
               {isModalOpen && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.content}>
                        <h2>Confirmation</h2>
                        <p>Êtes-vous sûr de vouloir soumettre votre rapport ?</p>
                        <div style={modalStyles.buttons}>
                            <button onClick={handleConfirm} style={modalStyles.confirmButton}>Oui</button>
                            <button onClick={closeModal} style={modalStyles.cancelButton}>Annuler</button>
                        </div>
                    </div>
                </div>
            )}

        </>

    )
}

export default Formulaire