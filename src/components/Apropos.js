import { Container, Row,Card,Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie,faUser } from '@fortawesome/free-solid-svg-icons'
import user1 from '../image/image-2.webp'
import user2 from '../image/profile.png'

function Apropos() {
  return (
      <Container id="Apropos">
            <h3 className='title'><b>A Propos </b> EHC AL MOURAFIK</h3>
            <Row xs={1} sm={2} md={3} lg={4}  className="text-center g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={user1} />
                            <Card.Body>
                            <Card.Title>Card title 1</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={user1} />
                            <Card.Body>
                            <Card.Title>Card title 2</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={user1} />
                            <Card.Body>
                            <Card.Title>Card title 3</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={user1} />
                            <Card.Body>
                            <Card.Title>Card title 4</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={user1} />
                            <Card.Body>
                            <Card.Title>Card title 5</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

            </Row>
      </Container>
  );
}
export default Apropos;
