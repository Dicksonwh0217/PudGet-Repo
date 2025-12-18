import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Authentication } from './pages/Authentication/Authentication'
import { HomePage } from './pages/HomePage'


function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='auth' element={<Authentication />} />
    </Routes>
  )
}

export default App
