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
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">

      <Container>

        <Navbar.Brand href="#home">   <Link className='td-btn' to='/welcome'>Retour à la page d'accueil       </Link></Navbar.Brand>
        <Link className='td-btn' to='/Dashboard'>Tableau de board       </Link>
       

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user.userlig.nom+" "+user.userlig.prenom}</Nav.Link>
            <Nav.Link eventKey={2} href="">

              {formattedDate}
            </Nav.Link>
            <Nav.Link onClick={logout} to='/Login' >Déconnexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;