import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Users" element={<Users/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
