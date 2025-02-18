import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';
import logo from '../Assets/EGSA LOGO.png'

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login, logout } = useAuth();
  const navigate = useNavigate(); // Initialise le hook de navigation
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => { // Récupération DB

    const fetchData = async () => {
      try {
        const response = await axios.get(`https://egsa-constantine.dz/api/users?timestamp=${new Date().getTime()}`);
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

    return data.find((user) => user.username === name);
  };

  const getPassword = (name) => {
    const user = searchByName(name)
    return user.password
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (!username || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    if (password === getPassword(username)) {
      const userlig = searchByName(username)
      login(userlig, username)

    } else {
      setError('Mot de passe Incorrect');
      return;

    }
    // Simulation de connexion
    setError('');

    navigate("/welcome")

  };

  if (loading) {
    return <>
      <Spinner animation="border" />
      <p>Chargement des données...</p>
    </>

  }


  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <div className="logo-container">
              <img
                src={logo}
                alt="Company Logo"
                className="logo"
              />
            </div>
            <Card.Body>
              <h3 className="text-center mb-4">Connexion</h3>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>

                <Form.Group>
                  <Form.Label>Contrôleur</Form.Label>

                  <Form.Control as="select" onChange={(e) => {
                    setUsername(e.target.value)
                  }} className="mb-3" value={username}
                  >
                    <option value="" disabled>Choisissez un contrôleur</option>

                    {data.map((user) => (
                      <option>{user.username}</option>
                    ))}

                  </Form.Control>
                </Form.Group>
                {/* <Form.Group controlId="formEmail" className="mb-3">
                  
                  <Form.Label>Adresse e-mail</Form.Label>
                  
                  <Form.Control
                    type="email"
                    placeholder="Entrez votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group> */}
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Se connecter
                </Button>

              </Form>
              <div className="text-center mt-3">
                <Link to="/Login">Mot de passe oublié ?</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
