import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/headline.png";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./styles.css";
import alumini1 from "../images/Salah.jpg";
import alumini2 from "../images/Mane.jpg";
import quote from "../images/quotes.png";

function Alumini(props) {
  let aluminiArray = [
    {
      name: "Alumini",
      image: alumini1,
      designation: "Forward",
      message:
        "This College was a learning and transforming academy in all perspective be it studies, co-curricular activities, always supporting lecturers. I wish many more techies grow up from AIISM and make Anjuman proud for sharing knowledge and transforming students.",
    },
    {
      name: "ASD",
      image: alumini2,
      designation: "Forward",
      message:
        "This College was a learning and transforming academy in all perspective be it studies, co-curricular activities, always supporting lecturers. I wish many more techies grow up from AIISM and make Anjuman proud for sharing knowledge and transforming students.",
    },
    ,
    {
      name: "abc",
      image: alumini1,
      designation: "Mid",
      message:
        "This College was a learning and transforming academy in all perspective be it studies, co-curricular activities, always supporting lecturers. I wish many more techies grow up from AIISM and make Anjuman proud for sharing knowledge and transforming students.",
    },
    ,
  ];
  var selectedMenuItem = "HOME";

  return (
    <div>
      <Row className="mx-0 px-3">
        <Col>
          <Carousel
            className="my-3 aluminiCarousel"
            interval={null}
            indicators={false}
          >
            {aluminiArray.map((alumini, index) => (
              <Carousel.Item>
                <div className="aluminiBox">
                  <Row className="mx-0 px-3 my-3">
                    <img src={quote} style={{ width: "50px" }}></img>
                  </Row>
                  <Row className="mx-0 px-3 my-3">{alumini.message}</Row>
                  <Row className="mx-0 px-3 mb-5">
                    <div>
                      <img src={alumini.image} style={{ width: "74px" }}></img>{" "}
                    </div>
                    <div>
                      {alumini.name}, {alumini.designation}
                    </div>
                  </Row>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export { Alumini };
