import { useState, useRef } from "react";
import Modal from "react-modal";
import {
  PageContainer,
  MainContent,
  Title,
  WheelWrapper,
  Wheel,
  Sector,
  SectorContent,
  PrizeText,
  Pointer,
  SpinButton,
} from "./WheelOfFortune.styled";

Modal.setAppElement("#root");

const WheelOfFortune = () => {
  const prizes = [
    "iPhone 15",
    "Ноутбук",
    "1000$",
    "Путешествие",
    "Фотоаппарат",
    "Робот-пылесос",
    "Наушники",
    "Велосипед",
  ];
  const colors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FF9F40",
    "#8AC926",
    "#1982C4",
  ];

  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const wheelRef = useRef(null);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setWinner(null);

    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const extraRotation = 5 * 360;
    const prizeAngle = 360 / prizes.length;

    // Округляем угол до целого числа
    const targetRotation = Math.round(
      extraRotation + 360 - (prizeIndex * prizeAngle + prizeAngle / 2)
    );

    setRotation((prev) => prev + targetRotation);

    setTimeout(() => {
      setWinner(prizes[prizeIndex]);
      setSpinning(false);
      setIsModalOpen(true);
    }, 4500);
  };

  return (
    <PageContainer>
      <MainContent>
        <Title>Колесо Фортуны</Title>

        <WheelWrapper>
          <Wheel ref={wheelRef} style={{ transform: `rotate(${rotation}deg)` }}>
            {prizes.map((prize, index) => {
              const angle = 360 / prizes.length;
              const skew = angle - 90;

              return (
                <Sector
                  key={index}
                  $color={colors[index]}
                  $angle={angle * index}
                  $skew={skew}
                >
                  <SectorContent>
                    <PrizeText $skew={-skew} $angle={angle / 2}>
                      {prize}
                    </PrizeText>
                  </SectorContent>
                </Sector>
              );
            })}
          </Wheel>

          <Pointer />
        </WheelWrapper>

        <SpinButton
          onClick={spinWheel}
          disabled={spinning}
          $spinning={spinning}
        >
          {spinning ? "Крутится..." : "Крутить колесо!"}
        </SpinButton>
      </MainContent>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h2>Поздравляем!</h2>
        <p>
          Вы выиграли: <strong>{winner}</strong>
        </p>
        <button
          onClick={() => setIsModalOpen(false)}
          style={{ padding: "8px 16px", marginTop: "10px", cursor: "pointer" }}
        >
          Закрыть
        </button>
      </Modal>
    </PageContainer>
  );
};

export default WheelOfFortune;
