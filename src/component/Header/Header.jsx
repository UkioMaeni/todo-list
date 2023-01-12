import React from 'react';
import styled from 'styled-components';
import DataH from './DataH';
import FlexH from './FlexH';

const HeaderWrapper=styled.div`
width:40vw;
height:120px;
border-bottom:1px solid rgba(0,0,0,0.3);
box-shadow: 0 0 10px;
box-sizing: border-box;
`

const Header = ({list}) => {

    const total=list.length
    const check=list.filter(e=>e.check===true).length
    return (
        <HeaderWrapper>
            <FlexH>
                <DataH color='white'>Total Task: &nbsp;{total}</DataH>
                <DataH color='white'>Checked: &nbsp;{check}</DataH>
            </FlexH>
       </HeaderWrapper>
    );
};

export default Header;