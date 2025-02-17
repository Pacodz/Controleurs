import React from 'react'
import { Button, Table, Form, Container, Col, Row, Alert, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'
import { useAuth } from './AuthContext';
import { useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ConsulterRapport from './ConsulterRapport';




const Dashboard = () => {
  const [data, setData] = useState([]);

  const { user, login, logout } = useAuth();

  const [reportData, setReportData] = useState([])

  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  const [currentReport, setCurrentReport] = useState('')

  const [maPrevisualisation, setMaPrevisualisation] = useState('')

  const handleConfirm = (params) => {
    handleDelete(currentReport)
    setCurrentReport(0)
    setIsModalOpen(false)
  }

  const closeModal = (params) => {
    setIsModalOpen(false)
  }

  const closeReport = (params) => {
    setIsReportOpen(false)
  }

  const openReport = (i) => {
    setCurrentReport(i)
    handleConsult(i)

  }

  const openModal = (i) => {
    setCurrentReport(i)
    setIsModalOpen(true)
  }

  function uint8ArrayToFile(uint8Array, fileName, mimeType) {
    let blob = new Blob([uint8Array], { type: mimeType });
    let file = new File([blob], fileName, { type: mimeType });
    return file;
  }




  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    content: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '400px',
      width: '90%',
    },

    content2: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      maxWidth: '90%',
      width: '90%',
      maxHeight: '90%',
      height: '90%',
      overflowY: 'auto',
      overflowX: 'auto'
    },
    buttons: {
      marginTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    confirmButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    cancelButton: {
      padding: '10px 20px',
      backgroundColor: '#f44336',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };


  // Récupérer les données depuis l'API
  useEffect(() => {

    setLoading(true)

    axios
      .get(`https://egsa-constantine.dz/api/rapports?timestamp=${new Date().getTime()}`)
      .then((response) => {

        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
        setLoading(false);
      });

  }, []);



  //Supprimer un rapport
  const handleDelete = (num) => {
    axios
      .delete(`https://egsa-constantine.dz/api/delete/${num}`)
      .then((response) => {
        setData(data.filter((item) => item.Num !== num));        // Mise à jour locale
      })
      .catch((error) => console.error(error));
  }

  const handleConsult = (currentReport) => {

    // axios
    //   .get(`https://egsa-constantine.dz/api/rapport/${currentReport}?timestamp=${new Date().getTime()}`)
    //   .then((response) => {

    //     console.log(response.data.rows[0].photo.data)

    //     setReportData(response.data.rows);

    //     setTimeout(() => {

    //     }, 2000);

    //   })
    //   .catch((error) => {
    //     console.error("Erreur lors de la récupération des données :", error);
    //   });

    setIsReportOpen(true)

  }


  const endroit = (zone) => {
    switch (zone) {
      case 'A_I':
        return <p>Arrivée Internationale</p>;
        break;
      case 'A_N':
        return <p>Arrivée Nationale</p>;
        break;
      case 'D_I':
        return <p>Départ international</p>;
        break;
      case 'D_N':
        return <p>Départ National</p>;
        break;
      case 'H_P':
        return <p>Hall Publique</p>;
        break;
      case 'ERG':
        return <p>Enregistrement</p>;
        break;

      default:
        return <p>Statut inconnu.</p>;
    }

  }

  return (
    <>
      <NavbarApp></NavbarApp>


      <Container>
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <>        <h1 className='my-2'>Liste des rapports</h1>

            <Table responsive striped bordered hover>
              <thead >
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
                    <td>{item.date.split("T")[1].split(".")[0].slice(0, 5)}</td>
                    <td>{item.nom} {item.prenom}</td>
                    <td>{endroit(item.zone)}</td>
                    <td>
                      <Container>
                        <Row>
                          <Col>
                            <Button variant="primary" className='btn-dashboard' onClick={() => openReport(item.Num)}>
                              Consulter
                            </Button>
                          </Col>
                          {/* <Col>
                          <Button variant="dark" className='btn-dashboard' onClick={() => alert(`ID: ${item.Num}`)}>
                            Marquer comme lu
                          </Button>
                        </Col> */}

                          {user.userlig.user_group == 2 &&
                            <Col>  <Button variant="danger" className='btn-dashboard' onClick={() => openModal(item.Num)}>
                              Supprimer
                            </Button>
                            </Col>
                          }

                        </Row>
                      </Container>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>


            {/* Modal */}
            {isModalOpen && (
              <div style={modalStyles.overlay}>
                <div style={modalStyles.content}>
                  <h2>Confirmation</h2>
                  <p>Êtes-vous sûr de vouloir Supprimer ce rapport ?</p>
                  <div style={modalStyles.buttons}>
                    <button onClick={handleConfirm} style={modalStyles.confirmButton}>Oui</button>
                    <button onClick={closeModal} style={modalStyles.cancelButton}>Annuler</button>
                  </div>
                </div>
              </div>
            )}

            {/* Rapport */}

            {
              (isReportOpen && reportData) && (

                <Container>

                  <div style={modalStyles.overlay}>
                    <div style={modalStyles.content2}>
                      <div className='d-flex'>
                        <button className='ms-auto' onClick={closeReport} style={modalStyles.cancelButton}>Fermer</button>
                      </div>

                      <ConsulterRapport currentReport={currentReport} setCurrentReport={setCurrentReport} isReportOpen={isReportOpen} setIsReportOpen={setIsReportOpen}></ConsulterRapport>

                      <div>
                        <button onClick={closeReport} style={modalStyles.cancelButton}>Fermer</button>
                      </div>
                    </div>

                  </div>
                </Container>
              )
            }


          </>
        )}

      </Container>

    </>
  );
}


export default Dashboard;