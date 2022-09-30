import React from "react"
import styled from "styled-components"
import avatar from "../../../assets/images/michal_kukla_avatar_sq_rounded.png"

const AvatarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  grid-area: avatar;

  img {
    width: 100%;
    max-width: 25vh;
  }
`

const Avatar = () => (
  <AvatarWrapper>
    <img alt="Michał Kukla - frontend developer" src={avatar} />
  </AvatarWrapper>
)

export default Avatar
