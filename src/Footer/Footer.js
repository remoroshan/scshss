import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/headline.png";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer(props) {
  let menuArray = ["HOME", "FACULTY", "ABOUT", "GALLERY"];
  var selectedMenuItem = "HOME";
  const handleChange = (menuItem) => {
    console.log(menuItem);
    selectedMenuItem = menuItem;
  };
  return (
    <div>
      <Row className="footer py-2 mx-0">
        <Col className="col-6">
          <Row>
            {menuArray.map((menuItem, index) => (
              <Col className="footerItem">
                <button
                  className="footerItem btn-transperent"
                  onClick={handleChange(menuItem)}
                >
                  | {menuItem} |
                </button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export { Footer };
