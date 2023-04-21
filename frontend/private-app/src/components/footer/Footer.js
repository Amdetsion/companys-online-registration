import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Social';

export default function Footer() {
  return (
    <Fuck>
      <div className="contai">
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row className="secondcol">
            <Col>
              <h1 className="headerone">
                <u className="under">LINK</u>
              </h1>
              <h5 className='sublink'>link-one</h5>
              <h5 className='sublink'>link-two</h5>
              <h5 className='sublink'>link-two</h5>
            </Col>
            <Col className="coltwo">
              <h1 className="headerone">
                <u className="under">LINK</u>
              </h1>
              <h5 className='sublink'>link-one</h5>
              <h5 className='sublink'>link-two</h5>
              <h5 className='sublink'>link-two</h5>
            </Col>
            <Col className="colthree">
              <h1 className="headerone">
                <u className="under">LINK</u>
              </h1>
              <h5 className='sublink'>link-one</h5>
              <h5 className='sublink'>link-two</h5>
              <h5 className='sublink'>link-two</h5>
            </Col>
          </Row>
          <Row>
            <Col className="secondrow">
              <p className="copy">
                &copy;{new Date().getFullYear()} THICC MEMES | All rights
                reserved | Terms Of Service | Privacy
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Fuck>
  );
}

const Fuck = styled.div`
  margin-top: 0px;
  .contai {
    background-color: #4169e1;
    border-radius: 5px;
    margin-left: 0px;
    margin-right: 0px;
    width: 1350px;
  }
  .headerone {
    color: white;
  }
  .under {
  }
  .colthree {
    padding-left: 140px;
  }
  .coltwo {
    padding-left: 140px;
  }
  .secondrow {
    border-top: 2px solid white;
  }
  .copy {
    padding-left: 300px;
  }
  .secondcol {
    padding-top: 35px;
  }
  .sublink{
    color:#FAF9F6;
  }
`;
