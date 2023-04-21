import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousal from "./Carousal";
import styled from "styled-components";

const URL = "http://localhost:5000/content";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Carousals = () => {
    const [contents, setContents] = useState();
    useEffect(() => {
      fetchHandler().then((data) =>  setContents(data.contents));
    }, []);
    console.log(contents);
    return (
      <Lists>
      <div>
        <div className="unorder">
          {contents &&
            contents.map((content, i) => (
              <div key={i}>
                <Carousal content={content} className="cad"/>
              </div>
            ))}
        </div>
      </div>
      </Lists>
    );
}


export default Carousals;

const Lists=styled.div`

margin-left:1px;
.unorder{

}
.cad{
    margin-left:0px
}
`