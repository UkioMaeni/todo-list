import React from 'react';
import styled from 'styled-components';

const StyledFlexH=styled.div`
height:100%;
display:flex;
align-items:center;
justify-content: space-between;
padding-left:30px;
padding-right:60px

`

const FlexH = ({children}) => {
    return (
        <StyledFlexH>
            {children}
        </StyledFlexH>
    );
};

export default FlexH;