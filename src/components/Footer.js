import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';

import logo from '../logoehc.webp'
function Copyright() {
  return (
<footer className="page-footer font-small blue pt-4">
    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <div style={{textAlign:'left'}}>
                    <img src={logo} width={100} height={80} />
                </div>
                <p className='text' style={{textAlign : 'start'}}>Services EHC AL MOURAFIK: <br></br>
                    constultations à domicile<br></br>
                    diagnostique à domicile: ECG , ECO-Graphe , prélévements biologique,hospitalisation à domicile<br></br>
                    prise en charge des sujets âgés, et AMR, consultation multidisciplinaire,hospitalisation à domicile adaptée AMR, traitement et suivi<br></br>
                    cabinet Dr SEFIANE BENBRIK de gériatrie et diabétologie:<br></br>
                    consiltation et examen sur place<br></br>
                </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase mb-3" style={{textAlign:'left'}} >Quick links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Legal Notice</a></li>
                    <li><a href="#!">Terms of Sales</a></li> 
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase mb-3" style={{textAlign:'left'}}>Contact us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">05 00 000 000</a></li>
                    <li><a href="#!">contact@COMPAGNIONSHIP.com</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
  );
}
export default Copyright;
