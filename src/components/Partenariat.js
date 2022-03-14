import { Row, Col,Container} from 'react-bootstrap';
import cnss from '../image/cnss.webp'
import rma from '../image/rma.webp'
import saham from '../image/saham.webp'
import sante from '../image/sante.webp'
import wafasalf from '../image/wafasalf.webp'





function Partenariat () {
  return (
    <div className='partenariat'>
      <Container>
      <h3 className='title'><b>Partenariat  </b> EHC AL MOURAFIK</h3>

      <Row>
        <Col>
            <img className='img-colab img-fluid' width={200} height={150} src={cnss}  />
        </Col>
        <Col>
            <img className='img-colab img-fluid' width={200} height={150} src={rma}  />
        </Col>
        <Col>
            <img className='img-colab img-fluid' width={200} height={150} src={saham}  />
        </Col>
        <Col>
            <img className='img-colab img-fluid' width={200} height={150} src={sante}  />
        </Col>
        <Col>
            <img className='img-colab img-fluid' width={200} height={150} src={wafasalf}  />
        </Col>

      </Row>
      </Container>
    </div>
  );
}
export default Partenariat ;
