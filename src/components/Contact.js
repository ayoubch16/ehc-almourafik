import { Form, Button,Container,Row,Col,InputGroup,FloatingLabel} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
    return (
        <Container id='Contact' className='my-3 py-3'>
        <h3 className='title'><b>Contact &#38; RDV </b> EHC AL MOURAFIK</h3>
            <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Col>
                            <Form.Group as={Col}  controlId="validationCustom01">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Nom"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" required placeholder="name@example.com" />
                                    </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="validationCustom02">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Telephone"
                                        className="mb-3"
                                    >
                                        <Form.Control type="tel" required placeholder="name@example.com" />
                                    </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="validationCustom03">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" required placeholder="name@example.com" />
                                    </FloatingLabel>
                            </Form.Group>
                            <Form.Group as={Col}  controlId="validationCustom04">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Ville"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" required placeholder="name@example.com" />
                                    </FloatingLabel>
                            </Form.Group>
                    </Col>
                    <Col>
                            <Form.Group as={Col}  controlId="validationCustom05">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Prenom"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" required placeholder="name@example.com" />
                                    </FloatingLabel>
                            </Form.Group>

                            <Form.Group as={Col}  controlId="validationCustom06">
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                    as="textarea"
                                    required
                                    placeholder="Leave a comment here"
                                    style={{ height: '200px' }}
                                    />
                                </FloatingLabel>
                            </Form.Group>

                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                    required
                    label="Accepter les Conditions Générales de EHC ALMOURAFIK. "
                    feedback="Vous Devez Accepter Avant De Envoyer Les Informations ."
                    feedbackType="invalid"
                    />
                </Form.Group>
                {/* <Button className='btnC' type="submit">Submit form</Button> */}
                {/* <Button variant="outline-primary"  type="submit">Primary</Button> */}
                <input className='btnC mx-1' type='submit' value='Envoyer' />
                <a className='btnC mx-1' href='tel:0710313000'><FontAwesomeIcon icon={faPhone} /> Appler</a>
            </Form>
        </Container>
    );
  }
  export default Contact;
  

  