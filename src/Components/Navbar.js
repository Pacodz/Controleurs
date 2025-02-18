import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function NavbarApp() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('fr-FR');

  const { user, login, logout } = useAuth();

  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary" >

      <Container>

        <Navbar.Brand>
          <Link to='/welcome' > <i className="bi bi-house-door-fill text-light" style={{ fontSize: '1.5rem', }}> Accueil </i></Link>
        </Navbar.Brand>

        <Navbar.Brand>
          <Link to='/Dashboard' > <i className="bi bi-info-square-fill text-light" style={{ fontSize: '1.5rem', }}> Tableau de board </i></Link>
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="#deets"><i style={{ fontSize: '1.5rem', }}>{user.userlig.nom + " " + user.userlig.prenom}</i></Nav.Link>
            <Nav.Link eventKey={2} href="">
              <g style={{ fontSize: '1.5rem', }}>
                {formattedDate}</g>
            </Nav.Link>
            <Nav.Link onClick={logout} to='/Login' > <i className="bi bi-door-closed-fill text-light" style={{ fontSize: '1.5rem', }}> Déconnexion</i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;