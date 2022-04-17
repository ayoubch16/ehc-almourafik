import { findByTitle } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Container} from 'react-bootstrap';
import equipement from '../image/equipement.webp'



function SwiperEquipement(props) {
  const title=props.title;
  const description=props.description;
  // const imageE=props.imageE;
  const image=props.image;
  const composition1=props.composition1;
  const composition2=props.composition2;
  const composition3=props.composition3;
  const composition4=props.composition4;
  const composition5=props.composition5;


return (
      <Row style={{alignItems:'center',justifyContent:'center'}}>
        <Col>
          <div>
                <h4>{title}</h4>
                <p>
                  {description}
                </p>
                <h5>Composition :</h5>
                <ul style={{listStyle:'none'}}>
                  <li>{composition1}</li>
                  <li>{composition2}</li>
                  <li>{composition3}</li>
                  <li>{composition4}</li>
                  <li>{composition5}</li>

                </ul>
          </div>
        </Col>
        <Col>
            <img className='img-fluid' src={image}  />
        </Col>
      </Row>
);
}
export default SwiperEquipement;
