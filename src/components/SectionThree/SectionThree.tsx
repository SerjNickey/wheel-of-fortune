import {
  Container,
  BannerBlock,
  Title,
  SubTitle,
  Description,
} from "./SectionThree.styled";
import DownloadButton from "../DownloadButton/DownloadButton";

const SectionThree = () => {
  return (
    <Container>
      <Title>
        <span>Только в июле</span> — начните игру с выгодных предложений
      </Title>
      <BannerBlock>
        ВыиграйТЕ билет
        <br /> на ЖИВОЙ турнир
        <br /> бесплатно
      </BannerBlock>
      <SubTitle>Фрироллы на SPF Лето</SubTitle>
      <Description>
        С 5 мая вам будут открыты фрироллы, в которых разыгрываются билеты
        на Main Event SPF Лето. Это шанс попасть на одно из крупнейших покерных
        событий без вложений.
      </Description>
      <DownloadButton text="Забрать билет" />
    </Container>
  );
};

export default SectionThree;
