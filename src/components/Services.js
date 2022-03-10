import { Row, Col,Container} from 'react-bootstrap';
import image1 from '../image/image-2.png'
import image2 from '../image/image-3.png'


function Services() {
  return (
    <div className='service' >
      <Container>
      <h3><b>Service</b> EHC AL MOURAFIK</h3>
      <Row>
        <Col>
            <img className='img-fluid' src={image1}  />
            <img className='mini-img' src={image2} width={200} height={200} />
          </Col>
        <Col>
          <div>
            <ul className='listeservice'>
                <li className='serv'><b>Consultations à domicile:</b> </li>
                    <ul className='sous-service'>
                        <li>-  Généralistes</li>
                        <li>-  Spécialistes</li>
                    </ul>
                <li className='serv'><b>Diagnostique à domicile :</b></li>
                    <ul className='sous-service'>
                        <li>- ECG</li>
                        <li>- ECO- Graphe</li>
                        <li>- prélévements biologique</li>
                    </ul>
                <li className='serv'><b>Hospitalisation à domicile</b> </li>
                <li className='serv'><b>Prise en charge des sujets âgés, et AMR</b></li>
                    <ul className='sous-service'> 
                      <li>- consultation multidisciplinaire </li>
                      <li>- hospitalisation à domicile adaptée AMR</li>
                      <li>- traitement et suivi</li>
                    </ul>
                <li className='serv'><b>Cabinet Dr SEFIANE BENBRIK de gériatrie et diabétologie:</b></li>
                    <ul className='sous-service'>
                        <li>- Consiltation et examen sur place</li>
                    </ul>
              </ul>
              <a className='btnC'>Contact us</a>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}
export default Services;