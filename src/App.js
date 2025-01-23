import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <NavBar/>
      <Container>

        <Row>
          <h2 className="py-3" >Name Identifier IDE Plugin</h2>
          <Col>Picture</Col>
          <Col>Project Description</Col>
        </Row>

        <Row>
          <h2 className="py-3">Progress</h2>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Our Progress
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>

        <Row>
          <h2 className="py-3">Members</h2>
          <Col> 1 </Col>
          <Col> 2 </Col>
          <Col> 3 </Col>
        </Row>
    </Container>
      <Footer/>
    </div>
  );
}

export default App;
