import React from 'react'
import {Link} from "react-router-dom";
// eslint-disable-next-line import/no-anonymous-default-export
const Navbar=(props)=>{
  function changeMode(){
    if(props.Mode==='dark'){
      document.getElementById('ModeText').innerText='Light';
    }
    else{
      document.getElementById('ModeText').innerText='Dark';
    }
  }
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-lg-2">
        {/* <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light"> */}
          <div className="container-fluid ">
            <h3 className='text-light mx-2 Fnt' >News<span className='text-warning'>Monkey</span></h3>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/general"  className='nav-link ' id='general' > General</Link></li>
                <li className="nav-item"><Link to="/business" className='nav-link ' id='business' > Business</Link></li>
                <li className="nav-item"><Link to="/entertainment" className='nav-link ' id='entertainment' > Entertainment</Link></li>
                <li className="nav-item"><Link to="/science"className='nav-link '  id='science' > Science</Link></li>
                <li className="nav-item"><Link to="/sports" className='nav-link ' id='sports' > Sports</Link></li>
                <li className="nav-item"><Link to="/technology" className='nav-link ' id='technology' > Technology</Link></li>
              </ul>
              <form className="d-flex">
              <div className="form-check form-switch">
              <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={function(event){props.toggleMode(); changeMode()}} />
              <label className={`form-check-label text-${props.Mode==='Light'?'dark':'light'}`}  for="flexSwitchCheckDefault" id='ModeText'>Dark</label>
              </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
}
export default Navbar;
