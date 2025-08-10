import { useState, useEffect } from "react";
import YandexAd from "../YandexAd/YandexAd";
import {
  Container,
  Title,
  SubTitle,
  Ball,
  BallSurface,
  MainReflection,
  SecondaryReflection,
  InnerGlow,
  AnswerWindow,
  Triangle,
  Answer,
  BottomShadow,
  Loader,
  // @ts-ignore
  AdWrapper,
} from "./MagicEightBall.styled";
import nightImage from "../../assets/night_sprite.jpg";

const bgImages = [nightImage];

const RealisticMagicBall = () => {
  const [answer, setAnswer] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const answers = [
    "Бесспорно",
    "Определённо да",
    "Вне сомнений",
    "Да",
    "Можешь быть уверен",
    "По моим данным - да",
    "Вероятнее всего",
    "Хорошие перспективы",
    "Знаки говорят - да",
    "Да",
    "Пока не ясно",
    "Спроси позже",
    "Лучше не рассказывать",
    "Сейчас нельзя предсказать",
    "Сконцентрируйся и спроси опять",
    "Даже не думай",
    "Мой ответ - нет",
    "По моим данным - нет",
    "Перспективы не очень",
    "Весьма сомнительно",
  ];

  const handleClick = () => {
    if (!isAnimating) {
      setAnswer("");
      setIsAnimating(true);
      const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

      setTimeout(() => {
        setAnswer(randomAnswer);
        setIsAnimating(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      const promises = bgImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            console.log(`Изображение загружено: ${src}`);
            resolve(null);
          };
          img.onerror = () => {
            console.error(`Ошибка загрузки: ${src}`);
            resolve(null);
          };
        });
      });

      await Promise.all(promises);
      setLoadedCount(bgImages.length);
    };

    loadImages();
  }, []);

  if (loadedCount < bgImages.length) {
    return <Loader>Загрузка...</Loader>;
  }

  return (
    <Container>
      <YandexAd blockId="R-A-15619698-1" typeAd="fullscreen" platform="touch" />
      <div>
        <Title>MAGIC 8 BALL</Title>
        <SubTitle>
          Сформулируйте свой вопрос и нажмите на шар чтобы узнать ответ
        </SubTitle>
      </div>
      <Ball onClick={handleClick} $isAnimating={isAnimating}>
        <BallSurface>
          <MainReflection />
          <SecondaryReflection />
        </BallSurface>
        <InnerGlow />
        <AnswerWindow>
          <Triangle>
            <Answer $visible={!!answer}>{answer}</Answer>
          </Triangle>
        </AnswerWindow>
        <BottomShadow />
      </Ball>
      <AdWrapper>
        <YandexAd blockId={"R-A-15619698-2"} />
      </AdWrapper>
      <YandexAd blockId="R-A-15619698-4" typeAd="floorAd" platform="touch" />
    </Container>
  );
};

export default RealisticMagicBall;
