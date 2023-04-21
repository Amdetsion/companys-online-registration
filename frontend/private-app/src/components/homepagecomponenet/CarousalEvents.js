import React, { useEffect, useState } from "react";
import axios from "axios";
import Company from "./CarousalEvent";
import styled from "styled-components";
import Container from "react-bootstrap/esm/Container";
import Row  from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Carousel from 'react-grid-carousel'
const URL = "http://localhost:5000/companies";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Companys = () => {
    const [companys, setCompanys] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setCompanys(data.companys));
    }, []);
    console.log(companys);
    return (
      <Lists>
      <Container>
      
       
          {companys &&
            companys.map((company, i) => (
              <Row>
             <Col>
                <Company company={company} />
                </Col>
                </Row>
            ))}
            
      
      </Container>
      </Lists>
    );
}


export default Companys;

const Lists=styled.div`
.unorder{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 100px;
  flex-wrap: wrap;
}

`