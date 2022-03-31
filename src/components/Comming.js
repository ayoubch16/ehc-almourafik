import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';

import logo from '../logoehc.webp'
import image404 from '../image/404.png'
function Comming() {
  return (
 <div className='comming'>
    <Container className='text-center '>
        <h1 className='text-center text-comming'>E.H COMPAGNIONSHIP AL MOURAFIK</h1>
        <h1 className='text-center text-comming'>Coming soon</h1>
        <img src={image404} className='img-404'  />
        <div className='RefInfo'>
          <h1> 
          medicine,doctor,medical,health,healthcare,doctors,nurse,medicalstudent,covid,hospital,surgery 
        ,medstudent,medschool,medicina,science,medico,anatomy,medicalschool,mbbs,pharmacy,medlife,neet,love,wellness,med,surgeon 
        ,biology,healthylifestyle,coronavirus
        , cannabis , nursing , futuredoctor , study , healthy , physician , pharmacist , education , pathology , studygram , pharmacology , fitness
         , nurses , student , radiology , microbiology , usmle , motivation , research , nurselife , premed , nature , medicos , usmlestep 
         , art , physiology , instagram , life , aiims , dentist 
          </h1>
        </div>
    </Container>
 </div>
  );
}
export default Comming;
