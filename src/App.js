import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header'
import Section from './Components/Our Teams/Section'
import Contact from './Components/Contact/Contact'
import Terms from './Components/Terms/Terms'

import Donate from './Components/Donate/Donate'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Header />} />
          <Route path="/about" element={<Section />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Condition" element={<Terms />} />
          <Route path="/donation" element={<Donate />} />
          <Route path="*" element={<h1>404 Internal Server Error</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
