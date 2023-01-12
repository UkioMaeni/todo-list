import React from 'react';
import styled from 'styled-components';

const StyledDataH=styled.div`
color:${props=>props.color||'red'};
font-family: 'Playfair Display', serif;
font-size:20px;
`

const DataH = ({children,color}) => {
    return (
        <StyledDataH color={color}>
            {children}
        </StyledDataH>
    );
};

export default DataH;