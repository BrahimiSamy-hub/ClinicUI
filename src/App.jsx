import HomePage from './pages/HomePage'
import PatientPage from './pages/PatientPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/statistics' element={<HomePage />} />
          <Route path='/patient' element={<PatientPage />} />
          <Route path='/facture' element={<HomePage />} />
          <Route path='/anything' element={<HomePage />} />
          <Route path='/settings' element={<HomePage />} />
          <Route path='/help' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
export default App
