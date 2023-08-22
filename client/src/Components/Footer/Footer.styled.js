import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 75px;
`;
export const FooterBottom = styled.div`
  background: #262626;
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.05);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
  }
`;
export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 170px 75px 170px;
  background: #fff;
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.05);
  ul {
    list-style-type: none;
  }
  li {
    display: flex;
    gap: 10px;
    margin-bottom: 5px;
    color: rgba(33, 33, 33, 0.5);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
  }
`;
export const FooterBlock = styled.div`
`;
export const Logo = styled.div`
  cursor: pointer;
`;
