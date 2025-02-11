import React, { useState, useEffect } from 'react'

const Previsualisation = (props) => {

    const [images, setImages] = useState('')
    const [id, setId] = useState(props.id)

    useEffect(() => {
        setId(props.id)
        console.log("zebi")


    }, [props])


    return (
        <img src={id} alt="Preview" style={{
            display: 'inline-block',
            maxWidth: '40%',
            maxHeight: '100px', marginTop: '20px'
        }} />)
}

export default Previsualisation