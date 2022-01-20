import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/headline.png";
import { Link } from "react-router-dom";
import teacher1 from "../images/Salah.jpg";
import teacher2 from "../images/Mane.jpg";
import { Carousel } from "react-bootstrap";
import "./styles.css";

function Teachers(props) {
  let teachersArray = [
    { name: "Salah", image: teacher1, subject: "Forward" },
    { name: "Mane", image: teacher2, subject: "Forward" },
    { name: "Salah", image: teacher1, subject: "Mid" },
    { name: "Mane", image: teacher2, subject: "Mid" },
    { name: "Salah", image: teacher1, subject: "Def" },
    { name: "Mane", image: teacher2, subject: "Def" },
  ];
  var selectedMenuItem = "HOME";
  const handleChange = (menuItem) => {
    console.log(menuItem);
    selectedMenuItem = menuItem;
  };
  return (
    <div>
      <Row className="px-3 mx-0">
        <Col className="col-12">
          <Row className="px-3 mx-0 aboutSCS">Meet our Teachers</Row>
          <Row className="px-3 mx-0">
            <Carousel className="my-3" indicators={false}>
              {teachersArray.map((teacher, index) => (
                <Carousel.Item>
                  <Row>
                    <Col className="col-3">
                      <Row>
                        <img src={teacher.image}></img>
                      </Row>
                      <Row className="mx-0" style={{ fontSize: "20px" }}>
                        {teacher.name}
                      </Row>
                      <Row className="mx-0">{teacher.subject}</Row>
                    </Col>
                    <Col className="col-3">
                      <Row>
                        <img
                          src={
                            teachersArray[(index + 1) % teachersArray.length]
                              .image
                          }
                        ></img>
                      </Row>
                      <Row className="mx-0" style={{ fontSize: "20px" }}>
                        {teachersArray[(index + 1) % teachersArray.length].name}
                      </Row>
                      <Row className="mx-0">
                        {
                          teachersArray[(index + 1) % teachersArray.length]
                            .subject
                        }
                      </Row>
                    </Col>
                    <Col className="col-3">
                      <Row>
                        <img
                          src={
                            teachersArray[(index + 2) % teachersArray.length]
                              .image
                          }
                        ></img>
                      </Row>
                      <Row className=" mx-0" style={{ fontSize: "20px" }}>
                        {teachersArray[(index + 2) % teachersArray.length].name}
                      </Row>
                      <Row className=" mx-0">
                        {
                          teachersArray[(index + 2) % teachersArray.length]
                            .subject
                        }
                      </Row>
                    </Col>
                    <Col className="col-3">
                      <Row>
                        <img
                          src={
                            teachersArray[(index + 3) % teachersArray.length]
                              .image
                          }
                        ></img>
                      </Row>
                      <Row className=" mx-0 " style={{ fontSize: "20px" }}>
                        {teachersArray[(index + 3) % teachersArray.length].name}
                      </Row>
                      <Row className=" mx-0">
                        {
                          teachersArray[(index + 3) % teachersArray.length]
                            .subject
                        }
                      </Row>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
            '
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export { Teachers };
