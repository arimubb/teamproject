import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navigation/Nav'
import About from './Containers/About/About'
import Blog from './Containers/Blog/Blog'
import Catalogs from './Containers/Catalogs/Catalogs'
import Contacts from './Containers/Contacts/Contacts'
import Main from './Containers/Main/Main'
import Portfolio from './Containers/Portfolio/Portfolio'
import Service from './Containers/Services/Service'
import Service_detal from './Containers/Services/Service_detal'

function App() {

  return (
    <div className="container">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/services" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/service_detail" element={<Service_detal/>}/>
      </Routes>
      <Footer></Footer>
      
    </div>
      
    
  )
}

export default App
