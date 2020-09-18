import styled from 'styled-components'

export const FlexContainer1 = styled.div `
    background-color: DodgerBlue;
    width: 100%;
    height: 500px;
`;
export const Menus1 = styled.div`
    float: ${props => props.float};
    bottom: ${props => props.bottom};
    margin-top: 50px;
    background-color: #f1f1f1;
    width: 100px;
    text-align: center;
    font-size: 30px;
`;