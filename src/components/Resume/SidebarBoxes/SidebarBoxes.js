import React, { useContext } from "react";
import styled from "styled-components";

import DetailsContext, { DETAILS_MODES } from "../../../context/DetailsContext";

import phoneIcon from "../../../assets/icons/mobile.svg";
import emailIcon from "../../../assets/icons/email.svg";
import addressIcon from "../../../assets/icons/address.svg";

import facebookIcon from "../../../assets/icons/facebook.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";
import githubIcon from "../../../assets/icons/github.svg";
import youtubeIcon from "../../../assets/icons/youtube.svg";

export const ContactBox = () => (
  <Box>
    <h2 className="heading">Contact</h2>
    <List>
      <li>
        <a href="tel:+48 691 059 529">
          <Icon alt="Phone" src={phoneIcon} />
          <span>+48 691 059 529</span>
        </a>
      </li>
      <li>
        <a href="mailto:michal@kukla.tech">
          <Icon alt="Email" src={emailIcon} />
          <span>michal@kukla.tech</span>
        </a>
      </li>
      <li>
        <Icon alt="Address" src={addressIcon} />
        <span>Zawoja 1847, 34-222 Zawoja</span>
      </li>
    </List>
  </Box>
);

export const SocialMediaBox = () => {
  return (
    <Box>
      <h2 className="heading">Social Media</h2>
      <List>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kukla-michal/"
          >
            <Icon alt="LinkedIn" src={linkedinIcon} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCUDCuwRHCLa5M70Du5YM_uQ/videos?view_as=subscriber"
          >
            <Icon alt="YouTube" src={youtubeIcon} />
            <span>YouTube</span>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/degregar/resume"
          >
            <Icon alt="GitHub" src={githubIcon} />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://facebook.com/degregar"
          >
            <Icon alt="Facebook" src={facebookIcon} />
            <span>Facebook</span>
          </a>
        </li>
      </List>
    </Box>
  );
};

export const LanguagesBox = () => {
  const { mode: detailsMode } = useContext(DetailsContext);

  return (
    <Box>
      <h2 className="heading">Languages</h2>
      <List className="list--justified">
        <li>
          <span className="label">Polish:</span>
          <span>native</span>
        </li>
        <li>
          <span className="label">English:</span>
          <span>fluent</span>
        </li>
        {detailsMode === DETAILS_MODES.full && (
          <li>
            <span className="label">Spanish:</span>
            <span>basic</span>
          </li>
        )}
      </List>
    </Box>
  );
};

const Box = styled.div`
  h2::after {
    background-color: var(--color-light);
  }
`;

const Icon = styled.img`
  width: 24px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  & > li {
    padding: 8px;
  }

  & > li,
  & > li > a {
    display: flex;
    gap: 16px;

    > a,
    > span {
      display: inline-flex;
      align-items: center;
    }
  }

  & .label {
    width: 60px;
    /* font-weight: bold; */
    /* text-transform: uppercase; */
  }
`;
