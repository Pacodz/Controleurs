import React from 'react'
import { Button, Table, Form, Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'


const ArriveeNationale = () => {
  const [eclairage, setEclairage] = useState({ conforme: true, observation: '', intervention: false })
  const [tapisBagage, setTapisBagage] = useState({ conforme: true, observation: '', intervention: false })
  const [teleaffichage, setTeleaffichage] = useState({ conforme: true, observation: '', intervention: false })
  const [sol, setSol] = useState({ conforme: true, observation: '', intervention: false })
  const [scanner, setScanner] = useState({ conforme: true, observation: '', intervention: false })
  const [climatisation, setClimatisation] = useState({ conforme: true, observation: '', intervention: false })
  const [escalatorNationale, setEscalatorNationale] = useState({ conforme: true, observation: '', intervention: false })

  const [emailData, setEmailData] = useState({
    subject: 'Test',
    body: 'Salut Salut'
  });

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-email', emailData);
      alert(response.data.message);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email');
    }
  };


  return (


    <>
      <NavbarApp></NavbarApp>

      <Row className='bg-light'> <h1 className='mt-4 text-primary'>Arrivée Nationale </h1> </Row>

      <Container>

        <Col>
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
                    console.log(eclairage.conforme)
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
                    console.log(climatisation.conforme)
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


              {/* Escalator National */}

              <tr>
                <td>
                  <h5>
                    Escalator
                  </h5>
                </td>
                <td>
                  <Form.Check className='custom-checkbox' checked={escalatorNationale.conforme} onChange={(e) => {
                    setEscalatorNationale({ ...escalatorNationale, conforme: e.target.checked })
                    console.log(escalatorNationale.conforme)
                  }}></Form.Check>
                </td>
                <td>
                  <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setEscalatorNationale({ ...escalatorNationale, observation: e.target.value })} />
                </td>
                <td>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      name="IntervEscalatorNationale"
                      label="Oui"
                      checked={true === escalatorNationale.intervention}
                      onChange={() => { setEscalatorNationale({ ...escalatorNationale, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervEscalatorNationale"
                      label="Non"
                      checked={false === escalatorNationale.intervention}
                      onChange={() => { setEscalatorNationale({ ...escalatorNationale, intervention: false }) }}
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
                    console.log(tapisBagage.conforme)
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
                    console.log(teleaffichage.conforme)
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
                    console.log(sol.conforme)
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
                    console.log(scanner.conforme)
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

            </tbody>
          </Table>
        </Col>
      </Container>

    </>



  )
}

export default ArriveeNationale