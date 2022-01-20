import { Row, Col, Button } from "react-bootstrap";
import logo from "../images/headline.png";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import "./styles.css";
import alumini1 from "../images/default-user.png";
import quote from "../images/quotes.png";

function Alumini(props) {
  let aluminiArray = [
    {
      name: "ABRAHAM KOSHY, New Zealand (old student)",
      image: alumini1,
      designation:
        "(Fond memories of Abraham Koshy(soj) Son of Late Mercy teacher (saramma Abraham)and Late Professor Koshy Abraham.) ",
      message:
        "My mother was teacher at SCS High school over 2 decades. I had the honour of being the school leader (School leader was then called Prime minister of school). I was Captain of School foot ball team. Represented the School as a champion athlete in the inter school district athletic  championships. Also was a member of school Basketball team. Enjoyed playing cricket at school grounds. Also has played abit of tennis old school tennis courts where Daddy and a few old boys then played . We had a lovely group of girls and boys in our class and Iam very glad that we still stay in touch. I will always cherish the guidance our Headmasters teachers gave us. SCS High School an esteemed institution will always remain in my mind with great fondness. I live in New Zealand. My younger sister and brother were old students of this great institution. They live in United States of America.",
    },
    {
      name: "Prof. Kurien John (old student)",
      image: alumini1,
      designation: "Former Principal of Mar Thoma College, Tiruvalla ",
      message:
        "I am Prof. Kurien John, former Principal of Mar Thoma College, Tiruvalla. The reminiscences and memories, I have about my school days(1966-1972), in S.C. Seminary High School, needs pages. My deep relationship with the school begins with my ancestral days. My grandfather Vidwan.C Kurien,Mathilumkal house, and my mother Mrs. Annamma John were teachers of this temple of education. Human values, Social out look, Spiritual Vision and sportsmanship were inculcated in us by our great teacher's andclassmates of the alma mater. Winning a few prizes in Malayalam Elocution competition, being a member of the Basketball team, which won the interfering Championship,a member of the Scout Squad present vivid memories. We were fortunate to witness and participate as Volunteers in two All India Science and Agricultural Exhibitions organised by the School authorities. My 'Pranamam' to all my beloved teachers and classmates.",
    },
    ,
    {
      name: "Jojy Cherian (Old Student)",
      image: alumini1,
      designation: "Operations Manager(Retd.) The Commercial Bank of Kuwait.",
      message:
        "Yes... I am the village boy who joined SCS in 1967. I hail from the village Pulincunno in Allleppy District.In those daysthere was not even a tarred road in my village and a good school was not even in our dreams! Moving to Thiruvalla those days was like relocating to London! In our school, I was one of the toppers standard but slipped to rank 15+ was rated as village till 5th at SCS 'some what satisfactory' and dearest teacher Ms. V V Mariamma in by my Class VI. That ranking definitely upset me, but I took it as a chance to realise the reality and my need to work hard to regain my lost glory.  My degrading by Mariamma teacher to just an avereage student and the words of our great Headmaster Idiculla Sir on the day I left SCS in 1971; who looked at my mark sheet and commented : 'Cherian; if you aim for a distinction you may get at least a first class' changed my life! There onwards I challenged myself and did not stop till my life prooved me that i was a reasonable success. I owe my life to my alma mater SC SEMINARY and its great faculty! When you at SCS, God is beside you by default! Success is guaranteed, provided you do what you are supposed to.",
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
                    <div>{alumini.name}</div>
                    <div>{alumini.designation}</div>
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
