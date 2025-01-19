import React from 'react'
import { Button, Table, Form, Container, Col, Row, Alert, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'
import { useAuth } from './AuthContext';
import { useLocation } from 'react-router-dom';




function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Récupérer les données depuis l'API
  useEffect(() => {
    axios
      .get("http://localhost:3002/api/rapports")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Num</th>
              <th>Date</th>
              <th>Heure</th>
              <th>َAuteur</th>
              <th>Zone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id}>
                <td>{item.Num}</td>
                <td>{item.date.split("T")[0]}</td>
                <td>{item.date.split("T")[1].split(".")[0].slice(0,5)}</td>
                <td>{item.nom} {item.prenom}</td>
                <td>{item.zone}</td>
                <td>
                  <Container>
                    <Row>
                  <Col>
                  <Button variant="primary" className='btn-dashboard' onClick={() => alert(`ID: ${item.Num}`)}>
                    Consulter
                  </Button>
                  </Col>
                  <Col>
                  <Button variant="dark" className='btn-dashboard' onClick={() => alert(`ID: ${item.Num}`)}>
                    Marquer comme lu
                  </Button>
                  </Col>
                  <Col>
                  <Button variant="danger" className='btn-dashboard' onClick={() => alert(`ID: ${item.Num}`)}>
                    Supprimer
                  </Button>
                  </Col>
               
                  </Row>
                  </Container>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}


export default Dashboard;