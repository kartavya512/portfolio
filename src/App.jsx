import { useRef, useState } from "react";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="h-screen bg-neutral-50 dark:bg-black">
      <Home />

      <About />
      <Services />
      <Work />
      <Testimonials />
      <Blog />

      <Contact />
    </div>
  );
}

export default App;
