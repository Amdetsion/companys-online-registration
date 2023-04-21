import React, { useEffect, useState } from "react";
import axios from "axios";
import Company from "./PublicEvent";
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
       
          {events &&
            events.map((event, i) => (
              <div key={i}>
                <Company event={event} />
              </div>
            ))}
        
      </div>
      </Lists>
    );
}


export default Events;

const Lists=styled.div`
margin-bottom:100px;
.unorder{
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 100px;
  flex-wrap: wrap;
}

`