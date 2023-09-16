import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import All from './All';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import Career from './Career';
import CyberSecurity from './CyberSecurity';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="container">
            <div className="logo"> <a href="https://www.guvi.in/blog/"><img src='./images/Guvi-blog-logo.png' alt='Guvi-blog-logo' /></a></div>
            <ul className="nav">
              <li><a href="https://www.guvi.in/courses">Course</a></li>
              <li><a href="https://www.guvi.in/zen-class/full-stack-development-course/">Live Classes</a></li>
              <li><a href="https://www.guvi.in/code-kata">Practice</a></li>
              <li><a href="https://www.guvi.in/rewards">Resources</a></li>
              <li><a href="https://www.guvi.in/mlp/GUVI-for-corporates">Our Products</a></li>
            </ul>
          </div>
        </nav>

        <header className="header">
          <div className="container1">
            <a href='https://www.guvi.in/'><img src='./images/blog-header.png' height='172' width='1096' alt='blog-header' /></a>
          </div>
        </header>

        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-nav mr-auto align">
            <Link className="nav-link" to="/">All</Link>
            <Link className="nav-link" to="/fullstackdevelopment">Full Stack Development</Link>
            <Link className="nav-link" to="/datascience">Data Science</Link>
            <Link className="nav-link" to="/cybersecurity">Cyber Security</Link>
            <Link className="nav-link" to="/career">Career</Link>
          </div>
        </Nav>

        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/fullstackdevelopment' element={<FullStackDevelopment />} />
          <Route path='/datascience' element={<DataScience />} />
          <Route path='/cybersecurity' element={<CyberSecurity />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;