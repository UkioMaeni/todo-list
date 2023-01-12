import React from 'react';
import styled from 'styled-components';

const StyledButton=styled.button`
background:rgb(21, 184, 212);
border:none;
height:50px;
width:20vw;
padding: 10px 0px;
border-radius:10px;
margin-top:40px;
cursor:pointer;
&:hover{
    border:1px solid black;
}
`

const Button = ({setAdd,isAdd,setText,text,addTask}) => {

   function onClickInstruction(){
    if(isAdd){
        if(text){
           addTask(text) 
        }else{
            setAdd(!isAdd)
            alert('text empty!')
        }
        
    } 
    setAdd(!isAdd)
    setText('')
   }

    return (
        <StyledButton onClick={()=>onClickInstruction()}>
            {isAdd?'Save':'Add Task'}
        </StyledButton>
    );
};

export default Button;