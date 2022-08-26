
import { useState } from "react";
import { Button, Input } from "antd";
import './Button.css';

import React from 'react'

const Click = () => {
  
    const [ text, setText ] = useState([])

    const [ para, setPara ] = useState("")

    const [ count, setCount ] = useState(0)

    function handleChange (e) {
        
        setPara(e.target.value)
        // console.log(typeof para)
    
    }
    
    function handleClick (e) {

        let a = para

        setCount(count+1)
        
        setText(a.charAt(count))
        
    }

    return (
    
        <div>

            <div>
                
                {para.length>0 ? <b><p key={para}>{para}</p></b> : "shit"}
                
                <Input value={para} placeholder="type a string" onChange={handleChange} onPressEnter={()=>{setCount(count+1);handleClick()}} />
            
            </div>

            {text.length > 0 ? <strong><li key={text}>{text}</li></strong> : "suma"}<br/>
            
            <Button type="primary" onClick={()=>{setCount(count+1);handleClick();}}>Click me</Button>
        
            <p>you have clicked {count} times</p>
        </div>

    )
}

export default Click