import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Login />} errorElement={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
