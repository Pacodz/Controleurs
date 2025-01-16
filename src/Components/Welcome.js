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


    <Row className='bg-light'> <h1 className='mt-4 text-primary'>Choisissez la zone à contrôler  </h1> </Row>


      <Table striped responsive className="mt-3 ">
        <thead>
        </thead>

        <tbody>
          <tr>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/HallPublique', { state: { zone: 'H_P' } }))}
              ><h3>Hall Publique</h3></Button>
            </td>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/Enregistrement', { state: { zone: 'ERG' } }))}
              ><h3>Enregistrement</h3></Button>
            </td>
          </tr>
          <tr>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/DepartNational', { state: { zone: 'D_N' } }))}
              ><h3>Départ National</h3></Button>
            </td>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/DepartInternational', { state: { zone: 'D_I' } }))}
              ><h3>Départ International</h3></Button>
            </td>
          </tr>
          <tr>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/ArriveeNationale', { state: { zone: 'A_N' } }))}
              ><h3>Arrivée Natioanle</h3></Button>
            </td>
            <td className='td-welcome'>
              <Button className='btn-welcome my-1' onClick={() => (navigate('/ArriveeInternationale', { state: { zone: 'A_I' } }))}
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
