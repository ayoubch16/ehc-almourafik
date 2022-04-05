import { Row, Col,Container} from 'react-bootstrap';
import image1 from '../image/image-2.webp'
import image2 from '../image/image-3.webp'


function Services() {
  return (
    <div id='Service' className='service' >
      <Container>
      <h3 className='title'><b>Services</b> EHC AL MOURAFIK</h3>
      <Row>
        <Col>
            <img className='grand-img' src={image1}  />
            <img className='mini-img' src={image2} width={200} height={200} />
          </Col>
        <Col>
          <div>
            <ul className='listeservice'>
                <li className='serv'><b>Consultations à domicile:</b> </li>
                    <ul className='sous-service'>
                        <li>-  Gériatre</li>
                        <li>-  Spécialistes</li>
                    </ul>
                <li className='serv'><b>Diagnostique à domicile :</b></li>
                    <ul className='sous-service'>
                        <li>- Eléctro-Cardiogramme</li>
                        <li>-  ECO-Gardiographie </li>
                        <li>- Prélévements biologiques</li>
                    </ul>
                <li className='serv'><b>Hospitalisation à domicile</b> </li>
                <ul className='sous-service'> 
                      <li>- Installation du matériel d’hospitalisation sur mesures </li>
                      <li>- Mobilisation d’équipe médicale personnalisée H24</li>
                    </ul>
                <li className='serv'><b>Prise en charge des sujets âgés, et personnes A Mobilité Réduite (AMR)</b></li>
                    <ul className='sous-service'> 
                      <li>- consultation multidisciplinaire </li>
                      <li>- hospitalisation à domicile adaptée AMR</li>
                      <li>- traitement et suivi</li>
                    </ul>
                <li className='serv'><b>Cabinet Dr SEFIANE BENBRIK de gériatrie et diabétologie:</b></li>
                    <ul className='sous-service'>
                        <li>- Consultations et examens médicaux</li>
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
