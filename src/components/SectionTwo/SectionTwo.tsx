import {
  Container,
  FirstTitle,
  StepsContainer,
  Step,
  StepImage,
  StepInfo,
  Description,
  DescriptionItem,
} from "./SectionTwo.styled";
import DownloadButton from "../DownloadButton/DownloadButton";
import one from "../../assets/images/SectionTwo/one_1.5x.png";
import two from "../../assets/images/SectionTwo/two_1.5x.png";
import three from "../../assets/images/SectionTwo/three_1.5x.png";

const infoArr = [
  {
    title: "Загрузка и установка",
    text: "Клиент PokerPlanets подходит для любой платформы, скачайте и играйте, где удобно.",
    pos: "left",
    imageLink: one,
  },
  {
    title: "Восстановление доступа",
    text: "Если у вас уже был аккаунт на PokerStars Sochi, восстановите доступ или сбросьте пароль.",
    pos: "right",
    imageLink: two,
  },
  {
    title: "Создание аккаунта",
    text: "После создания аккаунта или сброса пароля войдите в учётную запись и начните игру.",
    pos: "left",
    imageLink: three,
  },
];

const SectionTwo = () => {
  return (
    <Container>
      <FirstTitle>
        Вернитесь в игру
        <br /> за 3 простых шага:
      </FirstTitle>
      <StepsContainer>
        {infoArr.map((i) => (
          <Step>
            {i.pos === "left" && <StepImage imageUrl={i.imageLink} />}
            <StepInfo imagePos={i.pos}>
              <span>{i.title}</span>
              <br />
              {i.text}
            </StepInfo>
            {i.pos === "right" && <StepImage imageUrl={i.imageLink} />}
          </Step>
        ))}
      </StepsContainer>
      <Description>
        <DescriptionItem>
          Если у вас уже была учётная запись, все <span>ваши средства</span>,
          включая <span>основной баланс</span> и <span>T-Money [T$]</span>,
          автоматически перенесены на новую платформу —{" "}
          <span>PokerPlanets</span>!
        </DescriptionItem>
        <DescriptionItem>
          Теперь вы можете играть где угодно и с любого устройства.
        </DescriptionItem>
      </Description>
      <DownloadButton text="Скачать сейчас" />
    </Container>
  );
};

export default SectionTwo;
