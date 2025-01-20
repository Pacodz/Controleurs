import React from 'react'
import { Button, Table, Form, Container, Col, Row, Alert, Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarApp from './Navbar'
import { useAuth } from './AuthContext';
import { useLocation } from 'react-router-dom';




const Dashboard = () => {
  const [data, setData] = useState([]);
  const [reportData, setReportData] = useState([])
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [currentReport, setCurrentReport] = useState('')

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
      maxWidth: '80%',
      width: '90%',
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



  //Supprimer un rapport
  const handleDelete = (num) => {
    axios
      .delete(`http://localhost:3002/delete/${num}`)
      .then((response) => {
        setData(data.filter((item) => item.Num !== num));        // Mise à jour locale
      })
      .catch((error) => console.error(error));
  }

  const handleConsult = (currentReport) => {

    axios
      .get(`http://localhost:3002/api/rapport/${currentReport}`)
      .then((response) => {


        setReportData(response.data.result);

        setTimeout(() => {

        }, 5000);

      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });

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



      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>        <h1 className='my-2'>Liste des rapports</h1>

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
                        <Col>
                          <Button variant="danger" className='btn-dashboard' onClick={() => openModal(item.Num)}>
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
          {(isReportOpen && reportData) && (
            <div style={modalStyles.overlay}>
              <div style={modalStyles.content2}>
                <h2>Rapport</h2>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Objets à controler</th>
                      <th>Conforme ?	</th>
                      <th>Observation ?  </th>
                      <th>Intervention ?	</th>
                    </tr>
                  </thead>


                  <tbody>
                    {reportData.map((item) => (
                      <tr key={item.élements}>
                        <td>{item.élements}</td>
                        <td>{item.Conforme}</td>
                        <td>{item.detail}</td>
                        <td>{item.intervention}</td>
                      </tr>))}
                  </tbody>


                </Table>
                <div style={modalStyles.buttons}>
                  <button onClick={closeReport} style={modalStyles.cancelButton}>Fermer</button>
                </div>
              </div>
            </div>
          )}


        </>
      )}



    </>
  );
}


export default Dashboard;