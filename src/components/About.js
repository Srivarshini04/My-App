
/*import React,{useState} from 'react'

export default function About() {
    const [myStyle,setmyStyle] = useState({
        color:"black",
        backgroundColor:'white'
    });
    const [btntext,setbtnText]=useState("Enable Dark Mode");
    const toggleStyle=()=>{
        if(myStyle.color==='black')
        {
            setmyStyle({
                color:"white",
                backgroundColor:"black",
                border: "1px solid white"
            })
        setbtnText("Disable Dark Mode")
        }
        else
        {
            setmyStyle({
                color:"black",
                backgroundColor:"white",
                border:"1px solid white"
            })
        setbtnText("Enable Dark Mode")
        }
    }
  return (
    <>
    <div className='container' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
    <button className="btn btn-primary" onClick={toggleStyle} type="button">{btntext}</button>
</div>
    </div>
</>
  );
}*/


import React, { useState } from 'react';
import { Accordion, Button } from 'react-bootstrap';
import './styles.css';

export default function About() {
  const [darkMode, setDarkMode] = useState(false);
  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const toggleStyle = () => {
    setDarkMode(!darkMode);
    setBtnText(darkMode ? 'Enable Dark Mode' : 'Disable Dark Mode');
  };

  return (
    <div className={`container ${darkMode ? 'accordion-dark' : ''}`}>
      <h1 className="my-3">About Us</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            <strong>This is the first item's accordion body.</strong> It is shown by default...
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <strong>This is the second item's accordion body.</strong> It is hidden by default...
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
            <strong>This is the third item's accordion body.</strong> It is hidden by default...
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="container my-3">
        <Button variant="primary" onClick={toggleStyle} type="button">
          {btnText}
        </Button>
      </div>
    </div>
  );
}



