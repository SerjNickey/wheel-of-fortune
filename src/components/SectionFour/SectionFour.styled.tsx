import styled from "styled-components";
import { media } from "../../styles/breakpoints";

interface IGFIBlock {
  imageLink: string;
}

export const Container = styled.section`
  padding: 40px 16px 24px 16px;
`;

export const Title = styled.div`
  max-width: 360px;
  width: 100%;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 19px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 0;
`;

export const GFormats = styled.div`
  max-width: 360px;
  width: 100%;
  height: auto;
  padding: 24px 0 40px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  ${media.max375} {
    justify-content: center;
  }
`;

export const GFormatItem = styled.div`
  width: 84px;
  mnin-height: 116px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 8px;
`;

export const GFIBlock = styled.div<IGFIBlock>`
  width: 84px;
  height: 80px;

  background: linear-gradient(
      0deg,
      rgba(177, 177, 177, 0.1),
      rgba(177, 177, 177, 0.1)
    ),
    url(${({ imageLink }) => imageLink});
  background-size: auto, 48px 48px;
  background-position: center top, center 8px;
  background-repeat: no-repeat;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 2px 0px rgba(255, 255, 255, 0.05);
  border-radius: 8px;

  color: #fff;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0;

  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  padding-bottom: 8px;
`;

export const GFIText = styled.div`
  color: #fff;
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  text-align: left;
  padding-right: 9px;
  word-break: keep-all;
`;
