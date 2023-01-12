import React, {  useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const FooterWrapper=styled.div`
position:relative;
width:40vw;
height:120px;
display:flex;
justify-content: center;

`

const AddTask=styled.textarea`
resize:none;
min-width:200px;
height:100px;
position:absolute;
z-index:5;
top:-100px;
border-radius:30px;
padding:10px;
border-bottom-right-radius: 0;
left:-90px;
border:none;
&:focus{
    outline: none;
}
`

const Footer = ({addTask}) => {
    const [text,setText]=useState()
    const [isAdd,setAdd]=useState(false)


    return (
        <FooterWrapper>
             {isAdd?<AddTask 
             autoFocus={true} 
             value={text} 
             onChange={(e)=>setText(e.target.value)} 
             />:null}
            <Button 
            setAdd={setAdd} 
            isAdd={isAdd} 
            setText={setText} 
            text={text} 
            addTask={addTask}/>
           
        </FooterWrapper>
    );
};

export default Footer;