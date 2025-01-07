import React from 'react'
import { Button, Table, Form, Container, Col, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';




const checklist = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                return response.json();
            })
            .then(jsonData => {
                setData(jsonData);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Spinner animation="border" variant="primary" />;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }


    return (
        <div>
            <h2>Tableau de données</h2>
            {data.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                {Object.values(row).map((value, idx) => (
                                    <td key={idx}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <Alert variant="info">Aucune donnée disponible</Alert>
            )}
        </div>
    );

}

export default checklist