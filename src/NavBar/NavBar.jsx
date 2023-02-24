import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link to="/" className='titulo'><h1 className="h1" >Rocio de Miel</h1> </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Informacion
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><Link to="/productos" className="dropdown-item nav-tortas"> Tortas</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </div>
  )
}

export default NavBar