import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Container, Table, Spinner } from 'react-bootstrap'
import axios from 'axios'




const ConsulterRapport = ({ currentReport, setIsReportOpen }) => {

    const [reportData, setReportData] = useState([])
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState([])
    const [isPhotoAgrandi, setIsPhotoAgrandi] = useState(false)
    const previews = useRef([]);
    const [currentPhotoURL, setCurrentPhotoURL] = useState(null)

    useEffect(() => {

        setLoading(true)

        axios
            .get(`https://egsa-constantine.dz/api/rapport/${currentReport}?timestamp=${new Date().getTime()}`)
            .then((response) => {

                if (response.data) {
                    setReportData(response.data.rows);
                } else {
                    console.log("pas de réponse")
                }

                reportData.map((lig) => {
                    setPhotos([...photos, lig.photo])
                })


                setLoading(false)



            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
                setLoading(false)

            });


        setIsReportOpen(true)


    }, [])



    useEffect(() => {



        reportData.map((lig) => {
            if (reportData.length === previews.current.length) {
            } else {


                if (lig.photo === '') {
                    console.log('pas de photo')
                    previews.current.push({ photo: '', url: '' })


                } else {
                    previews.current.push(stringToUnitArray(lig.photo, `photo ${new Date().getTime()}.jpg`, "image/png"))
                }

            }



        })

        setPhotos(previews.current)

    }, [reportData])


    const handleAgrandir = (e) => {
        setCurrentPhotoURL(e.target.currentSrc)
        setIsPhotoAgrandi(true)
    }

    const closePhotoAgrandi = () => {
        setIsPhotoAgrandi(false)


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



    const stringToUnitArray = (text, fileName, mimeType) => {
        const parsedArray = JSON.parse('[' + text + ']');  // Convertir le string en tableau
        const restoredUint8Array = new Uint8Array(parsedArray);
        const file = uint8ArrayToFile(restoredUint8Array, fileName, mimeType)
        return { photo: file, url: URL.createObjectURL(file) }

    }

    function uint8ArrayToFile(uint8Array, fileName, mimeType) {
        const blob = new Blob([uint8Array], { type: mimeType });
        const file = new File([blob], fileName, { type: mimeType });
        return file;
    }

    if (loading) {
        return <>
            <Spinner animation="border" />
            <p>Chargement des données...</p>        </>
    }

    return (
        <>
            <h2 className='mb-3'>Détail du Rapport</h2>

            <Table responsive striped bordered hover>

                <thead style={{ verticalAlign: "middle", textAlign: "center" }}>
                    <tr>
                        <th style={{ width: '10%' }}>A controler</th>
                        <th style={{ width: '10%' }}>Conformité	</th>
                        <th style={{ width: '55%', maxWidth: '55%' }}>Observation</th>
                        <th style={{ width: '10%' }}>Intervention</th>
                        <th style={{ width: '20%' }}>Photo</th>

                    </tr>
                </thead>

                <tbody>
                    {reportData.map((item, index) => (
                    
                    <tr style={{ verticalAlign: "middle", textAlign: "center" }} key={item.élements}>
                         
                            <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                                <h6>{item.élements}</h6>
                            </td>

                            <td className={item.Conforme === 1 ? 'bg-success text-white' : 'bg-danger text-white'}>
                                <h6>{item.Conforme === 1 ? ('Conforme') : ('Non Conforme')}</h6>
                            </td>

                            <td style={{
                                maxWidth: "200px",
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
                                whiteSpace: "normal",
                            }}>
                                {item.detail}
                            </td>

                            <td style={{ verticalAlign: "middle", textAlign: "center" }}>{item.intervention === 1 ? < i className="bi bi-check-square-fill" style={{ fontSize: '2rem', color: 'green' }}></i> : <i style={{ fontSize: '2rem', color: 'red' }} className="bi bi-x-square-fill"></i>}</td>

                            <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                                <h6>
                                    {previews.current[index] && (previews.current[index].photo == '' || !previews.current[index].photo) ? (<p>Pas de photo</p>) : (<img onClick={handleAgrandir} src={previews.current[index] && previews.current[index].url} alt="Preview" style={{
                                        display: 'inline-block',
                                        maxWidth: '40%',
                                        maxHeight: '100px', marginTop: '20px'
                                    }} />)}

                                </h6>
                            </td>

                        </tr>))}
                </tbody>

            </Table>

            {
                (isPhotoAgrandi && reportData) && (

                    <Container>

                        <div style={modalStyles.overlay}>
                            <div style={modalStyles.content2}>
                                <div className='d-flex'>
                                    <button className='ms-auto' onClick={closePhotoAgrandi} style={modalStyles.cancelButton}>Fermer</button>
                                </div>
                                <img onClick={handleAgrandir} src={currentPhotoURL} alt="Preview" style={{
                                    display: 'inline-block',
                                    maxWidth: '100%',
                                    maxHeight: '100%', marginTop: '20px'
                                }} />
                            </div>

                        </div>
                    </Container>
                )
            }


        </>
    )
}

export default ConsulterRapport