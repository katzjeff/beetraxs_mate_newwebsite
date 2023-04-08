import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import AboutUs from "./components/AboutUs";
import WhatYouGet from "./components/WhatYouGet";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import beetraxsapp from "./assets/logo_main.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Feature />
      <AboutUs />
      <WhatYouGet />
      <JoinUs />
      <Footer />
      <div>
        <a href="https://www.beetraxsmate.com" target="_blank">
          <img src={beetraxsapp} className="logo" alt="beetraxs_logo" />
        </a>
      </div>
      <h1>Upcoming BEETRaXs-M.A.T.E website</h1>
      <div className="card"></div>
      <p className="read-the-docs">
        Click on the BEETRaXs Logo to learn more about our solution...
      </p>
    </div>
  );
}

export default App;
