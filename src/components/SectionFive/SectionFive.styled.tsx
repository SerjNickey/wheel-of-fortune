import styled from "styled-components";

export const Container = styled.section`
  padding: 40px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const TextBlock = styled.div`
  text-align: center;
  color: #fff;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 140%;

  & span {
    font-size: 14px;
    font-weight: 700;
  }

  & a {
    color: #ffca43;
  }
`;
