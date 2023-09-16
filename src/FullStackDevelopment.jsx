import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./App.css";

function FullStackDevelopment() {
  return (
    <div className="container">
      <div className="card-container">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <a href="https://www.guvi.in/blog/top-full-stack-developer-tools/">
                <Card.Img variant="top" src="./images/Full1.jpg" />
              </a>
              <Card.Body>
                <Card.Title>
                  The Top 10 Tools Every Full Stack Developer Should Master in
                  2023
                </Card.Title>
                <Card.Text>
                  As a full stack developer, having the right set of tools is
                  crucial for your career.
                </Card.Text>
                <a
                  href="https://www.guvi.in/blog/top-full-stack-developer-tools/"
                  style={{ textAlign: "left", color: "green" }}
                >
                  READ MORE »
                </a>
              </Card.Body>
              <Card.Footer className="text-muted">
                5 August 2023 No Comments
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <a href="https://www.guvi.in/blog/top-must-know-full-stack-development-applications/">
                <Card.Img variant="top" src="./images/Full2.jpg" />
              </a>
              <Card.Body>
                <Card.Title>
                  The Ultimate Guide to Real-World Full Stack Development
                  Applications
                </Card.Title>
                <Card.Text>
                  Full stack development has become increasingly popular in
                  recent years, with companies seeking professionals who are
                  proficient in both front-end and back-end technologies.
                </Card.Text>
                <a
                  href="https://www.guvi.in/blog/top-must-know-full-stack-development-applications/"
                  style={{ textAlign: "left", color: "green" }}
                >
                  READ MORE »
                </a>
              </Card.Body>
              <Card.Footer className="text-muted">
                5 August 2023 No Comments
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <a href="https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/">
                <Card.Img variant="top" src="./images/Full3.jpg" />
              </a>
              <Card.Body>
                <Card.Title>
                  Best Ways to Learn Full Stack Development in 2023
                </Card.Title>
                <Card.Text>
                  Full stack development is and will be a promising and an
                  in-demand career in the tech industry. Here are some of the
                  best ways to kickstart your journey.
                </Card.Text>
                <a
                  href="https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/"
                  style={{ textAlign: "left", color: "green" }}
                >
                  READ MORE »
                </a>
              </Card.Body>
              <Card.Footer className="text-muted">
                4 August 2023 No Comments
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <a href="https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/">
                <Card.Img variant="top" src="./images/Full4.jpg" />
              </a>
              <Card.Body>
                <Card.Title>
                  How Long Would It Take to Be a Full Stack Developer?
                </Card.Title>
                <Card.Text>
                  Have you ever wondered how much time it would take to become a
                  skilled Full Stack Developer? Find out what it takes to embark
                  on this journey.
                </Card.Text>
                <a
                  href="https://www.guvi.in/blog/how-long-would-it-take-to-be-a-full-stack-developer/"
                  style={{ textAlign: "left", color: "green" }}
                >
                  READ MORE »
                </a>
              </Card.Body>
              <Card.Footer className="text-muted">
                4 August 2023 No Comments
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <a href="https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/">
                <Card.Img variant="top" src="./images/Full5.jpg" />
              </a>
              <Card.Body>
                <Card.Title>
                  Top Skills To Become a Full Stack Developer in 2023
                </Card.Title>
                <Card.Text>
                  Are you interested in becoming a great full-stack developer?
                  Discover the top skills you need to excel in this dynamic
                  field.
                </Card.Text>
                <a
                  href="https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/"
                  style={{ textAlign: "left", color: "green" }}
                >
                  READ MORE »
                </a>
              </Card.Body>
              <Card.Footer className="text-muted">
                3 August 2023 No Comments
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card>
              <a href="https://www.guvi.in/blog/top-full-stack-development-webinars-and-workshops/">
                <Card.Img variant="top" src="./images/Full6.jpg" />
              </a>
              <Card.Body>
                <Card.Title>
                  Top Full Stack Development Webinars and Workshops
                </Card.Title>
                <Card.Text>
                  Are you keen to elevate your web development skills and master
                  the art of Full Stack Development? Explore the top webinars
                  and workshops to help you on your journey.
                </Card.Text>
                <a
                  href="https://www.guvi.in/blog/top-full-stack-development-webinars-and-workshops/"
                  style={{ textAlign: "left", color: "green" }}
                >
                  READ MORE »
                </a>
              </Card.Body>
              <Card.Footer className="text-muted">
                29 July 2023 No Comments
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FullStackDevelopment;