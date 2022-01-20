import React from "react";
import { Carousel } from "react-bootstrap";
import { Header } from "../Header/Header";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
import image2 from "../images/principal.png";
import image3 from "../images/hm.png";
import caro1 from "../images/main.png";
import caro2 from "../images/hss.png";
import caro3 from "../images/green.png";
import caro4 from "../images/jubily.png";
import caro5 from "../images/jb.JPG";
import caro6 from "../images/SGHSS.jpg";
import about from "../images/about.png";
import { Footer } from "../Footer/Footer";
import { Teachers } from "../Teachers/Teachers";
import { Alumini } from "../Alumini/Alumini";
import { Milestone } from "../Milestones/Milestones";

function Home(props) {
  let imgArray = [caro1, caro2, caro3, caro4, caro5, caro6];
  return (
    <React.Fragment>
      <Header></Header>
      <Carousel className="my-3">
        {imgArray.map((image, index) => (
          <Carousel.Item>
            <img src={image} className="d-block w-100"></img>
          </Carousel.Item>
        ))}
      </Carousel>
      <Col className="mb-3">
        <Row className="announcements px-3">
          <Col xs={12} className="col-md-4 messageHeading ">
            Announcements:
          </Col>
          <Col xs={12} className="col-md-8 message">
            There will be no offline classes for STD V to IX temporarily.
          </Col>
        </Row>
      </Col>
      <Col className="px-3 mx-0 aboutMain">
        <Row className="mb-3 px-3 mx-0">
          <Row className="mb-2 mx-0">
            <Col className="aboutSCS"> About SCS </Col>
          </Row>
          <Row className="px-3 mx-0">
            <Col xs={12} className="col-md-4  mb-3">
              <Row>
                <img src={about} style={{ width: "100%" }}></img>
              </Row>
              <Row className=" mx-0 my-2" style={{ fontSize: "20px" }}>
                Know More About The SCS
              </Row>
              <Row className=" mx-0" style={{ textAlign: "left" }}>
                Syrian Christian Seminary Higher Secondary School Thiruvalla,
                started as a boys’ elementary school way back in 1902 with a
                mission has now blazed it’s trail majestically to a widely
                acclaimed co-educational higher secondary institution and marked
                it’s name boldly in golden letters in the educational history of
                Kerala. Now spread across a vast area with premium modern
                facilities, the institution nurtures the children with the best
                curricular, co-curricular and extra-curricular activities and
                helps them building good social sense. Situated at the heart of
                the city, it is quite easy for the children to come over to the
                school and the campus is absolutely an enchanting abode for
                them. The astounding feature of the school is the tradition and
                the value oriented education which is being followed right
                through.
              </Row>
            </Col>
            <Col xs={12} className="col-md-4   mb-3">
              <Row>
                <img src={image2} style={{ width: "100%" }}></img>
              </Row>
              <Row className=" mx-0 my-2" style={{ fontSize: "20px" }}>
                Message from principal
              </Row>
              <Row className=" mx-0" style={{ textAlign: "left" }}>
                It’s all a privilege to be a part of this educational
                institution and be the successor of so many pioneer pillars of
                administration who have proved their vibrant mettle in the field
                of education. Thousands of students paved their way with tiny
                legs through the sands of this campus and sailed successfully
                into the wuthering heights of various social domains. The
                institution has done an impeccable service to generations,
                bringing up the educational standards to a higher level and is
                still going on relentlessly. I know that the saga will continue
                and the dome of Syrian Christian Seminary Higher Secondary
                School Thiruvalla will definitely scrap the sky forever.
              </Row>
            </Col>
            <Col xs={12} className="col-md-4  mb-3">
              <Row>
                <img src={image3} style={{ width: "100%" }}></img>
              </Row>
              <Row className=" mx-0 my-2" style={{ fontSize: "20px" }}>
                Message from headmaster
              </Row>
              <Row className=" mx-0" style={{ textAlign: "left" }}>
                The SC Seminary hill has proved that it is truly the centre of
                education in Central Travancore for more than a century. The
                green rich campus, the prestigious Gothic style educational
                castle, the huge playground and the long high school and higher
                secondary buildings, the boarding home and all blended perfectly
                into this portrait to form an incredible art of educational
                complex. How glad I am, after securing the professional
                graduation for education from the same campus, finally been
                elated as the headmistress of this school. A huge number of
                eminent personalities shared their cheers and tears here and
                still keeping those nostalgic memories in their mind brightly.
                It’s a fortune I spend my glorious moments here both as a
                teacher and as a headmistress.
              </Row>
            </Col>
          </Row>
        </Row>
      </Col>
      <Teachers></Teachers>
      <Col>
        <Row className=" px-3 mx-0 my-3 ">
          <Col xs={12} className="col-md-8">
            <Alumini></Alumini>
          </Col>
          <Col xs={12} className="col-md-4">
            <Milestone></Milestone>
          </Col>
        </Row>
      </Col>
      <Footer></Footer>
    </React.Fragment>
  );
}

export { Home };
