import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, Form, Container, Col, Row, Alert } from 'react-bootstrap';

const Formtest = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const newItems = [];

    const [items, setItems] = useState([]); // Liste dynamique d'items
    const [newItemName, setNewItemName] = useState(""); // Nom pour un nouvel item


    useEffect(() => {
        if (JSON.stringify(items) !== JSON.stringify(newItems)) { setItems(newItems) }
        console.log(items)

        return () => {


        }
    }, [newItems])


    // Ajout d'un nouvel item

    const addItem = (item) => {
        const newItem = { id: item.id, name: item.Nom, conforme: true }; // Création d'un item unique
        newItems.push(newItem)
    }

    const handleAddItem = () => {
        if (newItemName.trim() === "") return;
        const newItem = { id: Date.now(), name: newItemName }; // Création d'un item unique
        setItems([...items, newItem]); // Ajout à la liste
        setNewItemName(""); // Réinitialisation du champ
    };

    // Suppression d'un item
    const handleDeleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };


    const handleChange = (event) => {


        console.log("Intervention " + event.target.name + " : " + event.target.value)
    };


    const handleWrite = (event) => {


        console.log("Description " + event.target.name + " : " + event.target.value)
    }

    const handleCheked = (event) => {
        console.log("Conformité " + event.target.name + " : " + event.target.value)
    }


    useEffect(() => {
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

    if (loading) {
        return <p>Chargement des données...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {/* Remplacez les en-têtes par les colonnes de votre table */}
                        <th>ID</th>
                        <th>Nom</th>

                        <th>H_P</th>
                        <th>ERG</th>
                        <th>D_I</th>
                        <th>D_N</th>
                        <th>A_I</th>
                        <th>A_N</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}> {/* Remplacez 'id' par la clé primaire de votre table */}
                            <td>{item.id}</td>
                            <td>{item.Nom}</td>
                            <td>{item.H_P}</td>
                            <td>{item.ERG}</td>
                            <td>{item.D_I}</td>
                            <td>{item.D_N}</td>
                            <td>{item.A_I}</td>
                            <td>{item.A_N}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

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

                            item.A_I === 1 && (




                                <tr key={item.id}>

                                    {addItem(item)}

                                    <td>{item.Nom}</td>
                                    <td>
                                        <Form.Check className='custom-checkbox'
                                            name={item.Nom + ' Conforme'}
                                            onChange={handleCheked}
                                        ></Form.Check>
                                    </td>
                                    <td>
                                        <Form.Control as='textarea' rows={3} placeholder="Décrire le problème "
                                            name={item.Nom + ' Description'}
                                            onChange={handleWrite} />

                                    </td>
                                    <td>

                                        <Form.Group>
                                            <Form.Check
                                                name={item.Nom + ' Intervention'}
                                                type="radio"
                                                label="Oui"
                                                value="Oui"
                                                onChange={handleChange}

                                            />

                                            <Form.Check
                                                name={item.Nom + ' Intervention'}
                                                type="radio"
                                                label="Non"
                                                value="Non"
                                                onChange={handleChange}

                                            />
                                        </Form.Group>
                                    </td>

                                </tr>
                            )
                        ))}

                </tbody>

            </Table>
        </>

    );
};

export default Formtest;
