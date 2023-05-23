import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Slider from "./Pages/Slider/Slider";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  if (window.location.pathname === "/slider") {
    return <Slider></Slider>;
  }

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
