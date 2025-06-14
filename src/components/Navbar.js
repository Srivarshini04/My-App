import React from 'react'
// import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} data-bs-theme={props.mode}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <div className="d-flex">
        <div className="bg-primary rounded mx-3"  onClick={()=>{props.toggleMode("primary")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
        <div className="bg-secondary rounded mx-3"  onClick={()=>{props.toggleMode("secondary")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
        <div className="bg-success rounded mx-3"  onClick={()=>{props.toggleMode("success")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
        <div className="bg-danger rounded mx-3"  onClick={()=>{props.toggleMode("danger")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
        <div className="bg-warning rounded mx-3"  onClick={()=>{props.toggleMode("warning")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
        <div className="bg-light rounded mx-3"  onClick={()=>{props.toggleMode("light")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
        <div className="bg-dark rounded mx-3"  onClick={()=>{props.toggleMode("dark")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
      </div> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
</>
  );
}
//it is removed at present version
// Navbar.propTypes={title:PropTypes.string,
//                     aboutText:PropTypes.string}

