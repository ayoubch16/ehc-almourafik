import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';
import logoehc from '../logoehc.webp'
function NavBar() {
  return (
<div>
    <Navbar className='mx-4' collapseOnSelect expand="lg" bg="" variant="light">
        <Navbar.Brand href="#root">
            <img width={60} height={40}
            src={logoehc} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav style={
                    {textAlign:"center"}
                }>
                <Nav.Link href="#Acceuil">Acceuil</Nav.Link>
                <Nav.Link href="#Service">Service</Nav.Link>
                <Nav.Link href="#Partenariat">Partenariat</Nav.Link>
                <Nav.Link href="#Recrutement">Recrutement</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
</div>
  );
}
export default NavBar;
