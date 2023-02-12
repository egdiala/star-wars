import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Dashboard } from './pages/Dashboard'
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} errorElement={<NotFound />} />
          <Route path='dashboard' element={<Dashboard />} errorElement={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
