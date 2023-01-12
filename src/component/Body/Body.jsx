import React from 'react';
import styled from 'styled-components';
import TaskContainer from './TaskContainer';

const BodyWrapper=styled.div`
margin-top:10px;
box-shadow: 0 0 10px;
`

const Body = (props) => {
    return (
        <BodyWrapper>
            <TaskContainer {...props}/>
        </BodyWrapper>
    );
};

export default Body;