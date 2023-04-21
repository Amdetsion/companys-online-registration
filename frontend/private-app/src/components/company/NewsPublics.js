import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsPubilic from "./NewsPubilic";
import styled from "styled-components";

const URL = "http://localhost:5000/news";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const NewsPubilics = () => {
    const [newss, setNews] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setNews(data.newss));
    }, []);
    console.log(newss);
    return (
      <Lists>
      <div>
        <ul className="unorder">
          {newss &&
            newss.map((news, i) => (
              <li key={i}>
                <NewsPubilic news={news} />
              </li>
            ))}
        </ul>
      </div>
      </Lists>
    );
}


export default NewsPubilics;

const Lists=styled.div`
.unorder{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 100px;
  flex-wrap: wrap;
}

`