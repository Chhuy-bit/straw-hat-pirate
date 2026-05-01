import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Characters from "./components/Characters"; // Section ដែលមាន mapping CharacterCard
import Story from "./components/story";
import Bounty from "./components/Bounty"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const MainLayout = () => (
  <main className="relative min-h-screen w-screen overflow-x-hidden bg-zinc-950">
    <Hero />
    <section id="about"><About /></section>
    <section id = "characters" ><Characters /></section>
    <section id = "bounty" ><Bounty /></section>
    <section id = "contact" ><Contact /></section>
    <section id = "footer" ><Footer /></section>
  </main>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/story/:id" element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;