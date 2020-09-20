import React from "react"
import styled from 'styled-components'

export const FlexContainer = styled.div `
position: relative;
background-color: DodgerBlue;
background-image:${props => `url(${props.background})`};
height: 500px;
border: 1px solid black;
display = ${props => props.display};
flex-direction: ${props => props.flexDirection};
`;

export const Menus = styled.div`
position: absolute;
text-align: center;
width: ${props => props.width};
top: ${props => props.top};
right: ${props => props.right};
bottom: ${props => props.bottom};
left: ${props => props.left};
word-wrap: break-word;
`;

export const StyledImg = styled.div`
    background-image:${props => `url(${props.src})`};
    height: 100px;
    width: 100px;
    background-size: cover;
    text-align: center;
    justify-content: center;
    margin: 0 auto;     
`;
