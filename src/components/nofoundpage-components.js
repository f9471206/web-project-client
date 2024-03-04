import React from "react";
import { Link } from "react-router-dom";

function NofoundPageComponents() {
  return (
    <div className="p-5 text-center">
      <h1>你所尋找的頁面不存在</h1>
      <Link to={"/"}>回到首頁</Link>
    </div>
  );
}

export default NofoundPageComponents;
