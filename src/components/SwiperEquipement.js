import { findByTitle } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Container} from 'react-bootstrap';
import equipement from '../image/equipement.webp'



function SwiperEquipement(props) {
  const title=props.title;
  const description=props.description;
  // const imageE=props.imageE;
  const image=props.image;


return (
      <Row>
        <Col>
          <div>
                <h4>{title}</h4>
                <p>
                  {description}
                </p>
          </div>
        </Col>
        <Col>
            <img className='img-fluid' src={image}  />
        </Col>
      </Row>
);
}
export default SwiperEquipement;
