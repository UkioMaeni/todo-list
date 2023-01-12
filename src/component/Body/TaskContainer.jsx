import React from 'react';

import styled, { keyframes } from 'styled-components';

const StyledTaskContainer=styled.div`
padding:10px 0;
height:50vh;
overflow: scroll;

`

const checkAnimation=keyframes`
0%{
transform: rotate(0deg);
}
100%{
    transform: rotate(360deg);
}
`

const delAnimation=keyframes`
0%{

}
50%{
    background: red;
    font-size:14px;
    transform: scale(1.03) ;
    
}
100%{
    background: rgb(196, 62, 184);
    transform: scale(1);
}
`
const StyledTask=styled.div`
padding:30px 30px;
display:flex;
align-items: center;
&:hover{
    box-shadow: 0 0 5px black;
}

`
const Square=styled.div`
position:relative;
overflow:hidden;
width:20px;
height:20px;
cursor:pointer;
border:1px solid black;
border-radius:5px;
background:${({bg})=>bg?'green':null};
display:flex;
align-items:center;
justify-content: center;
&:hover::before{
    content:"";
background-image: conic-gradient(
    green 10deg,
    transparent 280deg
);

width:150%;
height:150%;
position:absolute;
animation: ${checkAnimation} 2s infinite linear;
z-index:1;
}
`
const TaskText=styled.div`
font-family: 'Nunito', serif;
font-size:20px;
font-weight:bold;
min-height:26px;
display:flex;
align-items: center;
width:70%;
margin-left:40px;
padding-bottom:4px;
`

const Delete=styled.button`
font-size:14px;
border-radius:5px;
margin-left:20px;
border:none;
cursor:pointer;
background: rgb(196, 62, 184);
width:80px;
height:20px;
&:hover {
    border:1px solid black;
    animation: ${delAnimation} 1s infinite linear;
}

`

const Task = ({data,i,checkked,deleted}) => {
    return (
        <StyledTask>
           <Square bg={data.check} onClick={()=>checkked(i)}/>
           <TaskText>{i+'.'}{data.name}</TaskText>
           <Delete onClick={()=>deleted(i)}>Deleted</Delete>
        </StyledTask>
    );
};


const TaskContainer = ({list,...props}) => {
   
    return (
        <StyledTaskContainer>
            {list.map((e,i)=><Task data={e} key={i} i={i} {...props}/>)}
        </StyledTaskContainer>
    );
};

export default TaskContainer;