import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/headline.png";
import { Link } from "react-router-dom";
import alumini1 from "../images/mmam.png";
import alumini2 from "../images/mtt.png";
import alumini3 from "../images/malayattoor.png";
import alumini4 from "../images/kgg.png";
import alumini5 from "../images/blessy.png";
import { Carousel } from "react-bootstrap";
import "./styles.css";

function Teachers(props) {
  var x = window.matchMedia("(max-width: 700px)");
  let teachersArray = [
    { name: "Rt.Rev.Dr. Mathews Mar Athanasius", image: alumini1, subject: "" },
    {
      name: "Sri Mathew T.Thomas",
      image: alumini2,
      subject: "MLA, Ex. Minister",
    },
    {
      name: "Sri Malayattoor Ramakrishnan",
      image: alumini3,
      subject: "Novelist",
    },
    { name: "Sri Blessy", image: alumini5, subject: "Film Director" },
    { name: "Sri K.G George", image: alumini4, subject: "Film Maker" },
  ];

  return (
    <div>
      <Row className="px-3 mx-0">
        <Col className="col-12">
          <Row className="px-3 mx-0 aboutSCS">Renowned Alumini</Row>
          <Row className="px-3 mx-0">
            {!x.matches ? (
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
                          {
                            teachersArray[(index + 1) % teachersArray.length]
                              .name
                          }
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
                          {
                            teachersArray[(index + 2) % teachersArray.length]
                              .name
                          }
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
                          {
                            teachersArray[(index + 3) % teachersArray.length]
                              .name
                          }
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
            ) : (
              <Carousel className="my-3" indicators={false}>
                {teachersArray.map((teacher, index) => (
                  <Carousel.Item>
                    <Row>
                      <Col className="">
                        <Row>
                          <img src={teacher.image}></img>
                        </Row>
                        <Row className="mx-0" style={{ fontSize: "20px" }}>
                          {teacher.name}
                        </Row>
                        <Row className="mx-0">{teacher.subject}</Row>
                      </Col>
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export { Teachers };
