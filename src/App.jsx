import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Navbar from "./component/Navbar";
// import Slidebar from "./component/Slidebar";
// import Card from "./component/Card";
// import Contact from "./component/Contact";
import Card1 from "./component/Card1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar />
      <Slidebar />
      <Card />
      <Card />
      <Card />
      // <Contact /> */}
       <Card1/>

    </>
  );
}

export default App;
