import App from "./App";
import Home from "./Home.js";
import Contact from "./Contact.js";
import About from "./About.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom"
import "./index.css"

function Routers() {
return (
<Router>
    <ul className="list">
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
    <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
    </Routes>
    <footer>
        <h1>The End</h1>
    </footer>
</Router>
);
}

export default Routers;