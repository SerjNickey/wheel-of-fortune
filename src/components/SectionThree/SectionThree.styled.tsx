import styled from "styled-components";
import banner from "../../assets/images/SectionThree/event_1.5x.png";

export const Container = styled.section`
  padding: 40px 16px 24px 16px;
`;

export const Title = styled.div`
  padding-bottom: 24px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 0;

  & span {
    color: #d70022;
  }
`;

export const BannerBlock = styled.div`
  max-width: 360px;
  width: 100%;
  height: 160px;
  background-image: url(${banner});
  background-blend-mode: color, overlay, normal;
  background-size: contain;

  text-align: left;
  text-transform: uppercase;
  color: #fff;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 0;

  padding: 10px 0 0 16px;
`;

export const SubTitle = styled.div`
  max-width: 360px;
  width: 100%;
  padding: 16px 0;
  color: #d70022;
  text-align: center;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 0;
`;

export const Description = styled.div`
  max-width: 360px;
  width: 100%;
  padding-right: 23px;
  padding-bottom: 48px;
  color: #fff;
  text-align: left;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0;
`;
