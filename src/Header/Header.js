import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/headline.png";
import { Link } from "react-router-dom";
import "./styles.css";

function Header(props) {
  let menuArray = ["HOME", "FACULTY", "ABOUT", "GALLERY"];
  var selectedMenuItem = "HOME";
  const handleChange = (menuItem) => {
    console.log(menuItem);
    selectedMenuItem = menuItem;
  };
  return (
    <div>
      <Row className="navBar py-2 mx-0">
        <Col className="col-3"></Col>
        <Col className="col-6">
          <img src={logo} style={{ width: "100%" }}></img>
        </Col>
        <Col className="col-3"></Col>
      </Row>
      <Row className="navBar">
        <Row>
          {menuArray.map((menuItem, index) => (
            <Col
              className={
                selectedMenuItem == menuItem
                  ? "selectedMenuItem px-0"
                  : "menuItem px-0"
              }
            >
              <button
                to="/"
                className={
                  selectedMenuItem == menuItem
                    ? "selectedMenuItem btn-transperent"
                    : "menuItem btn-transperent"
                }
                onClick={handleChange(menuItem)}
              >
                {menuItem}
              </button>
            </Col>
          ))}
        </Row>
      </Row>
    </div>
  );
}

export { Header };
