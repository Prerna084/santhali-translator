import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import bgPattern from "./assets/bg-pattern.png";


function App() {
  return (
    <div
      className="min-h-screen w-full bg-repeat"
      style={{ backgroundImage: `url(${bgPattern})` }}
    >
      <Header />
      <Main />
     
      <Footer />
    </div>
  );
}
export default App;