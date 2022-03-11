import { Row, Col,Container} from 'react-bootstrap';
import cnss from '../image/cnss.png'
import rma from '../image/rma.png'
import saham from '../image/saham.png'
import sante from '../image/sante.png'
import wafasalf from '../image/wafasalf.png'





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
