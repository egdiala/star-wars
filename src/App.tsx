import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Login } from './pages/auth/Login'
import { NotFound } from './pages/NotFound'
import { Dashboard } from './pages/Dashboard'
import { Starships } from './pages/Starships'
import { People } from './pages/People'
import { Species } from './pages/Species'
import DashboardLayout from './layouts/DashboardLayout'
import { View } from './pages/View'
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} errorElement={<NotFound />} />
        <Route element={<DashboardLayout />}>
          <Route path='dashboard' element={<Dashboard />} errorElement={<NotFound />} />
          <Route path='starships' element={<Starships />} errorElement={<NotFound />} />
          <Route>
            <Route index path='people' element={<People />} errorElement={<NotFound />} />
            <Route path='/people/view/:id' element={<View />} errorElement={<NotFound />} />
          </Route>
          <Route path='species' element={<Species />} errorElement={<NotFound />} />
        </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
