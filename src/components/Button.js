
import { useState } from "react";
import { Button, Input } from "antd";
// import './Button.css';

import React from 'react'

const Click = () => {
  
    const [ text, setText ] = useState([])

    const [ para, setPara ] = useState("")

    function handleChange (e) {
        
        setPara(e.target.value)
        // console.log(typeof para)
    
    }
    
    function handleClick (e) {

        let a = para
        
        setText(a.split(''))

    }

    return (
    
        <div>

            <div>
                
                {para.length>0 ? <b><p key={para}>{para}</p></b> : "shit"}
                
                <Input value={para} placeholder="type a string" onChange={handleChange} onPressEnter={handleClick} />
            
            </div>

            {text.length > 0 ? <strong>{text.map(item => <li key={item}>{item}</li>)}</strong> : "suma"}
            
            <Button type="primary" onClick={handleClick}>Click me</Button>
        
        </div>

    )
}

export default Click