import React, { useEffect, useState } from "react";
import axios from "axios";
import News from "./News";
import styled from "styled-components";

const URL = "http://localhost:5000/content";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Newss = () => {
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
                <News content={content} />
              </li>
            ))}
        </ul>
      </div>
      </Lists>
    );
}


export default Newss;

const Lists=styled.div`
.unorder{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 100px;
  flex-wrap: wrap;
}

`