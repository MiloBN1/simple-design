import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  h1 {
    color: #fff;
  }
`;
export const Btn = styled.div`
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
`;
export const InfoBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 140px;
  position: absolute;
  bottom: 20px;
  max-width: 70vw;
  color: #fff;
  text-align: left;
`;
export const Info = styled.div`
  display: flex;
  gap: 22px;
  width: 240px;
`;
export const Text = styled.div`
  max-width: 185px;
  p {
    color: rgba(255, 255, 255, 0.7);
    flex-wrap: wrap;
    font-size: 15px;
    font-weight: 500;
    margin: 7px 0;
  }
`;
