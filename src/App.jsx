
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Script from './pages/Script'
import Preview from './pages/Preview'

function App() {
  

  return (
    <>
     <Header/>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/login" element={<Login/>}/>
      <Route  path="/register" element={<Register/>}/>
      <Route  path="/script" element={<Script/>}/>
      <Route  path="/preview" element={<Preview/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
