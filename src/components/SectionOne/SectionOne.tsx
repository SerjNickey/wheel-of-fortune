import {
  Container,
  FirstTitle,
  SecondTitle,
  ThirdTitle,
  FourthTitle,
} from "./SectionOne.styled";

import DownloadButton from "../DownloadButton/DownloadButton";

const SectionOne = () => {
  return (
    <Container>
      <FirstTitle>ПОКЕР ВЕРНУЛСЯ</FirstTitle>
      <SecondTitle>
        Добро пожаловать
        <br /> в POKERPLANETS <span>PI</span>
      </SecondTitle>
      <ThirdTitle>
        PokerPlanets теперь на <span>iPhone</span> и <span>Android</span>
      </ThirdTitle>
      <FourthTitle>Играйте где угодно. Всегда в игре</FourthTitle>
      <DownloadButton text="Скачать приложение" />
    </Container>
  );
};

export default SectionOne;
