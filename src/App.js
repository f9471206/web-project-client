import { useState } from "react";
import { useRoutes } from "react-router-dom";
import routers from "./routers";

import "./styles/style.css";

function App() {
  const [data, setData] = useState("");

  const element = useRoutes(routers(data, setData));

  return <div>{element}</div>;
}

export default App;
