import React, { useEffect, useState } from "react";
import Header from "../Components/Header";

const About = () => {
  useEffect(() => {
    window.alert("button di klik");
  }, []);

  const [show, setShow] = useState(false);
  return (
    <div>
      <Header />
      <h1>About</h1>
      <button onClick={() => setShow(!show)}>show details</button>
      {show && <p>ini halaman about</p>}
    </div>
  );
};

export default About;
