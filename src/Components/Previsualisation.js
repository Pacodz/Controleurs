import React, { useState, useEffect } from 'react'

const Previsualisation = (props) => {

    const [maPrevisualisation, setmaPrevisualisation] = useState('')



    useEffect(() => {
       
        const photo = props.images.current.find((photo) => (photo.id === props.id))
        setmaPrevisualisation(photo)
        /*     const image = props.images.find((preview) => (preview.id = props.id))
            console.log(image) */

    }, [])


    return (
        <img src={maPrevisualisation.photo} alt="Preview" style={{
            display: 'inline-block',
            maxWidth: '40%',
            maxHeight: '100px', marginTop: '20px'
        }} />)
}

export default Previsualisation