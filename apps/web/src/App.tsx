import './App.css'

import Hero from './components/Hero'
import Products from './components/Products'
import Ecosystem from './components/Ecosystem'
import Vision from './components/Vision'
import Hardware from './components/Hardware'
import Intelligence from './components/Intelligence'
import Cloud from './components/Cloud'
import Platform from './components/Platform'
import Innovation from './components/Innovation'
import Company from './components/Company'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Nexa from './pages/Nexa'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Navbar />

      <Hero />
      <Products />
      <Ecosystem />
      <Vision />
      <Hardware />
      <Intelligence />

      <Hero />
      <Products />
      <Ecosystem />
      <Vision />
      <Hardware />
      <Intelligence />
      <Cloud />
      <Platform />
      <Innovation />
      <Company />
      <CTA />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nexa" element={<Nexa />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App