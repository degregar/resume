import React from "react"
import styled from "styled-components"
import Avatar from "./Avatar/Avatar"
import WatermarkHeading from "../Heading/WatermarkHeading/WatermarkHeading"
import { ContactBox, SocialMediaBox, StackBox, LanguagesBox } from "./SidebarBoxes/SidebarBoxes"

import { Summary } from "./Summary/Summary"
import Experience from "./Experience/Experience"
import Actions from "./Actions/Actions"

import closeIcon from "../../assets/icons/close.svg"

import { DetailsContextProvider } from "../../context/DetailsContext"

export const Resume = () => {
  return (
    <DetailsContextProvider>
      <Grid>
        <Sidebar />
        <Content />
        <Actions />
      </Grid>
    </DetailsContextProvider>
  )
}

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Avatar />
      <ContactBox />
      <SocialMediaBox />
      <LanguagesBox />
      <InteractiveResumeLink />
      <CloseMenuButton />
    </SidebarWrapper>
  )
}

const Content = () => {
  return (
    <ContentWrapper>
      <WatermarkHeading>Michał Kukla</WatermarkHeading>
      <TextWrapper>
        <StackBox />
        <Summary />
        <Experience />
        <GDPRClause />
      </TextWrapper>
    </ContentWrapper>
  )
}

const TextWrapper = styled.div`
  max-width: 800px;
`

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  position: relative;
  grid-template-areas: "main";
  grid-template-columns: auto;
  grid-template-rows: 1fr;

  @media print {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    grid-template-areas: "sidebar main";
    grid-template-columns: 311px auto;
    grid-template-rows: 1fr;
  }
`

const SidebarWrapper = styled.aside.attrs({
  className: "menu-wrapper",
})`
  height: 100%;
  background-color: var(--color-primary-muted);
  overflow-y: auto;
  padding: 1rem;
  z-index: 10;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  width: 100%;

  h2::after {
    background-color: var(--color-light);
  }

  @media (min-width: 768px) {
    grid-area: sidebar;
    transform: translateX(0);
    width: auto;
  }

  @media print {
    transform: translateX(0);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "avatar avatar avatar"
      ". . .";
  }

  @media screen {
    position: fixed;
  }

  &[data-opened="true"] {
    transform: translateX(0);
  }
`

const ContentWrapper = styled.main`
  padding: 2rem;
  grid-area: main;
`

const InteractiveResumeLink = () => (
  <InteractiveResumeLinkWrapper>
    <a href="https://resume.kukla.tech/" target="_blank" rel="noreferrer">
      Interactive résumé: https://resume.kukla.tech/
    </a>
  </InteractiveResumeLinkWrapper>
)

const InteractiveResumeLinkWrapper = styled.div`
  margin: 1rem 0;

  @media screen {
    display: none;
  }
`

const GDPRClause = () => (
  <GDPRClauseWrapper>
    <p>
      I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data
      Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of
      the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of
      such data, and repealing Directive 95/46/EC (General Data Protection Regulation).
    </p>
    <p>
      Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji zgodnie z Rozporządzeniem
      Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
      osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).
    </p>
  </GDPRClauseWrapper>
)

const GDPRClauseWrapper = styled.div`
  margin-top: 2rem;
  font-size: 0.75rem;

  @media screen {
    display: none;
  }
`

const CloseMenuButton = () => {
  const handleCloseMenu = () => {
    const domMenuWrapper = document?.querySelector(".menu-wrapper")
    if (domMenuWrapper) {
      domMenuWrapper.setAttribute("data-opened", "false")
    }
  }

  return (
    <CloseMenuButtonWrapper onClick={handleCloseMenu}>
      <img alt="Close menu" src={closeIcon} />
    </CloseMenuButtonWrapper>
  )
}

const CloseMenuButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  cursor: pointer;

  img {
    width: 24px;
  }

  @media print, (min-width: 768px) {
    display: none;
  }
`
