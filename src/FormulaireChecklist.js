import { Container, Table, Form, Row, Col } from 'react-bootstrap';
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerExample from './DatePicker'


const FormulaireChecklist = () => {

  const [banquette, setbanquette] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [tapis, setTapis] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [ecranTel, setEcranTel] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [balance, setBalance] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [peinture, setPeinture] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [revetement, setRevetement] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [portes, setPortes] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [climatisation, setClimatisation] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [assenseurs, setAssenseurs] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [solPLafond, setSolPLafond] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [distributeurSavon, setDistributeurSavon] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [cuvetteLavabosSecheMains, setCuvetteLavabosSecheMains] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })
  const [miroirRobinetsChasse, setMiroirRobinetsChasse] = useState({ confrome: { entregistrement: true, national: true, international: true, }, intervention: false, observation: '' })



  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSuivi((prevSuivi) => ({
  //     ...prevSuivi,
  //     [name]: value,
  //   }));
  // };


  const [selectedDate, setSelectedDate] = useState(null);


  return (
    <Container className="mt-4">
      <h3>Fiche de suivi Quotidienne</h3>
      <Table striped bordered hover responsive className="mt-3">

        <thead>
          <tr>
            <th>Nom et prénom du controleur</th>
            <th>Zone</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>
              <Form.Group>
                <Form.Control as="select">
                  <option>Rachedi Salah eddine</option>
                  <option>Leftaha Nadjib </option>
                  <option>Ras el Ain Mohamed el Amine</option>
                  <option>Chougui abdelhak</option>
                  <option>Soupapa</option>
                </Form.Control>
              </Form.Group>
            </td>

            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="National"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="International"
                />
              </Form.Group>
            </td>

            <td>
              <DatePickerExample></DatePickerExample>
            </td>


          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover responsive className="mt-3">

        <thead>
          <tr>
            <th>Objets à controler</th>
            <th>Conforme ?</th>
            <th>Intervention ?</th>
            <th>Observation ?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h6>Banquette d'enregistrement</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Tapis Bagage</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Écran téléaffichage</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>

          <tr>
            <td>
              <h6>Balance Électronique</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Structure Peinture</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Revetement Sol et Faux Plafonds</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Portes et Portiques Embarquement/Débarquement</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>CLIMATISATION et SONORISATION</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Assenseurs et Escalators</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>SOL/PLAFOND</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Distributeurs Savon</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Cuvette / Lavabos / Seches Mains</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Miroires/Robinets/Chasse d'eau</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          <tr>
            <td>
              <h6>Balance Électronique</h6>
            </td>
            <td>

              <tr className='d-flex justify-content-center align-items-center' >
                <td><Form.Check type="checkbox" label="Enregistrement" /></td>
                <td><Form.Check type="checkbox" label="National" /></td>
                <td><Form.Check type="checkbox" label="International" /></td>
              </tr>
            </td>
            <td>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
        </tbody>

      </Table>



      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Étape</th>
            <th>Checklist</th>
            <th>Options</th>
            <th>Mesure</th>
          </tr>
        </thead>
        <tbody>
          {/* Ligne d'exemple */}
          <tr>
            <td>Étape 1</td>
            <td>
              <Form.Check type="checkbox" label="Item 1" />
              <Form.Check
                type="checkbox"
                label="Item 2"
              />
            </td>
            <td>
              <Form.Group>
                <Form.Label>Choix de l'option</Form.Label>
                <Form.Control as="select">
                  <option>Option A</option>
                  <option>Option B</option>
                  <option>Option C</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          {/* Ajoutez d'autres lignes comme nécessaire */}
        </tbody>
      </Table>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Étape</th>
            <th>Checklist</th>
            <th>Options</th>
            <th>Mesure</th>
          </tr>
        </thead>
        <tbody>
          {/* Ligne d'exemple */}
          <tr>
            <td>Étape 1</td>
            <td>
              <Form.Check
                type="checkbox"
                label="Item 1"
              />
              <Form.Check
                type="checkbox"
                label="Item 2"
              />
            </td>
            <td>
              <Form.Group>
                <Form.Label>Choix de l'option</Form.Label>
                <Form.Control as="select">
                  <option>Option A</option>
                  <option>Option B</option>
                  <option>Option C</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Oui"
                />
                <Form.Check
                  type="radio"
                  name="radio1"
                  label="Non"
                />
              </Form.Group>
            </td>
            <td>
              <Form.Group>
                <Form.Control type="text" placeholder="Entrez une mesure" />
              </Form.Group>
            </td>
          </tr>
          {/* Ajoutez d'autres lignes comme nécessaire */}
        </tbody>
      </Table>
    </Container>
  );
};

export default FormulaireChecklist;
