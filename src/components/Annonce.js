import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Resaux from './components/Resaux';





function Annonce() {
  return (
    <Row>
        <Col xs={1}>
            <p>insta</p>
        </Col>
        <Col>
        <div className='annonce'>
        
            <div className='leftdiv'>
                <div>
                    <h3>Consultation,</h3>
                    <h1>hospitalisation <br></br> à domicile</h1>
                    <p className='text'>
                    MEDECIN ASSISTANCE URGENCE INTERNATIONALE , leader des urgences a domicile partout au Maroc. nous couverons tout le Maroc  avec nos équipe sur chaque ville ou a travers nos partenaire
                    </p>
                    <a className='btnC' >Contactez-nous</a><span>24/24 h</span>
                </div>
            </div>
        </div>
        
        </Col>

    </Row>
  );
}
export default Annonce;
