import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  height: 120px;
`;
export const Account = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  a {
    color: black;
  }
  a:hover {
    color: #bd7048;
  }
`;
export const AccountLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  margin: 40px 0;
  p {
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;
export const NavItem = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  a {
    transition: color 0.7s ease;
  }
  a:hover {
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
  }
  a:not(:hover) {
    transition: color 0.7s ease;
    color: inherit;
  }
  a:active {
    color: rgba(0, 0, 0, 1);
    transition: 0.5s;
    font-weight: 500;
  }
`;
export const NavDropdown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
