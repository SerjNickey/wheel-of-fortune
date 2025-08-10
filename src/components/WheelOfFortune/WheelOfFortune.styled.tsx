import styled, { keyframes } from "styled-components";

interface ISector {
  $color: string;
  $angle: number;
  $skew: number;
}

interface IPrizeText {
  $skew: number;
  $angle: number;
}

interface ISpinButton {
  $spinning: boolean;
}

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #2c3e50;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  font-size: 2.5rem;
  text-align: center;
`;

export const WheelWrapper = styled.div`
  position: relative;
  width: min(90vw, 400px);
  height: min(90vw, 400px);
  margin: 40px 0;
`;

export const Wheel = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 12px solid #2c3e50;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(0, 0, 0, 0.2);
  transition: transform 4s cubic-bezier(0.2, 0.8, 0.3, 1);
`;

export const Sector = styled.div<ISector>`
  position: absolute;
  width: 50%;
  height: 50%;
  left: 50%;
  top: 0;
  transform-origin: bottom left;
  background-color: ${({ $color }) => $color};
  transform: rotate(${({ $angle }) => $angle}deg)
    skewY(${({ $skew }) => $skew}deg);
`;

export const SectorContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PrizeText = styled.span<IPrizeText>`
  position: absolute;
  left: 80px;
  top: 30px;
  width: 100px;
  text-align: center;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 3px #000;
  font-size: 1.1rem;
  transform: skewY(${({ $skew }) => $skew}deg)
    rotate(${({ $angle }) => $angle}deg);
`;

export const Pointer = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 60px;
  background-color: #e74c3c;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  z-index: 10;
  filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.4));
`;

export const SpinButton = styled.button<ISpinButton>`
  padding: 18px 50px;
  font-size: 1.3rem;
  background: ${({ $spinning }) =>
    $spinning ? "#cccccc" : "linear-gradient(45deg, #FF5722, #FF9800)"};
  color: white;
  border: none;
  border-radius: 60px;
  cursor: ${({ $spinning }) => ($spinning ? "not-allowed" : "pointer")};
  transition: transform 0.3s, background 0.4s;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  letter-spacing: 0.8px;
  margin-top: 20px;

  &:hover {
    transform: ${({ $spinning }) => ($spinning ? "none" : "scale(1.08)")};
    background: ${({ $spinning }) =>
      $spinning ? "#cccccc" : "linear-gradient(45deg, #E64A19, #F57C00)"};
  }
`;

const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(25px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const Result = styled.div`
  margin-top: 35px;
  padding: 25px 40px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  text-align: center;
  animation: ${fadeIn} 0.8s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  border: 2px solid #e9ecef;

  h2 {
    color: #27ae60;
    margin-top: 0;
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
    margin-bottom: 0;
    color: #2c3e50;
  }
`;
