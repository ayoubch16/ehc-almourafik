import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Resaux from './components/Resaux';





function Annonce() {
  return (
    <Row id='Acceuil' className='divannonce'>
        <Col xs={1}>
            {/* <p>insta</p> */}
        </Col>
        <Col >
        <div className='annonce'>
            <div className='leftdiv'>
                <div>
                    <h3>Consultations &#38;</h3>  
                    <h1><b>hospitalisation</b> <br></br> <b> à domicile</b></h1>
                    <p className='text'>
                    &ensp;AL MOURAFIK est votre assistant médical sur l'ensemble du territoire Marocain.<br></br>
                    &ensp;Nous sommes à vos cotés 24H/7J, pour toute intervention de précaution ou d'urgence,
                    à votre domicile ou aux locaux professionnels, grâce à notre équipe polyvalente et 
                    qualifiée sur toutes les spécialités médicales, et équipée du matériel de dernière génération.
                    </p>
                    <a href='#Contact' className='btnC' >Contactez-nous</a><span>24/24 h</span>
                </div>
            </div>
        </div>
        
        </Col>

    </Row>
  );
}
export default Annonce;
