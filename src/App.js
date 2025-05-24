//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,Routes} from "react-router-dom";

//let name="Varshini";
function App() {
  //1.basic and default code for react
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
  //2.demo code
  /* return (
    <>
    <nav>
      <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius odit neque dignissimos iste at esse tenetur non sequi molestiae incidunt.
    </div>
    </>
  );*/

  //3.project1(adding bootstrap)
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }


  const toggleMode = ()=>{
    if(mode==='light'){
       setMode('dark');
      //  document.documentElement.setAttribute('data-bs-theme', 'dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been Enabled","success");
      //document.title ="TextUtils - Dark Mode";
    
    }
    else{
      setMode('light');
      //document.documentElement.setAttribute('data-bs-theme', 'light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
      //document.title="textUtils - Light Mode";

    }
  }
  return (
    <>
    <BrowserRouter>
    {/* it will take the default props */}
    {/* <Navbar/> */} 
   <Navbar title="TextUtils" aboutText='About Us' mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
      <Route path="/About" element={<About mode={mode} />}/>
      <Route  path="/" element={<TextForm  showAlert={showAlert} heading="Try TextUtils Word Counter ,Case Conversion and more..." mode={mode}/>}/>
      </Routes>
    {/* This is our react app to analyse the text entered */}
   
   {/* <About/> */}
   </div>
   </BrowserRouter>
    </>
  );
}

export default App;
