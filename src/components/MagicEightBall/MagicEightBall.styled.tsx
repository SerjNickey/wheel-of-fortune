import styled, { keyframes, css } from "styled-components";
import nightImage from "../../assets/night_sprite.jpg";
import { media } from "../../styles/breakpoints";

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(-15deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  perspective: 1000px;
  posiyion: relative;
  background-image: url(${nightImage});

  ${media.max853} {
    gap: 40px;
    justify-content: center;
  }
`;

export const AdWrapper = styled.div`
  width: 100%;
  height: 120px;
  position: absolute;
  bottom: 0;

  ${media.max853} {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 132px;
  font-weight: bold;
  color: #ffe81f;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #ffe81f;
  text-transform: uppercase;
  text-align: center;

  ${media.max912} {
    font-size: 124px;
  }

  ${media.max853} {
    font-size: 116px;
  }

  ${media.max820} {
    font-size: 112px;
  }

  ${media.max768} {
    font-size: 104px;
  }

  ${media.max540} {
    font-size: 72px;
  }

  ${media.max430} {
    font-size: 58px;
  }

  ${media.max414} {
    font-size: 55px;
  }

  ${media.max390} {
    font-size: 50px;
  }

  ${media.max375} {
    font-size: 48px;
  }

  ${media.max360} {
    font-size: 48px;
  }

  ${media.max344} {
    font-size: 44px;
  }
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #ffe81f;
  text-transform: uppercase;
  text-align: center;

  ${media.max912} {
    font-size: 17px;
  }

  ${media.max853} {
    font-size: 16px;
  }

  ${media.max820} {
    font-size: 15px;
  }

  ${media.max768} {
    font-size: 18px;
  }

  ${media.max540} {
    font-size: 15px;
  }

  ${media.max430} {
    font-size: 16px;
  }

  ${media.max414} {
    font-size: 14px;
  }

  ${media.max390} {
    font-size: 13px;
  }

  ${media.max375} {
    font-size: 12px;
  }

  ${media.max360} {
    font-size: 12px;
  }

  ${media.max344} {
    font-size: 11px;
  }
`;

export const Ball = styled.div<{ $isAnimating: boolean }>`
  position: relative;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  cursor: pointer;
  transform-style: preserve-3d;
  animation: ${css`
    ${float} 6s ease-in-out infinite
  `};
  ${({ $isAnimating }) =>
    $isAnimating &&
    css`
      animation: ${shake} 0.5s ease;
    `}
  transition: transform 0.3s, filter 0.3s;

  outline: none; /* Убирает стандартное выделение */
  -webkit-tap-highlight-color: transparent; /* Убирает подсветку на мобильных устройствах */
  user-select: none; /* Запрещает выделение текста при клике */

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }

  ${media.max540} {
    width: 380px;
    height: 380px;
  }

  ${media.max430} {
    width: 380px;
    height: 380px;
  }

  ${media.max414} {
    width: 362px;
    height: 362px;
  }

  ${media.max390} {
    width: 340px;
    height: 340px;
  }

  ${media.max375} {
    width: 320px;
    height: 320px;
  }

  ${media.max360} {
    width: 310px;
    height: 310px;
  }

  ${media.max344} {
    width: 294px;
    height: 294px;
  }
`;

export const BallSurface = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.5) 70%
    ),
    radial-gradient(
      circle at 70% 70%,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(0, 0, 0, 0.7) 70%
    ),
    #000;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3),
    inset 0 -10px 30px rgba(0, 0, 0, 0.5),
    inset 0 10px 30px rgba(255, 255, 255, 0.1);
`;

export const MainReflection = styled.div`
  position: absolute;
  top: 15%;
  left: 20%;
  width: 40%;
  height: 20%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.1) 70%
  );
  border-radius: 50%;
  transform: rotate(45deg);
  filter: blur(5px);
`;

export const SecondaryReflection = styled.div`
  position: absolute;
  top: 25%;
  left: 60%;
  width: 20%;
  height: 10%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  filter: blur(2px);
`;

export const InnerGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 80, 160, 0.2) 0%,
    transparent 70%
  );
  filter: blur(20px);
`;

export const AnswerWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 80, 160, 0.3);
  overflow: hidden;
  backdrop-filter: blur(5px);
`;

export const Triangle = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 12px;
  background: linear-gradient(160deg, #102a4a, #1a4a8a);
  box-shadow: inset 0 -10px 20px rgba(0, 0, 0, 0.3),
    inset 0 10px 20px rgba(255, 255, 255, 0.1);
`;

export const Answer = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #e0e0e0;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease;
  z-index: 2;
`;

export const BottomShadow = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  height: 50px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.5) 0%, transparent 70%);
  filter: blur(10px);
`;

export const Loader = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  font-size: 32px;
  color: #ffffff;
`;
