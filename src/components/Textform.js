import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function Textform(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase()
    setText(newText)
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleLowClick=()=>{
        let updateText=text.toLowerCase();
        setText(updateText);
  }
  const handleClearText=()=>{
      setText("")
  }
  const [text,setText]=useState('')//text is a variable and gets default value as enter text here and whenever i update text it will update through settext function !!!!very important
  return (
    

    <>
       <div className="container" style={{backgroundColor:props.mode=='light'?'white':'grey'}}>
                    <h1>{props.heading}</h1>
                    <div className="mb-3 my-30">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode=='light'?'white':'grey',color:props.mode=='light'?'black':'white'}}></textarea>
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case</button>
                    <button className="btn btn-primary" onClick={handleLowClick}>Convert to lower case</button>
                    <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
        </div>
        <div className="container" style={{backgroundColor:props.mode=='light'?'white':'grey'}}>
              <p>your text summary</p>
              <p>no of characters : {text.length}</p>
              <p>no of words :{text.split(" ").length-1}</p>
              <p>time required to read above text:{0.008*text.split(" ").length}</p>
              <h1>Preview </h1>
              <p>{text}</p>
        </div>

                
               

    </>
  )
}
