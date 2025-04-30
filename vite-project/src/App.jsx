import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Counter } from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
