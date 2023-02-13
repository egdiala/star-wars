import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Dashboard } from './pages/Dashboard'
import { Starships } from './pages/Starships'
import { People } from './pages/People'
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} errorElement={<NotFound />} />
          <Route path='dashboard' element={<Dashboard />} errorElement={<NotFound />} />
          <Route path='starships' element={<Starships />} errorElement={<NotFound />} />
          <Route path='people' element={<People />} errorElement={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
