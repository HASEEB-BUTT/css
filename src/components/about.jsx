import React, { Component, useState } from "react";
import AboutChild from "./AboutChild";
// import React from 'react'

function About() {
  // const [count, setcount] = useState(0);
  const [names, setnames] = useState("Muhammad Haseeb Butt");
  const [cities, setcities] = useState(["Rawalpindi","Islamabad","Lahore"]);
  const [medicines, setmedicines] = useState({
                "medications": [{
                    "aceInhibitors": [{
                        "name": "lisinopril",
                        "strength": "10 mg Tab",
                        "dose": "1 tab",
                        "route": "PO",
                        "sig": "daily",
                        "pillCount": "#90",
                        "refills": "Refill 3"
                    },
                    {
                        "name": "lisinopril",
                        "strength": "10 mg Tab",
                        "dose": "1 tab",
                        "route": "Sho",
                        "sig": "daily",
                        "pillCount": "#90",
                        "refills": "Refill 3"
                    }],
                    "antianginal": [{
                        "name": "nitroglycerin",
                        "strength": "0.4 mg Sublingual Tab",
                        "dose": "1 tab",
                        "route": "SL",
                        "sig": "q15min PRN",
                        "pillCount": "#30",
                        "refills": "Refill 1"
                    }],
                    "anticoagulants": [{
                        "name": "warfarin sodium",
                        "strength": "3 mg Tab",
                        "dose": "1 tab",
                        "route": "PO",
                        "sig": "daily",
                        "pillCount": "#90",
                        "refills": "Refill 3"
                    },
                    {
                        "name": "DUMMY DATA",
                        "strength": "3 mg Tab",
                        "dose": "1 tab",
                        "route": "PO",
                        "sig": "daily",
                        "pillCount": "#90",
                        "refills": "Refill 3"
                    }],
                    "betaBlocker": [{
                        "name": "metoprolol tartrate",
                        "strength": "25 mg Tab",
                        "dose": "1 tab",
                        "route": "PO",
                        "sig": "daily",
                        "pillCount": "#90",
                        "refills": "Refill 3"
                    }],
                    "diuretic": [{
                        "name": "furosemide",
                        "strength": "40 mg Tab",
                        "dose": "1 tab",
                        "route": "PO",
                        "sig": "daily",
                        "pillCount": "#90",
                        "refills": "Refill 3"
                    }],
                    "mineral": [{
                        "name": "potassium chloride ER",
                        "strength": "10 mEq Tab",
                        "dose": "1 tab",
                        "route": "PO",
                        "sig": "daily",
                        "pillCount": "#90",
                        "refills": "Refill 3"
                    }]
                }
                ],
                "labs": [{
                    "name": "Arterial Blood Gas",
                    "time": "Today",
                    "location": "Main Hospital Lab"
                },
                {
                    "name": "BMP",
                    "time": "Today",
                    "location": "Primary Care Clinic"
                },
                {
                    "name": "BNP",
                    "time": "9 Weeks",
                    "location": "Primary Care Clinic"
                },
                {
                    "name": "BUN",
                    "time": "1 Year",
                    "location": "Primary Care Clinic"
                },
                {
                    "name": "Cardiac Enzymes",
                    "time": "Today",
                    "location": "Primary Care Clinic"
                },
                {
                    "name": "CBC",
                    "time": "1 Year",
                    "location": "Primary Care Clinic"
                },
                {
                    "name": "Creatinine",
                    "time": "1 Year",
                    "location": "Main Hospital Lab"
                },
                {
                    "name": "Electrolyte Panel",
                    "time": "1 Year",
                    "location": "Primary Care Clinic"
                },
                {
                    "name": "Glucose",
                    "time": "1 Year",
                    "location": "Main Hospital Lab"
                },
                {
                    "name": "PT/INR",
                    "time": "999 Weeks",
                    "location": "Primary Care Clinic"
                },
                {
                    "name": "PTT",
                    "time": "3 Weeks",
                    "location": "Coumadin Clinic"
                },
                {
                    "name": "TSH",
                    "time": "1 Year",
                    "location": "Primary Care Clinic"
                }
                ],
                "imaging": [{
                    "name": "Chest X-Ray",
                    "time": "Today",
                    "location": "Main Hospital Radiology"
                },
                {
                    "name": "Chest X-Ray",
                    "time": "Today",
                    "location": "Main Hospital Radiology"
                },
                {
                    "name": "Chest X-Ray",
                    "time": "Today",
                    "location": "Main Hospital Radiology"
                }
                ]
            });

          

  // const incCount = () => {

  //   setcount(count + 1);
  //   const jobs=[
  //       {id:1, isActive:true},
  //       {id:2, isActive:false},
  //       {id:3, isActive:true},
  //   ];
  //   const jobList=jobs.filter((job)=>job.isActive);
  //   console.log(jobList);
  //   console.log("Submit Is clicked");
  // };


  // const decCount = () => {
  //   setcount(count - 1);
  //   console.log("Submit Is clicked");
  // };

  return (
    // 2 ways in react to make a function
    // simple ways

    // function incCount(){

    // }
    //Arrow Function

    <div>
        {
              medicines.medications[0].aceInhibitors.map((m)=>
            (  <ul>
                <li>{m.name}</li>
                <li>{m.route == "Sho" ? "Haseeb" : m.route}</li>
              </ul>
            )          
            )}
      <h1>My Information</h1>
      <p>Bcs183149</p>
      {/* <p>{name}</p> */}
      {/* <p>Count is {count}</p> */}
    {/* //direct calling the index of array */}
    
    {/* <p>{cities[1]}</p>
    
      {
        cities[0]=="Rawalpindi" ? (
        <p>This is Rawalpindi</p>
        ): (
            <p>City is {cities[0]}</p>
        )
    }
<br /> */}
    {/* loop in reactjs
      {
          cities.map((color)=>(
              <li>{color}</li>
          ))
      } */}
      

      {/* spread operator makes a copy of the array or json objects to be concatenated */}

      {/* <button onClick={incCount}>Increment</button>
      <button onClick={decCount}>Decrement</button> */}

<AboutChild name={names} />
    </div>
  );
}

export default About;
