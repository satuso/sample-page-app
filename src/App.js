import React from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Nav from "./components/Nav"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App