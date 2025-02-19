import React, { useState, useEffect } from 'react'

const PrevisulisationDash = (props) => {

    const [preview, setPreview] = useState(props.preview)
    const [loading, setLoading] = useState(true)
    const [forceRerender, setForceRerender] = useState(true)

    const froceRerendring = () => {

        setForceRerender(prev => !prev)
    }
    useEffect(() => {
        console.log("salut mouchkel machi f la version")

    },
        [])

    useEffect(() => {
        console.log(props.preview)
        setPreview(props.preview)

    }, [props.preview])

    useEffect(() => {

        preview === undefined && froceRerendring()
        setLoading(false)
        setPreview(props.preview)
        console.log("en attente")


    }, [preview])



    if (loading) {
        return <p>Loading...</p>
    } else {


        return (
            <>

                {preview === undefined && froceRerendring}
                {
                    !preview ||
                        (preview === undefined ||
                            !preview.photo ||
                            !preview.url ||
                            preview.photo === '' ||
                            preview.url === '')
                        ?
                        (<p>Pas de photo</p>)
                        :
                        (<img onClick={props.handleAgrandir} src={preview && preview.url} alt="Prev" style={{
                            display: 'inline-block',
                            maxWidth: '95%',
                            maxHeight: '150px', marginTop: '5px'
                        }} />)
                }
            </>
        )
    }

}

export default PrevisulisationDash