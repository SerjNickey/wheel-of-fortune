import styled from "styled-components";
import logo1 from "../../assets/images/Header/logo1_1.5x.png";
import logo2 from "../../assets/images/Header/logo2_1.5x.png";

export const Container = styled.header`
  width: 100%;
  height: 40px;
  padding: 0 24px 15px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo1 = styled.div`
  width: 144px;
  height: 20px;
  background-image: url(${logo1});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Cross = styled.div`
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: #fff;
`;

export const Logo2 = styled.div`
  width: 124px;
  height: 14px;
  background-image: url(${logo2});
  background-repeat: no-repeat;
  background-size: contain;
`;
