import React, { useEffect, useState } from "react";
import axios from "axios";
import Company from "./Company";
import styled from "styled-components";

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
      <div>
        <ul className="unorder">
          {companys &&
            companys.map((company, i) => (
              <li key={i}>
                <Company company={company} />
              </li>
            ))}
        </ul>
      </div>
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