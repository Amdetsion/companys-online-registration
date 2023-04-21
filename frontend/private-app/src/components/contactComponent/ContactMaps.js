import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactMap from "./ContactMap";
import styled from "styled-components";

const URL = "http://localhost:5000/content";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const ContactMaps = () => {
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
                <ContactMap content={content} />
              </li>
            ))}
        </ul>
      </div>
      </Lists>
    );
}


export default ContactMaps;

const Lists=styled.div`
.unorder{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 100px;
  flex-wrap: wrap;
}

`