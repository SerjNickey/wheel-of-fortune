import styled from "styled-components";
import planetImage from "../../assets/images/SectionOne/planet.png";
import hands from "../../assets/images/SectionOne/hands_1x.png";
import prize from "../../assets/images/SectionOne/prize_1.5x.png";
import pike from "../../assets/images/SectionOne/pike_1.5x.png";
import star from "../../assets/images/SectionOne/star_1.5x.png";
import { media } from "../../styles/breakpoints";

export const Container = styled.section`
  max-width: 393px;
  width: 100%;
  height: auto;
  background-image: url(${pike}), url(${star}), url(${hands}),
    url(${planetImage});
  background-repeat: no-repeat;
  background-position: 15px 30px, 315px 25px, center 110px, 0 -20px;
  background-size: 64px, 64px, auto, auto;
  padding: 40px 16px 24px 16px;
  text-align: center;
  color: #fff;

  ${media.max375} {
    background-position: 5px 30px, 300px 25px, center 110px, 0 -20px;
  }

  ${media.max360} {
    background-position: 0 30px, 290px 25px, center 110px, 0 -20px;
  }

  ${media.max344} {
    background-position: 0 30px, 270px 25px, center 110px, 0 -20px;
  }
`;

export const FirstTitle = styled.div`
  max-width: 360px;
  width: 100%;
  text-shadow: 0px 0px 5px #fff0c1, 0px 0px 44.5px #ff2b00;
  text-transform: uppercase;
  font-size: 48px;
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 100%;
`;

export const SecondTitle = styled.div`
  max-width: 360px;
  width: 100%;
  text-transform: uppercase;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 0;
  margin-top: 190px;
  margin-bottom: 16px;

  & span {
    color: rgba(255, 255, 255, 0);
    background-image: url(${prize});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const ThirdTitle = styled.div`
  max-width: 360px;
  width: 100%;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0;

  & span {
    font-weight: 700;
  }
`;

export const FourthTitle = styled.div`
  max-width: 360px;
  width: 100%;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  letter-spacing: 0;
  margin-top: 110px;
  margin-bottom: 24px;
`;
