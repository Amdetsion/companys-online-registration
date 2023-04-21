import React, { useEffect, useState } from "react";
import axios from "axios";
import About from "./About";
import styled from "styled-components";

const URL = "http://localhost:5000/content";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Abouts = () => {
    const [contents, setContents] = useState();
    useEffect(() => {
      fetchHandler().then((data) =>  setContents(data.contents));
    }, []);
    console.log(contents);
    return (
      <Lists>
      <div>
        <ul className="unorder">
          {contents &&
            contents.map((content, i) => (
              <li key={i}>
                <About content={content} />
              </li>
            ))}
        </ul>
      </div>
      </Lists>
    );
}


export default Abouts;

const Lists=styled.div`
margin-bottom:0px;
`