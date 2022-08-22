import Response from './Response'
import React from 'react'

export default function Input(props){
    const inputRef = React.useRef(null)
    const [input, setInput] = React.useState('')
    const [submitted, setSubmitted] = React.useState(false)
    const [response, setResponse] = React.useState('')
    React.useEffect(() => {inputRef.current.select()},[inputRef])

    function handleChange(event){
        setInput(event.target.value)
      }
    
    function collectInput(event){
        event.preventDefault()
        setResponse(input.toLowerCase())
        setSubmitted(true)
    }
      
    
    return(
        <>
            <div className="console-input-box">
                <p className='user-name'>~ guest@madisonfunderburk.com:</p>
                <form onSubmit={collectInput}>
                <input ref={inputRef} type="text" name="consoleInput" onChange={handleChange} value={input} disabled={submitted}/>
                <input type="submit" style={{color: 'transparent'}}/>
                </form>
            </div>
            {submitted && <Response response={response}/>}
        </>
    )
}