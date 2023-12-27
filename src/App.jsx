import HomePage from './pages/HomePage'
import PatientPage from './pages/PatientPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import SidebarItems from './components/SidebarItems'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='flex'>
          <SidebarItems />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/statistics' element={<HomePage />} />
            <Route path='/patient' element={<PatientPage />} />
            <Route path='/facture' element={<HomePage />} />
            <Route path='/anything' element={<HomePage />} />
            <Route path='/settings' element={<HomePage />} />
            <Route path='/help' element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
