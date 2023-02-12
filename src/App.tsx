import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Dashboard } from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter>
      <main className='relative'>
        <Routes>
          <Route path='/' element={<Login />} errorElement={<NotFound />} />
          <Route path='dashboard' element={<Dashboard />} errorElement={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
