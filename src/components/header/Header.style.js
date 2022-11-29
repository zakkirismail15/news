import styled from "styled-components";

export const Navigation = styled.header`
  width: 100%;
  overflow: hidden;
  background-color: var(--OffWhite);
  z-index: 999;
  position: relative;

  @media (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 1rem;
  }
`;
export const Nav = styled.nav`
  padding: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  .menu {
    max-width: 3rem;
    display: none;
  }

  @media (max-width: 600px) {
    .menu {
      display: block;
    }

    ul {
      display: none;
    }
  }
  ul.active {
    display: block;
    padding-left: 2rem;
    img {
      margin-left: auto;
      margin-right: 1rem;
      padding-bottom: 3rem;
    }
    width: 60%;
  }
`;
export const Ul = styled.ul`
  display: flex;
  width: 35%;
  justify-content: space-between;

  @media (max-width: 600px) {
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column;
    height: 100vh;
    background-color: var(--OffWhite);
    padding-top: 2rem;
  }
`;
export const Li = styled.li`
  padding: 1rem 0;

  a {
    :hover {
      color: var(--SoftRed);
    }
  }
`;
export const Logo = styled.div``;
