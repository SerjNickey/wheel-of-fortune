import { Container, TextBlock } from "./SectionFive.styled";

const SectionFive = () => {
  return (
    <Container>
      <TextBlock>
        Чтобы узнать больше о наших промоакциях, переходите
        <br />{" "}
        <a
          href="https://pokerplanets.com/ru/promotions/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          на промо-страницу
        </a>
        .
        <br />
        <a href="https://pokerplanets.com/ru/terms-conditions/" target="_blank">
          Условия и положения
        </a>
      </TextBlock>
      <TextBlock>
        <span>Команда поддержки</span>
        <br />
        Нужна помощь? Свяжитесь с нами.
        <br />{" "}
        <a href="mailto:support@pokerplanets.com">support@pokerplanets.com</a>
      </TextBlock>
    </Container>
  );
};

export default SectionFive;
