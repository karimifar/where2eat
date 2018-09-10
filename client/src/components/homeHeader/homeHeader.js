import React from "react";
import "./homeHeader.css";

export const HomeHeader = props => (
  <div className="header">
    <div className="icon"><img src="./img/icon.png" /></div>
    <div className="nav">
      <a href="/signup">Signup</a>
      <a href="/">Home</a>
    </div>
  </div>
);

