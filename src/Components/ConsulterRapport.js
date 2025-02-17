import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'




const ConsulterRapport = ({ currentReport, setCurrentReport, isReportOpen, setIsReportOpen }) => {

    const [reportData, setReportData] = useState([])
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState([])
    const previews = useRef([]);


    useEffect(() => {
        setLoading(true)

        console.log(currentReport)
        axios
            .get(`https://egsa-constantine.dz/api/rapport/${currentReport}?timestamp=${new Date().getTime()}`)
            .then((response) => {

                if (response.data) {
                    console.log(response.data);
                    setReportData(response.data.rows);
                } else {
                    console.log("pas de réponse")
                }

                setLoading(false)

            })
            .catch((error) => {
                console.error("Erreur lors de la récupération des données :", error);
                setLoading(false)

            });

        reportData.map((lig) => {
            console.log(lig.photo)
            setPhotos([...photos, lig.photo])
            console.log(photos)
        })

        setIsReportOpen(true)
    }, [])


    useEffect(() => {



        console.log(photos)

    }, [photos])

    useEffect(() => {

        reportData.map((lig) => {
            if (lig.photo == '') {
                console.log('pas de photo')
                previews.current.push({ photo: '', url: '' })


            } else {

                previews.current.push(stringToUnitArray(lig.photo, `photo ${new Date().getTime()}.jpg`, "image/png"))
            }

            console.log(previews.current)

        })

        setPhotos(previews.current)
        console.log(previews.current)

    }, [reportData])





    const stringToUnitArray = (text, fileName, mimeType) => {
        console.log("j'y suis")
        const parsedArray = JSON.parse('[' + text + ']');  // Convertir le string en tableau
        const restoredUint8Array = new Uint8Array(parsedArray);
        console.log(restoredUint8Array)
        const file = uint8ArrayToFile(restoredUint8Array, fileName, mimeType)
        console.log(URL.createObjectURL(file))
        return { photo: file, url: URL.createObjectURL(file) }

    }

    function uint8ArrayToFile(uint8Array, fileName, mimeType) {
        const blob = new Blob([uint8Array], { type: mimeType });
        const file = new File([blob], fileName, { type: mimeType });
        return file;
    }

    if (loading) {
        return <p>Chargement des données...</p>;
    }

    return (
        <>
            <h2>Rapport</h2>

            <Table responsive striped bordered hover>

                <thead style={{ verticalAlign: "middle", textAlign: "center" }}>
                    <tr>
                        <th style={{ width: '10%' }}>Objets à controler</th>
                        <th style={{ width: '10%' }}>Conformité	</th>
                        <th style={{ width: '55%', maxWidth: '55%' }}>Observation</th>
                        <th style={{ width: '10%' }}>Intervention	</th>
                        <th style={{ width: '20%' }}>Photo	</th>

                    </tr>
                </thead>

                <tbody>
                    {reportData.map((item, index) => (
                        <tr style={{ verticalAlign: "middle", textAlign: "center" }} key={item.élements}>
                            <td style={{ verticalAlign: "middle", textAlign: "center" }}><h6>{item.élements}</h6></td>
                            <td className={item.Conforme === 1 ? 'bg-success text-white' : 'bg-danger text-white'}><h6>{item.Conforme === 1 ? ('Conforme') : ('Non Conforme')}</h6></td>
                            <td style={{
                                maxWidth: "200px",
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
                                whiteSpace: "normal",
                            }}>{item.detail}</td>
                            <td style={{ verticalAlign: "middle", textAlign: "center" }}>{item.intervention === 1 ? < i className="bi bi-check-square-fill" style={{ fontSize: '2rem', color: 'green' }}></i> : <i style={{ fontSize: '2rem', color: 'red' }} className="bi bi-x-square-fill"></i>}</td>

                            {/* <td>
                                {item.photo && item.photo.data && item.photo.data.length}
                            </td> */}
                            <td style={{ verticalAlign: "middle", textAlign: "center" }}><h6> <img src={previews.current[index] && previews.current[index].url} alt="Preview" style={{
                                display: 'inline-block',
                                maxWidth: '40%',
                                maxHeight: '100px', marginTop: '20px'
                            }} /></h6></td>

                        </tr>))}
                </tbody>

            </Table></>
    )
}

export default ConsulterRapport