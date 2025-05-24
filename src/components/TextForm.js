import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase!","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase!","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleClearText=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Cleared Successfully!","success");
    }
    const handleReverse=()=>{
        let newText=text.split('').reverse().join('');
        setText(newText);
        props.showAlert("Text Reversed Successfully!","success");
    }
    const handleSpeak=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
   /* const handleLightTheme=()=>{
        document.querySelector('body').style.backgroundColor="white";
        document.querySelector('body').style.color="black";
    }
    const handleDarkTheme=()=>{
        document.querySelector('body').style.backgroundColor="black";
        document.querySelector('body').style.color="white";

    }*/
    const handleCopy=()=>{
         //let text=document.getElementById("MyBox");
        // text.select();
        navigator.clipboard.writeText(text);
       // document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces are removed successfully!","success");
    }
    /*const counts=()=>{
            let arr=new Array();
            arr=text.trim();
            let ch=0,words=1,lines=1;
            for(let i=0;i<arr.length;i++)
            {
            if((arr[i]>='a'&& arr[i]<='z') || (arr[i]>='A'&&arr[i]<='Z') || (arr[i]>='0' && arr[i]<='9'))
            ch++;
            else if(arr[i]===','||arr[i]==='.'||arr[i]===' ' || arr[i]==='!'||arr[i]==='?'){
            words++;
            }
            else if(arr[i]==='\n'){
            lines++;
            words++;
            }
            }
            let n=arr.length-1;
            if(arr[n]===','||arr[n]==='.'||arr[n]===' '|| arr[n]==='!'||arr[n]==='?')
            words--;
        return{
            charcount:ch,
            wordcount:words
        }
    }*/
    const [text,setText]=useState("");
    //text="New Text";//wrong way to change the state
    //setText("New Text")//correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="MyBox" value={text} style={{backgroundColor: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverse}>Invert</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpeak}>Speak</button>
        {/* <button className="btn btn-primary mx-3" onClick={handleDarkTheme}>Dark</button>
        <button className="btn btn-primary mx-3" onClick={handleLightTheme}>Light</button> */}
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        {/* to read 125 words it takes 1 min so for one word=1/125=0.008min */}
        {/* <p>{counts().wordcount} words,{counts().charcount} characters</p>
        <p>{counts().wordcount*0.008} Minutes required to read it</p> */}
        <p>{text.split(/[ ,.?!\n]+/).filter((element)=>{return element.length!==0}).length} words,{text.split(/[ ,.?!\n]+/).filter(Boolean).join('').length} Characters</p>
        <p>{(text.split(/[ ,.\n]+/).filter((element)=>{return element.length!==0}).length)*0.008} Minutes required to read it</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  );
}
