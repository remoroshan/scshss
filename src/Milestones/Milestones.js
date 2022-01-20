import { Row, Col, Button } from "react-bootstrap";
import cal from "../images/calendar.png";
import { Carousel } from "react-bootstrap";
import "./styles.css";

function Milestone(props) {
  let timelineArray = [
    {
      year: "1902",
      msg: "started as the first educational institution of the Mar Thoma Evangelistic Association",
    },
    {
      year: "1902 May 15",
      msg: "classes started in the ‘Meda’ of Kovoor Mr K.C. Iype Vakkeel",
    },
    {
      year: "1902 June 29",
      msg: "official inauguration as Syrian Christian Seminary School",
    },
    {
      year: "1906",
      msg: "SCSEALP School began",
    },
    {
      year: "1907",
      msg: "Double storied main building inaugurated by British resident RCC Kaar",
    },
    {
      year: "1932",
      msg: "Silver Jubilee Celebration",
    },
    {
      year: "1953",
      msg: "Golden Jubilee",
    },
    {
      year: "1965",
      msg: "Diamond Jubilee",
    },
    {
      year: "1980",
      msg: "Platinum Jubilee",
    },
    {
      year: "1992",
      msg: "Navati Celebration; inaugurated Navathi Smaraka Prayer Hall and Library",
    },
    {
      year: "1998",
      msg: "Upgraded as Higher Secondary School",
    },
    {
      year: "2002",
      msg: "Centenary Celebration",
    },
  ];

  return (
    <div>
      <Row className="mx-0 px-3">
        <Col>
          <Carousel
            className="my-3 timelineCarousel"
            interval={null}
            indicators={false}
          >
            {timelineArray.map((milestone, index) => (
              <Carousel.Item>
                <div className="timelineBox">
                  <div className="mt-3">
                    <img src={cal} style={{ width: "50px" }}></img>{" "}
                    <span style={{ verticalAlign: "middle", fontSize: "20px" }}>
                      Timeline
                    </span>
                  </div>
                  <div className="mx-0 px-3 my-3 timelineYear">
                    {milestone.year}
                  </div>
                  <div className="mx-0 px-3 mb-5">{milestone.msg}</div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
}

export { Milestone };
