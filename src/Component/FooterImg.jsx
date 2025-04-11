import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FooterImg() {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={3} xl={3} className="p-0">
          <Card className="p-0" style={{ height: "550px" }}>
            <Card.Img
              style={{ height: "300px" }}
              variant="top"
              src="https://cm.meteoam.it/content/published/api/v1.1/assets/CONTEBD4A2AA0EB04CE7B77E12A484D4744C/native?channelToken=90a0cce26af74a33bdbde897168893ea"
            />
            <Card.Body>
              <Card.Title>
                <div>
                  {" "}
                  <p className="fs-6 text-white">
                    <span className="p-1 info">In primo piano</span>
                  </p>
                </div>
              </Card.Title>
              <Card.Text className="fs-4 moreBlue fw-bold">
                Quando un vulcano erutta: dietro alle quinte della sala
                previsioni del CNMCA
              </Card.Text>
              <Button variant="primary">Scopri di più</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xl={3} className="p-0">
          <Card className="p-0" style={{ height: "550px" }}>
            <Card.Img
              style={{ height: "300px" }}
              variant="top"
              src="https://cm.meteoam.it/content/published/api/v1.1/assets/CONTC2F03218BE9E4D0FBF01FE2B5E678F93/native?channelToken=90a0cce26af74a33bdbde897168893ea"
            />
            <Card.Body>
              <div>
                {" "}
                <p className="fs-6 text-white">
                  <span className="p-1 info">In primo piano</span>
                </p>
              </div>
              <Card.Text className="fs-4 moreBlue fw-bold">
                L'equinozio di primavera
              </Card.Text>
              <Button variant="primary">Scopri di più</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xl={3} className="p-0">
          <Card className="p-0" style={{ height: "550px" }}>
            <Card.Img
              style={{ height: "300px" }}
              variant="top"
              src="https://cm.meteoam.it/content/published/api/v1.1/assets/CONT5E83240555FC4BE593E552A13619F219/native?channelToken=90a0cce26af74a33bdbde897168893ea"
            />
            <Card.Body>
              <div>
                {" "}
                <p className="fs-6 text-white">
                  <span className="p-1 info">In primo piano</span>
                </p>
              </div>
              <Card.Text className="fs-4 moreBlue fw-bold">
                I colori del cielo: Fenomeni ottici e atmosferici
              </Card.Text>
              <Button variant="primary">Scopri di più</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} xl={3} className="p-0">
          <Card className="p-0" style={{ height: "550px" }}>
            <Card.Img
              style={{ height: "300px" }}
              variant="top"
              src="https://cm.meteoam.it/content/published/api/v1.1/assets/CONT2125531D6EDC48B49F312BB1B933A751/native?channelToken=90a0cce26af74a33bdbde897168893ea"
            />
            <Card.Body>
              <div>
                {" "}
                <p className="fs-6 text-white">
                  <span className="p-1 info">In primo piano</span>
                </p>
              </div>
              <Card.Text className="fs-4 moreBlue fw-bold">
                I fulmini la firma elettrica dell'atmosfera
              </Card.Text>
              <Button variant="primary">Scopri di più</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FooterImg;
