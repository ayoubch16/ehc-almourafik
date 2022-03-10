import { Row, Col,Container} from 'react-bootstrap';
import equipement from '../image/equipement.png'


function Equipment() {
  return (
    <div className='service' >
      <Container>
      <h3><b>Equipment </b> EHC AL MOURAFIK</h3>
      <Row>
        <Col>
          <div>
                <h3>Le lorem ipsum est, en imprimerie</h3>
                <p>
                Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page,
                 le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, 
                 on utilise un texte en faux latin, le Lorem ipsum ou Lipsum
                </p>
          </div>
        </Col>
        <Col>
            <img className='img-fluid' src={equipement}  />
        </Col>
      </Row>
      </Container>
    </div>
  );
}
export default Equipment;
