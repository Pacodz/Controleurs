import React, { useState, useEffect } from 'react'

const PrevisulisationDash = (props) => {

    const [loading, setLoading] = useState(true)
    const [forceRerender, setForceRerender] = useState(true)

    const froceRerendring = () => {

        props.setForceRerender(prev => !prev)
    }

    useEffect(() => {


        props.preview !== undefined ? (setLoading(false)) : (console.log("props undifined"))


    },
        [])

    useEffect(() => {


        props.preview !== undefined ? (
            setLoading(false)) :
            (console.log("props undifined"))

    }, [props.preview])




    if (loading) {

        return <p>Loading...</p>

    } else {

        // if (props.preview === undefined) {
        //     return <p>Loading...undifined</p>

        // }

        if (props.preview.url === '') {
            return <p>Pas de photo</p>

        }

        if (props.preview.url.startsWith("blob")) {
            return <img onClick={props.handleAgrandir} src={props.preview.url} alt="Prev" style={{
                display: 'inline-block',
                maxWidth: '95%',
                maxHeight: '150px', marginTop: '5px'
            }} />
        }
        else {

            return <p>maderna walou</p>
        }


    }

}

export default PrevisulisationDash