import React from 'react'
import { Button, Table, Form, Container, Col, Row} from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'


const Enregistrement = () => {

  const [eclairage, setEclairage] = useState({ conforme: true, observation: '', intervention: false })
  const [box, setBox] = useState({ conforme: true, observation: '', intervention: false })
  const [tapisBagage, setTapisBagage] = useState({ conforme: true, observation: '', intervention: false })
  const [teleaffichage, setTeleaffichage] = useState({ conforme: true, observation: '', intervention: false })
  const [sol, setSol] = useState({ conforme: true, observation: '', intervention: false })
  const [scanner, setScanner] = useState({ conforme: true, observation: '', intervention: false })
  const [climatisation, setClimatisation] = useState({ conforme: true, observation: '', intervention: false })

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
      <Row className='bg-light'> <h1 className='mt-4 text-primary'>Enregistrement </h1> </Row>

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
                      checked={eclairage.intervention === true ? true : false}
                      onChange={() => { setEclairage({ ...eclairage, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervEclairage"
                      label="Non"
                      checked={eclairage.intervention === false ? true : false}
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

              {/* Box d'enregistrement */}

              <tr>
                <td>
                  <h5>
                    Box
                  </h5>
                </td>
                <td>
                  <Form.Check className='custom-checkbox' checked={box.conforme} onChange={(e) => {
                    setBox({ ...box, conforme: e.target.checked })
                    console.log(box.conforme)
                  }}></Form.Check>
                </td>
                <td>
                  <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setBox({ ...box, observation: e.target.value })} />
                </td>
                <td>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      name="IntervBox"
                      label="Oui"
                      checked={box.intervention === true ? true : false}
                      onChange={() => { setBox({ ...box, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervBox"
                      label="Non"
                      checked={box.intervention === false ? true : false}
                      onChange={() => { setBox({ ...box, intervention: false }) }}
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
                      checked={tapisBagage.intervention === true ? true : false}
                      onChange={() => { setTapisBagage({ ...tapisBagage, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervTapisBagage"
                      label="Non"
                      checked={tapisBagage.intervention === false ? true : false}
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
                      checked={teleaffichage.intervention === true ? true : false}
                      onChange={() => { setTeleaffichage({ ...teleaffichage, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervTeleaffichage"
                      label="Non"
                      checked={teleaffichage.intervention === false ? true : false}
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
                      checked={sol.intervention === true ? true : false}
                      onChange={() => { setSol({ ...sol, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervSol"
                      label="Non"
                      checked={sol.intervention === false ? true : false}
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
                      checked={scanner.intervention === true ? true : false}
                      onChange={() => { setScanner({ ...scanner, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervScanner"
                      label="Non"
                      checked={scanner.intervention === false ? true : false}
                      onChange={() => { setScanner({ ...scanner, intervention: false }) }}
                    />
                  </Form.Group>
                </td>
              </tr>

            </tbody>
          </Table>
          <Button className='btn-primary btn-lg' >Soumettre le rapport</Button>
        </Col>
      </Container>

    </>



  )
}

export default Enregistrement