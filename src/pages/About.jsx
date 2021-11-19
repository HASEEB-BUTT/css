import React, { Component, useState, useEffect } from "react";

function About() {
  const [aboutContent, setaboutContent] = useState("About Us Static Data");
  const [count, setcount] = useState(1);

  useEffect(() => {
    setaboutContent("new dynamic Data");
    console.log("use effect called again");
     
  }, [aboutContent]);

  const abc = () => {
    console.log(
      "abc called with thee help of useEffect Fucntion From about.jsx file"
    );
    setaboutContent("changed the about content state");
  };

//   const inc = () => {
//     setcount(count + 1);
//   };

  return (
    <div>
      <p>{aboutContent}</p>
      <p>{count}</p>
      <button onClick={abc}>Change Daata</button>
      <button onClick={()=>[setcount(3)]} >Change Count</button>
    </div>
  );
}

export default About;
