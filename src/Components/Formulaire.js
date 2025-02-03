import React from 'react'
import { Button, Table, Form, Container, Col, Row, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'
import { useAuth } from './AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Formulaire = () => {

    const { user, login, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const { zone } = location.state || {};
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const newItems = [];
    const [items, setItems] = useState([]); // Liste dynamique d'items
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loaded, setLoaded] = useState(false)
    const [report, setReport] = useState('Nouveau Rapport créé !!');


    const openModal = () => {
        addItems()
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirm = async () => {


        const heure = `${new Date()}`
        setReport('Nouveau rapport de monsieur' + user + 'envoyé à' + heure)

        let idRapport = 0

        //création d'un nouveau rapport
        try {

            const response = await axios.post('https://egsa-constantine.dz/api/nouveaurapport', {
                date: new Date(),
                id_user: user.userlig.id,
                zone: zone

            });


            idRapport = response.data.insertedRows.insertId

        } catch (error) { console.error('Erreur lors de l\'envoi des données:', error); }

        let data1 = []
        let notConforme = []

        items.map((item) => (data1.push([item.conforme, item.description, item.id, item.intervention, idRapport])))
        items.map((item) => (!item.conforme && (notConforme.push({ name: item.name, description: item.description, intervention: item.intervention, }))))



        // insertion multipe
        try {
            const response = await axios.post('https://egsa-constantine.dz/api/insererElements', { data1 });
            // alert(response.data.message); // Afficher le message de confirmation
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

        // envoie de mail
        if (notConforme.length === 0) {
            alert('Aucun problème signalé')
        } else {
            let problems = ''

            notConforme.map((element) => {
                problems = problems + element.name + ' : ' + element.description + '\n'

            })


            const emailData = {
                to: 'lekikot.souheil@egsa-constantine.dz, benhafed.billel@egsa-constantine.dz', // Remplacez par l'adresse e-mail du destinataire
                subject: 'Nouveau signalement de monsieur ' + user.userlig.nom + ' ' + user.userlig.prenom,
                text: `Problème au niveau de la zone : ${Endroit} \n ${problems} \n Redirigez vous vers  https://egsa-constantine.dz/controleurs pour consulter le rapport`
            };

            try {
                const response = await axios.post('https://egsa-constantine.dz/api/send-mail', emailData);
                alert(response.data);
            } catch (error) {
                console.error('Error sending email:', error);
            }

        }


        // setLoading(false)

        alert('Rapport Enové ! ');

        closeModal();

        navigate('/Dashboard')

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
        setLoading(true)


        const fetchData = async () => {
            try {
                const response = await axios.get(`https://egsa-constantine.dz/api/data?timestamp=${new Date().getTime()}`);
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError('Erreur lors de la récupération des données');
                setLoading(false);
            }
        };

        fetchData();




    }, []);



    const searchByName = (name) => {
        return newItems.find((item) => item.name === name);
    };



    // Ajout d'un nouvel item

    const addItem = (item, description, intervention) => {
        const newItem = { id: item.id, name: item.Nom, conforme: false, description: description, intervention: intervention }; // Création d'un item unique
        newItems.push(newItem)

    }

    const addItems = () => {

        setItems(newItems)
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
        item.intervention = event.target.value === 'true' ? event.target.checked : !event.target.checked
        item.intervention = event.target.value === 'false' ? !event.target.checked : event.target.checked

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

                <Row className='bg-light'> <h3 className='mt-4 '>Formulaire : {Endroit()} </h3> </Row>

                <Col>

                    <Row>
                        <Table striped bordered hover responsive className='mt-3 '>
                            <thead className="table-dark">
                                <tr>
                                    <th style={{ width: '15%' }}>Objets à controler</th>
                                    <th style={{ width: '15%' }}>Conforme ?	</th>
                                    <th style={{ width: '55%' }}>Observation ?  </th>
                                    <th style={{ width: '15%' }}>Intervention ?	</th>
                                </tr>
                            </thead>

                            <tbody>
                                {data.map((item) => (
                                    item[zone] === 1 && (

                                        <tr key={item.id}>


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

                                            {
                                                addItem(item, '', false)
                                            }
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
            {
                isModalOpen
                &&
                (

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
                )
            }

        </>

    )
}

export default Formulaire