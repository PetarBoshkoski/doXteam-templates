import React from "react"
import styled from 'styled-components'

export const FlexContainer = styled.div `
display: flex;
flex-direction:  ${props => props.direction};;
background-color: DodgerBlue;
text-align: center;
justify-content: ${props => props.justify};
align-items: ${props => props.align};
width: 100%;
height: 500px;
`;

export const Menus = styled.div`
background-color: #f1f1f1;
margin: ${props => props.margin};
align-self: ${props => props.alignSelf};
line-height: 75px;
font-size: 30px;
float: ${props => props.float};
bottom: ${props => props.bottom}
`;