import styled from "styled-components";
import { media } from "../../styles/breakpoints";

interface IStepImage {
  imageUrl: string;
}

interface IStepInfo {
  imagePos: string;
}

export const Container = styled.section`
  padding: 40px 16px 24px 16px;
  color: #fff;
`;

export const FirstTitle = styled.div`
  max-width: 360px;
  width: 100%;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  letter-spacing: 0;
  text-align: center;
  text-transform: uppercase;
`;

export const StepsContainer = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Step = styled.div`
  max-width: 360px;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 10px;

  background: linear-gradient(
      0deg,
      rgba(177, 177, 177, 0.1),
      rgba(177, 177, 177, 0.1)
    ),
    #000000;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0px 1.1875px 0px rgba(255, 255, 255, 0.05);
  border-radius: 8px;
`;

export const StepImage = styled.div<IStepImage>`
  width: 105px;
  height: 120px;
  flex-shrink: 0;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const StepInfo = styled.div<IStepInfo>`
  max-width: 234px;
  width: 100%;
  padding-right: ${({ imagePos }) => (imagePos === "left" ? "27px" : "0")};
  padding-left: ${({ imagePos }) => (imagePos === "right" ? "16px" : "0")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0;
  text-align: left;

  & span {
    font-size: 14px;
    font-weight: 700;
  }

  ${media.max375} {
    padding-right: ${({ imagePos }) => (imagePos === "left" ? "16px" : "0")};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 32px;
`;

export const DescriptionItem = styled.div`
  text-align: center;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  letter-spacing: 0;

  & span {
    font-weight: 700;
    color: #d70022;
  }
`;
