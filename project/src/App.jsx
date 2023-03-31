import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navigation/Nav'
import NavMain from './Components/Navigation/NavMain'
import About from './Containers/About/About'
import Blog from './Containers/Blog/Blog'
import Catalogs from './Containers/Catalogs/Catalogs'
import Contacts from './Containers/Contacts/Contacts'
import Main from './Containers/Main/Main'
import Portfolio from './Containers/Portfolio/Portfolio'
import Service from './Containers/Services/Service'
import Service_detal from './Containers/Services/Service_detal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Nav></Nav>
      <Routes>

        <Route path="/" element={<Main/>}/>


        <Route path='/' element={<Main/>}/>
        <Route path="/main" element={<Main/>}/>


        <Route path="/catalogs" element={<Catalogs/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/service_detail" element={<Service_detal/>}/>
      </Routes>
      <Footer></Footer>
      <NavMain></NavMain>
    </div>
      
    
  )
}

export default App
