
import React from 'react'

export default function About(props) {
  let myStyle ={
    color:props.mode==="dark"? 'white':'black',
    backgroundColor:props.mode==="dark"? 'black':'white',
    
  }
    /*const [myStyle,setmyStyle] = useState({
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
    }*/
  return (
    <>
    <div className='container' style={myStyle}>
        <h1 className='my-3' style={{color:props.mode==="dark"? 'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count,character count or Case conversion and so on..
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters and also estimate the time to read the words by cpu. Thus it is suitable for writing text with word or character limit. It can also convert the text to Upper or Lower case , removes the Extra spaces, Copies the text to clipboard, Inverts the Text and the most important is it can speaks also.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This word counter software works in any web Browser such as Chrome, Firefox , Internet Explorer ,Safari ,Opera. It suits to count characters in facebook , blog , books ,excel document , pdf document , essays etc.
      </div>
    </div>
  </div>
</div>
    </div>
</>
  );
}





