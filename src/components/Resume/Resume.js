import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
    display: flex;
    flex-direction: row;
`

const LeftColumnWrapper = styled.aside`
    width: 350px;
`

const RightColumnWrapper = styled.main`
    
`

const LeftColumn = () => {
    return (
        <LeftColumnWrapper>
            <div>AVATAR</div>
            
        </LeftColumnWrapper>
    )
}

const RightColumn = () => {
    return (
        <RightColumnWrapper>
            CONTENT
        </RightColumnWrapper>
    )
}

const Resume = () => {
    return (
        <Row>
            <LeftColumn />
            <RightColumn />
        </Row>
    )
}

export default Resume
