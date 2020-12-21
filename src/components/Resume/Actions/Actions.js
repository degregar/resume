import React, { useContext } from "react";
import styled from "styled-components";
import DetailsContext, { DETAILS_MODES } from "../../../context/DetailsContext";

import printIcon from "../../../assets/icons/printer.svg";
import githubIcon from "../../../assets/icons/github.svg";
import menuIcon from "../../../assets/icons/menu.svg";

const Actions = () => {
  const { mode: detailsMode, setMode } = useContext(DetailsContext);

  const handleChangeDetailsMode = (e) => {
    setMode(e.target.value);
  };

  return (
    <ActionsWrapper>
      <DetailsModeToggler>
        <span>Details Mode</span>
        <select onChange={handleChangeDetailsMode} value={detailsMode}>
          {Object.keys(DETAILS_MODES).map((mode) => {
            return (
              <option key={mode} value={DETAILS_MODES[mode]}>
                {DETAILS_MODES[mode]}
              </option>
            );
          })}
        </select>
      </DetailsModeToggler>
      <PrintButton />
      <SourceButton />
      <MenuToggler />
    </ActionsWrapper>
  );
};

const ActionsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  text-align: right;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  border-bottom-left-radius: 2px;
  width: 100%;
  justify-content: flex-end;

  @media print {
    display: none;
  }

  @media (min-width: 768px) {
    width: fit-content;
  }
`;

const DetailsModeToggler = styled.div`
  select {
    padding: 8px;
    border-color: var(--color-primary-muted);
    background-color: var(--color-light);
  }

  span {
    padding: 8px;
  }
`;

const PrintButton = () => {
  const print = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ButtonWrapper onClick={print}>
      <img
        alt="Print résumé of Michał Kukla - frontend developer"
        src={printIcon}
      />
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  cursor: pointer;
  background-color: var(--color-light);
  border: 1px solid var(--color-primary-muted);

  img {
    width: 24px;
  }
`;

const SourceButton = () => {
  return (
    <StyledLink
      href="https://github.com/degregar/resume"
      target="_blank"
      rel="noreferrer"
    >
      <img alt="Source code of this very résumé" src={githubIcon} />
    </StyledLink>
  );
};

const StyledLink = styled.a`
  display: inline-block;
  height: 100%;
  padding: 4px 0;

  img {
    width: 24px;
  }
`;

const MenuToggler = () => {
  const handleOpenMenu = () => {
    document.querySelector('.menu-wrapper').dataset.opened = true;
  };

  return (
    <MenuTogglerWrapper onClick={handleOpenMenu}>
      <img alt="Open menu" src={menuIcon} />
    </MenuTogglerWrapper>
  );
};

const MenuTogglerWrapper = styled.div`
  cursor: pointer;
  padding: 4px 0;
  
  img {
    width: 24px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default Actions;
