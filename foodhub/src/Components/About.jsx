import React from "react";
import AboutCardFunction from "./AboutCardFunction";
import AboutCardClass from "./AboutCardClass";

const About = () => {
  return (
    <div className="m-5">
      <div className="text-2xl font-bold">This is About page for the Sweegy Clone App Made just for practice.</div>
      <AboutCardFunction name={"Akash Vasava"} location={"Vadodara"} contact={"akashj.vasava@gmail.com"} />
      <AboutCardClass name={"Akash Vasava"} location={"Vadodara"} contact={"akashj.vasava@gmail.com"} />
    </div>
  );
};

export default About;
