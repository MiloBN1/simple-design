import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  height: 120px;
  position: sticky;
`;
export const Account = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 16px;
  font-weight: 400;
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
  align-items: center;
  gap: 40px;
  position: absolute;
  margin-left: 230px;
  span {
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    font-weight: 400;
    cursor: pointer;
  }
  span:hover,
  a:hover {
    color: black;
  }
`;
export const NavDropdown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 80px;
    position: absolute;
    top: 80px;
    right: 500px;
    background: white;
    list-style-type: none;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    padding: 10px;
    gap: 10px;
  }
  li {
    color: rgba(0, 0, 0, 0.7);
    font-size: 15px;
    font-weight: 500;
  }
`;
