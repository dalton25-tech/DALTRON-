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
import Aria from './pages/Aria'
import Sora from './pages/Sora'
import Orbit from './pages/Orbit'
import Luma from './pages/Luma'
import Beacon from './pages/Beacon'
import Keto from './pages/Keto'
import Sonic from './pages/Sonic'
import Saito from './pages/Saito'
import Oto from './pages/Oto'
import B4T from './pages/B4T'
import Hikari from './pages/Hikari'
import GIDEON from './pages/GIDEON'

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
        <Route path="/aria" element={<Aria />} />
        <Route path="/sora" element={<Sora />} />
        <Route path="/orbit" element={<Orbit />} />
        <Route path="/luma" element={<Luma />} />
        <Route path="/beacon" element={<Beacon />} />
        <Route path="/keto" element={<Keto />} />
        <Route path="/sonic" element={<Sonic />} />
        <Route path="/saito" element={<Saito />} />
        <Route path="/oto" element={<Oto />} />
        <Route path="/b4t" element={<B4T />} />
        <Route path="/hikari" element={<Hikari />} />
<Route path="/gideon" element={<Gideon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App