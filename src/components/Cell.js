import React from 'react' 
import styled from 'styled-components' 

const CellGroup = styled.div`
    width: 300px;
    height: 155px; 
    position: relative; 
    overflow: hidden;
    border-radius: 5px; 
    background-color: #FAFAFA;
    /*box-shadow: 0 10px 10px rgba(129, 127, 127, 0.2);
    outline-color: rgb(212, 211, 211);*/
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const CellTitle = styled.div`
    color: rgb(0, 0, 0); 
    font-size: 24px; 
    margin: 28px 0 0 24px;
    width: 190 px;
    border-bottom: 1px solid black; 
    padding: 30px 0;
`

const Cell = props => (
    <CellGroup>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell