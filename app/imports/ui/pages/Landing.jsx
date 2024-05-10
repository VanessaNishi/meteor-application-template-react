import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" className="py-3">
    <h1>A History of Surfing</h1>
    <div>Surfing is a surface water sport in which an individual, a surfer (or two in tandem surfing), uses a board to ride on the forward section, or face, of a moving wave of water, which usually carries the surfer towards the shore.
      Waves suitable for surfing are primarily found on ocean shores, but can also be found in standing waves in the open ocean, in lakes, in rivers in the form of a tidal bore, or in wave pools.
    </div>
    <Container style={{ textAlign: 'center' }} className="py-3">
      <Image src="../images/surf.jpeg" className="surfimage"/>
    </Container>
    <h2 className="py-3">Profiles</h2>
    <Row className="myRow">
      <Col>
        <Image src="../images/kenny-slater.jpg" width="200px" className="profileimage" />
        <h4 className="py-2">Kenny Slater</h4>
      </Col>
      <Col>
        <Image src="../images/stephanie.jpg " width="200px" className="profileimage" />
        <h4 className="py-2">Stephanie Gilmore</h4>
      </Col>
      <Col>
        <Image src="../images/andy.jpeg" width="200px" className="profileimage" />
        <h4 className="py-2">Andy Irons</h4>
      </Col>
    </Row>
  </Container>
);

export default Landing;
