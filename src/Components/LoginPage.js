import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login, logout } = useAuth();
  const navigate = useNavigate(); // Initialise le hook de navigation


  const handleForgot = (e) => {
    return <Navigate to="/Enregistrement" />

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation simple
    if (!username || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    if (password === '123') {
      alert(`Connexion réussie pour : ${username}`);
      login(username)
      console.log(user)

    } else {
      setError('Mot de passe Incorrect');
      return;

    }

    // Simulation de connexion
    setError('');

    navigate("/welcome")

    // alert(`Connexion réussie pour : ${username}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <h3 className="text-center mb-4">Connexion</h3>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>

                <Form.Group>
                  <Form.Label>Contrôleur</Form.Label>

                  <Form.Control as="select" onChange={(e) => { setUsername(e.target.value) }} className="mb-3" value={username}
                  >
                    <option value="" disabled>Choisissez un contrôleur</option>
                    <option>RACHEDI Salah eddine</option>
                    <option>LEFTAHA Nadjib </option>
                    <option>RAS EL AIN Mohamed el Amine</option>
                    <option>BOUDJADA Zine el Abidine</option>
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
