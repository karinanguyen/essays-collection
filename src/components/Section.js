import React from 'react'
import styled from 'styled-components'

const SectionGroup = styled.div`
    background: url(${props => props.image}); 
    height: 720px;
    display: grid;
    grid-template-rows: 100px auto; 
    grid-gap: 20px;
`

const SectionLogo = styled.img`
    width: 128px;
    margin: auto;
`
const SectionTitleGroup = styled.div`
    display: grid; 
    grid-template-columns: 300px auto;
    margin: 0 80px; 
    grid-gap: 400px;
    grid-teample-rows: 100%;

    @media(max-width: 720px){
        grid-template-columns: 1fr;
    }
`
const SectionTitle = styled.h3`
    color: black;
    font-size: 50px; 
    margin: 0;
    line-height = 1.2; 
`
const SectionText = styled.p`
    color: black;
`


const Section = props => (
    <SectionGroup image ={props.image}>
        <SectionLogo src = {props.logo}/> 
        <SectionTitleGroup> 
            <SectionTitle>{props.title}</SectionTitle>
                <SectionText>{props.text}</SectionText>
        
        </SectionTitleGroup>

    </SectionGroup>
)

export default Section 