import React from 'react';
import { AUTHOR_NAME, PROJECT_NAME } from '../../assets/publicName';
import styled from 'styled-components';

const AuthorInfo=styled.div`
font-family: 'Playfair Display', serif;
font-size: 40px;
color: white;
position:absolute;
left:10px;
top:0px;
`

const Author = () => {

    return (
        <AuthorInfo>
            {PROJECT_NAME}<br/>
            by<br/>
            {AUTHOR_NAME}
        </AuthorInfo>
    );
};

export default Author;