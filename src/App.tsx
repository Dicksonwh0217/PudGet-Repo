import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Authentication } from './pages/Authentication/Authentication'
import { HomePage } from './pages/HomePage'
import { Feature } from './pages/Feature/Feature'
import { Company } from './pages/Company/Company'
import { About } from './pages/About/About'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='features' element={<Feature />} />
      <Route path='company' element={<Company />} />
      <Route path='about' element={<About />} />
    </Routes>
  )
}

export default App
