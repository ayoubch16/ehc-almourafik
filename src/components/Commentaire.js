import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col} from 'react-bootstrap';
// import Resaux from './components/Resaux';
import imgcleint1 from '../image/img-cleint1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faStar } from '@fortawesome/free-solid-svg-icons'



function Commentaire() {
  return (
    <div className="commantaire">
    <h5>Posuere lobortis </h5>
    <p>Phasellus finibus enim nulla, quis ornare odio facilisis eu. Suspendisse ornare ante sit amet arcu semper,
       vel eleifend tortor egestas. Aenean luctus, lorem in hendrerit interdum, 
    </p>
    <Row>
      <Col xs={3}><img className='img-client' src={imgcleint1}  /></Col>
      <Col>
          <h3>Dan Stanley</h3>
          <p>Nom de l’entreprise</p>
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
