import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
axios.defaults.withCredentials = true;
let firstRender = true;
const WelcomeAdmin = () => {
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const res = await axios
      .get("http://localhost:5000/admin/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const sednRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/admin/admins", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sednRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);

  return(
  <WElcome> <div><h1>Welcome Admin</h1>
  <div className="text-holder">
           <p className="texts">is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a 
             type specimen book. It has survived not only five centuries, but also the 
             leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently
             with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
             </div>
  </div>;
  </WElcome>
  )
};

export default WelcomeAdmin;

const WElcome=styled.div`
  margin-left:300px;
  margin-right:300px;
  margin-top:50px;
.text-holder{
  border: 2px solid blue;
  border-radius: 20px;
  margin-bottom:100px;
  margin-top:40px;
}
.texts{
  margin-top:50px;
  margin-bottom:50px;
  margin-left:30px;
  margin-right:30px;
}

`