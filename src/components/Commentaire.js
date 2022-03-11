  import 'bootstrap/dist/css/bootstrap.min.css';
  import { Row,Col} from 'react-bootstrap';
// import Resaux from './components/Resaux';
  import imgcleint1 from '../image/img-cleint1.png'

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar } from '@fortawesome/free-solid-svg-icons'


function Commentaire(props) {
  const nom = props.nom;
  const title = props.title;
  const entreprise = props.entreprise;
  const text=props.text;
  return (
    <div className="commantaire">
      <h5>{title}</h5>
      <p>
        {text}
      </p>
      <Row>
        <Col xs={3}><img className='img-client' src={imgcleint1} /></Col>
        <Col>
            <h3>{nom}</h3>
              <p>{entreprise}</p>
            <span>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            
            </span>
        </Col>
      </Row>
    </div>
  );
}
export default Commentaire;
