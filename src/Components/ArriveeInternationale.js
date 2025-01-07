import React from 'react'
import { Button, Table, Form, Container, Col, Row, Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'
import { useAuth } from './AuthContext';


const ArriveeInternationale = () => {
  const [eclairage, setEclairage] = useState({ conforme: true, observation: '', intervention: false })
  const [climatisation, setClimatisation] = useState({ conforme: true, observation: '', intervention: false })
  const [sonorisation, setSonorisation] = useState({ conforme: true, observation: '', intervention: false })
  const [tapisBagage, setTapisBagage] = useState({ conforme: true, observation: '', intervention: false })
  const [teleaffichage, setTeleaffichage] = useState({ conforme: true, observation: '', intervention: false })
  const [sol, setSol] = useState({ conforme: true, observation: '', intervention: false })
  const [scanner, setScanner] = useState({ conforme: true, observation: '', intervention: false })
  const [escalatorInternationale, setEscalatorInternationale] = useState({ conforme: true, observation: '', intervention: false })
  const [toilettes, setToilettes] = useState({ conforme: true, observation: '', intervention: false })
  const { user, login, logout } = useAuth();
  const [alerts, setAlerts] = useState(['']);
  const alerts2 = [''];

  const addAlert = (alert) => {
    alerts2.push(alert)
    console.log(alerts2)

  }



  const generateReport = () => {

    !eclairage.conforme && (addAlert(`Catégorie : Éclairage         Détail ${eclairage.observation}          Inervention : ${eclairage.intervention}`))
    !climatisation.conforme && (addAlert(`Catégorie : Climatisation         Détail ${climatisation.observation}          Inervention : ${climatisation.intervention}`))
    !sonorisation.conforme && (addAlert(`Catégorie : Sonorisaton         Détail ${sonorisation.observation}          Inervention : ${sonorisation.intervention}`))
    !tapisBagage.conforme && (addAlert(`Catégorie : tapisBagage         Détail ${tapisBagage.observation}          Inervention : ${tapisBagage.intervention}`))
    !teleaffichage.conforme && (addAlert(`Catégorie : Téléaffichage         Détail ${teleaffichage.observation}          Inervention : ${teleaffichage.intervention}`))
    !sol.conforme && (addAlert(`Catégorie : Sol         Détail ${sol.observation}          Inervention : ${sol.intervention}`))
    !scanner.conforme && (addAlert(`Catégorie : Scanner         Détail ${scanner.observation}          Inervention : ${scanner.intervention}`))
    !escalatorInternationale.conforme && (addAlert(`Catégorie : Escalator         Détail ${escalatorInternationale.observation}          Inervention : ${escalatorInternationale.intervention}`))

    setAlerts(alerts2)

    setEmailData(() => ({
      subject: `Zone Arrivée internationale : Signalement de monsieur : ${user.username}`,
      body:

        `  
          ${alerts.map((alert, id) => (
          alert + ' \n'))}
        `
    }))

  }

  useEffect(() => {


    generateReport()

  }, [eclairage, climatisation, sonorisation, tapisBagage, teleaffichage, sol, scanner, escalatorInternationale])




  const [emailData, setEmailData] = useState({});

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-email', emailData);
      alert(response.data.message);
    }

    catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };


  const handleClick = (e) => {
    e.preventDefault();

    // setEmailData(() => ({
    //   subject: `Rapport de monsieur :${user.username}`,
    //   body: `éclairage conforme: ${eclairage.conforme ? 'Oui' : 'Non'}`
    // }))

    const confirmation = window.confirm('Soumettre le Rapport ?')

    generateReport();


    confirmation ?  sendEmail()   :   console.log(emailData)

  }


  return (


    <>
      <NavbarApp></NavbarApp>

      <Container>

        <Row className='bg-light'> <h1 className='mt-4 text-primary'>Arrivée Internationale </h1> </Row>

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

                {/* Eclairage */}

                <tr>
                  <td>
                    <h5>
                      Éclairage
                    </h5>
                  </td>
                  <td>
                    <Form.Check className='custom-checkbox' checked={eclairage.conforme} onChange={(e) => {
                      setEclairage({ ...eclairage, conforme: e.target.checked })
                      addAlert("Eclairage",)
                    }}></Form.Check>
                  </td>

                  <td>
                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setEclairage({ ...eclairage, observation: e.target.value })} />
                  </td>

                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        name="IntervEclairage"
                        label="Oui"
                        checked={true === eclairage.intervention}

                        onChange={() => { setEclairage({ ...eclairage, intervention: true }) }}
                      />

                      <Form.Check
                        type="radio"
                        name="IntervEclairage"
                        label="Non"
                        checked={false === eclairage.intervention}
                        onChange={() => { setEclairage({ ...eclairage, intervention: false }) }}
                      />
                    </Form.Group>
                  </td>
                </tr>

                {/* Climatisation */}

                <tr>
                  <td>
                    <h5>
                      Climatisation
                    </h5>
                  </td>
                  <td>
                    <Form.Check className='custom-checkbox' checked={climatisation.conforme} onChange={(e) => {
                      setClimatisation({ ...climatisation, conforme: e.target.checked })
                    }}></Form.Check>
                  </td>
                  <td>
                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setClimatisation({ ...climatisation, observation: e.target.value })} />
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        name="IntervClimatisation"
                        label="Oui"
                        checked={true === climatisation.intervention}

                        onChange={() => { setClimatisation({ ...climatisation, intervention: true }) }}
                      />
                      <Form.Check
                        type="radio"
                        name="IntervClimatisation"
                        label="Non"
                        checked={false === climatisation.intervention}

                        onChange={() => { setClimatisation({ ...climatisation, intervention: false }) }}
                      />
                    </Form.Group>
                  </td>
                </tr>

                {/* Sonorisation */}

                <tr>
                  <td>
                    <h5>
                      Sonorisation
                    </h5>
                  </td>
                  <td>
                    <Form.Check className='custom-checkbox' checked={sonorisation.conforme} onChange={(e) => {
                      setSonorisation({ ...sonorisation, conforme: e.target.checked })
                    }}></Form.Check>
                  </td>
                  <td>
                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setSonorisation({ ...sonorisation, observation: e.target.value })} />
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        name="IntervBox"
                        label="Oui"
                        checked={true === sonorisation.intervention}

                        onChange={() => { setSonorisation({ ...sonorisation, intervention: true }) }}
                      />
                      <Form.Check
                        type="radio"
                        name="IntervBox"
                        label="Non"
                        checked={false === sonorisation.intervention}

                        onChange={() => { setSonorisation({ ...sonorisation, intervention: false }) }}
                      />
                    </Form.Group>
                  </td>
                </tr>

                {/* Tapis Bagages */}

                <tr>
                  <td>
                    <h5>
                      Tapis Bagages
                    </h5>
                  </td>

                  <td>
                    <Form.Check className='custom-checkbox' checked={tapisBagage.conforme} onChange={(e) => {
                      setTapisBagage({ ...tapisBagage, conforme: e.target.checked })
                    }}></Form.Check>
                  </td>

                  <td>
                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setTapisBagage({ ...tapisBagage, observation: e.target.value })} />
                  </td>

                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        name="IntervTapisBagage"
                        label="Oui"
                        checked={true === tapisBagage.intervention}

                        onChange={() => { setTapisBagage({ ...tapisBagage, intervention: true }) }}
                      />
                      <Form.Check
                        type="radio"
                        name="IntervTapisBagage"
                        label="Non"
                        checked={false === tapisBagage.intervention}
                        onChange={() => { setTapisBagage({ ...tapisBagage, intervention: false }) }}
                      />
                    </Form.Group>
                  </td>

                </tr>

                {/* Téléaffichage */}

                <tr>
                  <td>
                    <h5>
                      Téléaffichage
                    </h5>
                  </td>
                  <td>
                    <Form.Check className='custom-checkbox' checked={teleaffichage.conforme} onChange={(e) => {
                      setTeleaffichage({ ...teleaffichage, conforme: e.target.checked })
                    }}></Form.Check>
                  </td>
                  <td>
                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setTeleaffichage({ ...teleaffichage, observation: e.target.value })} />
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        name="IntervTeleaffichage"
                        label="Oui"
                        checked={true === teleaffichage.intervention}

                        onChange={() => { setTeleaffichage({ ...teleaffichage, intervention: true }) }}
                      />
                      <Form.Check
                        type="radio"
                        name="IntervTeleaffichage"
                        label="Non"
                        checked={false === teleaffichage.intervention}

                        onChange={() => { setTeleaffichage({ ...teleaffichage, intervention: false }) }}
                      />
                    </Form.Group>
                  </td>
                </tr>

                {/* Sol */}

                <tr>
                  <td>
                    <h5>
                      Sol
                    </h5>
                  </td>
                  <td>
                    <Form.Check className='custom-checkbox' checked={sol.conforme} onChange={(e) => {
                      setSol({ ...sol, conforme: e.target.checked })
                    }}></Form.Check>
                  </td>
                  <td>
                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setSol({ ...sol, observation: e.target.value })} />
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        name="IntervSol"
                        label="Oui"
                        checked={true === sol.intervention}

                        onChange={() => { setSol({ ...sol, intervention: true }) }}
                      />
                      <Form.Check
                        type="radio"
                        name="IntervSol"
                        label="Non"
                        checked={false === sol.intervention}

                        onChange={() => { setSol({ ...sol, intervention: false }) }}
                      />
                    </Form.Group>
                  </td>
                </tr>

                {/* Scanner */}

                <tr>
                  <td>
                    <h5>
                      Scanners
                    </h5>
                  </td>
                  <td>
                    <Form.Check className='custom-checkbox' checked={scanner.conforme} onChange={(e) => {
                      setScanner({ ...scanner, conforme: e.target.checked })
                    }}></Form.Check>
                  </td>
                  <td>
                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setScanner({ ...scanner, observation: e.target.value })} />
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        name="IntervScanner"
                        label="Oui"
                        checked={true === scanner.intervention}
                        onChange={() => { setScanner({ ...scanner, intervention: true }) }}
                      />
                      <Form.Check
                        type="radio"
                        name="IntervScanner"
                        label="Non"
                        checked={false === scanner.intervention}
                        onChange={() => { setScanner({ ...scanner, intervention: false }) }}
                      />
                    </Form.Group>
                  </td>
                </tr>

                {/* Escalator */}

                <tr>
                  <td>
                    <h5>
                      Escalator
                    </h5>
                  </td>
                  <td>
                    <Form.Check className='custom-checkbox' checked={escalatorInternationale.conforme} onChange={(e) => {
                      setEscalatorInternationale({ ...escalatorInternationale, conforme: e.target.checked })
                    }}></Form.Check>
                  </td>
                  <td>
                    <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setEscalatorInternationale({ ...escalatorInternationale, observation: e.target.value })} />
                  </td>
                  <td>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        name="IntervEscalatorNationale"
                        label="Oui"
                        checked={true === escalatorInternationale.intervention}
                        onChange={() => { setEscalatorInternationale({ ...escalatorInternationale, intervention: true }) }}
                      />
                      <Form.Check
                        type="radio"
                        name="IntervEscalatorNationale"
                        label="Non"
                        checked={false === escalatorInternationale.intervention}
                        onChange={() => { setEscalatorInternationale({ ...escalatorInternationale, intervention: false }) }}
                      />
                    </Form.Group>

                  </td>
                </tr>

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

export default ArriveeInternationale