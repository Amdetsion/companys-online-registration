import React, { useEffect, useState } from "react";
import axios from "axios";
import Update from "./Update";
import styled from "styled-components";

const URL = "http://localhost:5000/updates";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Updates = () => {
    const [updates, setUpdates] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setUpdates(data.updates));
    }, []);
    console.log(updates);
    return (
      <Lists>
      <div>
        <ul className="unorder">
          {updates &&
           updates.map((update, i) => (
              <li key={i}>
                <Update update={update} />
              </li>
            ))}
        </ul>
      </div>
      </Lists>
    );
}


export default Updates;

const Lists=styled.div`
.unorder{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 100px;
  flex-wrap: wrap;
}

`