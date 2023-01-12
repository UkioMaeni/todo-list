import React from 'react';
import styled from 'styled-components';

const InfoWrapper=styled.div`
font-family: 'Nunito', serif;
font-size: 15px;
color: red;
position:absolute;
right:10px;
top:0px;
`
const TeckInfo=styled.div`
color:blue;
& ul{
padding-left:20px;    
}
`

const Info = () => {
    return (
        <InfoWrapper>
            ВНИМАНИЕ!<br/>
            Для сохранения и дальнейшего использования <br/>
            используется локальное хранилище(localStorage)
            <br/><br/>
            <TeckInfo>
            Технологии:
            <ul>
                
                <li>React JS(Functional)</li>
                <li>Styled-Components</li>
                <li>React Hook: useState()</li>
                <li>localStorage</li>
            </ul>

            </TeckInfo>
        </InfoWrapper>
    );
};

export default Info;