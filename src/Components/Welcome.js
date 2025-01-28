import React from 'react'
import { Link } from 'react-router-dom'
import { Table, Container, Button, Row } from 'react-bootstrap'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import NavbarApp from './Navbar'

const Welcome = () => {

  const navigate = useNavigate();

  return (<>
    <NavbarApp></NavbarApp>
    <Container>


      <Row className='bg-light'> <h3 className='mt-4'> Choisir la zone à contrôler  </h3> </Row>


      <Table striped responsive className="mt-3 ">
        
        <thead>

        </thead>

        <tbody>
          <tr>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/HallPublique', { state: { zone: 'H_P' } }))}
              ><h5>Hall Publique</h5></Button>
            </td>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/Enregistrement', { state: { zone: 'ERG' } }))}
              ><h5>Enregistrement</h5></Button>
            </td>
          </tr>
          <tr>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/DepartNational', { state: { zone: 'D_N' } }))}
              ><h5>Départ National</h5></Button>
            </td>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/DepartInternational', { state: { zone: 'D_I' } }))}
              ><h5>Départ International</h5></Button>
            </td>
          </tr>
          <tr>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/ArriveeNationale', { state: { zone: 'A_N' } }))}
              ><h5>Arrivée Natioanle</h5></Button>
            </td>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/ArriveeInternationale', { state: { zone: 'A_I' } }))}
              ><h5>Arrivée Internationale</h5></Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </>
  )
}

export default Welcome
