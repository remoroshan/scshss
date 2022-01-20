import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/headline.png";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer(props) {
  let menuArray = ["HOME", "ALUMINI", "ABOUT", "GALLERY"];
  var selectedMenuItem = "HOME";
  const handleChange = (menuItem) => {
    selectedMenuItem = menuItem;
  };
  return (
    <div>
      <Row className="footer py-2 mx-0">
        <Col className="col-12">
          <Col className="footerItem">
            {/* <button
                  className="footerItem btn-transperent"
                  onClick={handleChange(menuItem)}
                >
                  | {menuItem} |
                </button> */}
            Phone : 0469-2630859 , 0469-2604786
          </Col>
          <Col className="footerItem">Email : scshstvla@gmail.com</Col>
        </Col>
      </Row>
    </div>
  );
}

export { Footer };
