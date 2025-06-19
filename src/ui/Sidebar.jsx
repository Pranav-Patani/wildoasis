import { useState } from "react";

import styled, { css } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";

// import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  transition: 0.2s all;

  @media only screen and (max-width: 1325px) {
    position: absolute;
    height: 100vh;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 20px;
    grid-template-rows: 1fr 1fr;
    ${(props) =>
      props.isOpen &&
      css`
        transform: translateX(0);
      `}
    ${(props) =>
      !props.isOpen &&
      css`
        transform: translateX(-85%);
      `}
  }
`;

const ShowSidebar = styled.button`
  display: none;
  border: none;
  height: 100%;
  right: 0;
  width: 20px;
  background-color: var(--color-grey-200);
  position: absolute;

  @media only screen and (max-width: 1325px) {
    display: block;
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledSidebar isOpen={isOpen}>
      <Logo />
      <MainNav handleSidebar={setIsOpen} />
      {/* <Uploader /> */}
      <ShowSidebar
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        style={{ gridRow: `${1}/${-1}` }}
      >
        {isOpen ? <HiChevronDoubleLeft /> : <HiChevronDoubleRight />}
      </ShowSidebar>
    </StyledSidebar>
  );
}

export default Sidebar;
