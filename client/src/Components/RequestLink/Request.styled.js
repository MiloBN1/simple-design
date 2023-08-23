import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  cursor: pointer;
  height: 100px;
  p {
    color: #bd7048;
    font-size: 15px;
    font-weight: 600;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 228px;
    height: 74px;
    border-radius: 100px;
    background: #bd7048;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    transition: 0.4s ease-in-out;
    cursor: pointer;
    &:hover {
      background: #d87e4d;
    }
  }
`;
export const Pdf = styled.div`
  display: flex;
  align-items: center;
`;
