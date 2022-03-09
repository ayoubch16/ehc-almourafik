import { Row, Col,Container} from 'react-bootstrap';
import image1 from '../image/image-4.png'
import utilisateur from '../image/utilisateur.png'
import telephone from '../image/telephone.png'
import location from '../image/location.png'

function Rendez() {
    return (
      <div className='rendez-vouz' >
      <Container>
      <Row>
        <Col>
          <div className='rightdiv '>
            <h3>Prendre rendez vous</h3>
            <form>
              <h5>Nom Complet</h5>
              <Row>
                <Col xs={2}>
                  <div className='icone' >
                          <img className='img-fluid' src={utilisateur}  />   
                  </div>
                </Col>
                <Col> 
                  <input type={'text'} placeholder={'Nom'} />
                </Col>
              </Row>
              <h5>Telephone</h5>
              <Row>
                <Col xs={2}>
                  <div className='icone' >
                       <img className='img-fluid' src={telephone}   />                    
                  </div>
                </Col>
                <Col> 
                  <input type={'text'} placeholder={'Telephone'}/>
                </Col>
              </Row>
              <h5>Ville</h5>
              <Row>
                <Col xs={2}>
                    <div className='icone' >
                          <img className='img-fluid' src={location}  />    
                    </div>
                </Col>
                <Col> 
                  <input type={'text'} placeholder={'Ville'}  />
                </Col>
              </Row>
              <input type={'submit'} className='btnC'  />
            </form>

          </div>
        </Col>
        <Col>
            <img className='img-fluid' src={image1}  />
        </Col>
      </Row>
      </Container>
    </div>
    );
  }
  export default Rendez;
  

  