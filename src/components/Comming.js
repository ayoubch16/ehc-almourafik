import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';

import logo from '../logoehc.webp'
import image404 from '../image/404.png'
function Comming() {
  return (
 <div className='comming'>
    <Container className='text-center '>
        <h1 className='text-center text-comming'>Coming soon</h1>
        <img src={image404} className='img-404'  />
    </Container>
 </div>
  );
}
export default Comming;
