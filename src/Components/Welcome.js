import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Container, Button } from 'react-bootstrap'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import NavbarApp from './Navbar'


const Welcome = () => {

  const navigate = useNavigate();

  return (<>
    <NavbarApp></NavbarApp>
    <Container className="mt-5">



      <h4>Choisissez la zone à contrôler</h4>

      <Table striped responsive className="mt-3 ">
        <thead>
        </thead>

        <tbody>
          <tr>

            <td className='td-welcome'>
              <Button  className='btn-welcome my-1' onClick={() => (navigate('/HallPublique'))}
              ><h3>Hall Publique</h3></Button>
            </td>

            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/Enregistrement'))}
              ><h3>Enregistrement</h3></Button>
            </td>

          </tr>
          <tr>

            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/DepartNational'))}
              ><h3>Départ National</h3></Button>
            </td>

            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/DepartInternational'))}
              ><h3>Départ International</h3></Button>
            </td>

          </tr>
          <tr>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/ArriveeNationale'))}
              ><h3>Arrivée Natioanle</h3></Button>
            </td>

            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/ArriveeInternationale'))}
              ><h3>Arrivée Internationale</h3></Button>
            </td>


          </tr>
          
        </tbody>
      </Table>
    </Container>
  </>
  )
}

export default Welcome
