import React, { useEffect, useState } from "react";
import axios from "axios";
import Company from "./Event";
import styled from "styled-components";

const URL = "http://localhost:5000/events";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Events = () => {
    const [events, setEvents] = useState();
    useEffect(() => {
      fetchHandler().then((data) => setEvents(data.events));
    }, []);
    console.log(events);
    return (
      <Lists>
      <div>
        <ul className="unorder">
          {events &&
            events.map((event, i) => (
              <li key={i}>
                <Company event={event} />
              </li>
            ))}
        </ul>
      </div>
      </Lists>
    );
}


export default Events;

const Lists=styled.div`
.unorder{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 100px;
  flex-wrap: wrap;
}

`