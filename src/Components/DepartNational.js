import React from 'react'
import { Button, Table, Form, Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'


const DepartNational = () => {
  const [eclairage, setEclairage] = useState({ conforme: true, observation: '', intervention: false })
  const [box, setBox] = useState({ conforme: true, observation: '', intervention: false })
  const [tapisBagage, setTapisBagage] = useState({ conforme: true, observation: '', intervention: false })
  const [teleaffichage, setTeleaffichage] = useState({ conforme: true, observation: '', intervention: false })
  const [sol, setSol] = useState({ conforme: true, observation: '', intervention: false })
  const [scanner, setScanner] = useState({ conforme: true, observation: '', intervention: false })
  const [climatisation, setClimatisation] = useState({ conforme: true, observation: '', intervention: false })


  const [toilettesH, setToilettesH] = useState({ conforme: true, observation: '', intervention: false })
  const [toilettesF, setToilettesF] = useState({ conforme: true, observation: '', intervention: false })

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
      <Row className='bg-light'> <h1 className='mt-4 text-primary'>Départ National </h1> </Row>

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
                      onChange={() => { setEclairage({ ...eclairage, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervEclairage"
                      label="Non"
                      checked
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


              {/* Box d'embarquement */}

              <tr>
                <td>
                  <h5>
                    Box d'embarquement
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
                      checked={true === box.intervention}

                      onChange={() => { setBox({ ...box, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervBox"
                      label="Non"
                      checked={false === box.intervention}

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

              {/* ToilettesH */}

              <tr>
                <td>
                  <h5>
                    Toilettes Pour Hommes
                  </h5>
                </td>
                <td>
                  <Form.Check className='custom-checkbox' checked={toilettesH.conforme} onChange={(e) => {
                    setToilettesH({ ...toilettesH, conforme: e.target.checked })
                    console.log(toilettesH.conforme)
                  }}></Form.Check>
                </td>
                <td>
                  <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setToilettesH({ ...toilettesH, observation: e.target.value })} />
                </td>
                <td>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      name="IntervToilettesH"
                      label="Oui"
                      checked={toilettesH.intervention === true}
                      onChange={() => { setToilettesH({ ...toilettesH, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervToilettesH"
                      label="Non"
                      checked={toilettesH.intervention === false}
                      onChange={() => { setToilettesH({ ...toilettesH, intervention: false }) }}
                    />
                  </Form.Group>
                </td>
              </tr>

              {/* ToilettesF */}

              <tr>
                <td>
                  <h5>
                    Toilettes Pour Femmes
                  </h5>
                </td>
                <td>
                  <Form.Check className='custom-checkbox' checked={toilettesF.conforme} onChange={(e) => {
                    setToilettesF({ ...toilettesF, conforme: e.target.checked })
                    console.log(toilettesF.conforme)
                  }}></Form.Check>
                </td>
                <td>
                  <Form.Control as='textarea' rows={3} placeholder="Décrire le problème " onChange={(e) => setToilettesF({ ...toilettesF, observation: e.target.value })} />
                </td>
                <td>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      name="IntervToilettesF"
                      label="Oui"
                      checked={true === toilettesF.intervention}
                      onChange={() => { setToilettesF({ ...toilettesF, intervention: true }) }}
                    />
                    <Form.Check
                      type="radio"
                      name="IntervToilettesF"
                      label="Non"
                      checked={false === toilettesF.intervention}
                      onChange={() => { setToilettesF({ ...toilettesF, intervention: false }) }}
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

export default DepartNational