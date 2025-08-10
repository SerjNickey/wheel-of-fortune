import {
  Container,
  Title,
  GFormats,
  GFormatItem,
  GFIBlock,
  GFIText,
} from "./SectionFour.styled";
import one from "../../assets/images/SectionFour/one.png";
import two from "../../assets/images/SectionFour/two.png";
import three from "../../assets/images/SectionFour/three.png";
import four from "../../assets/images/SectionFour/four.png";
import DownloadButton from "../DownloadButton/DownloadButton";

const gameFormats = [
  { title: "Spin&Win", imageLink: one, text: "Борись за 120000 $" },
  { title: "Кэш-игры", imageLink: two, text: "Своя игра — свои правила" },
  { title: "Турниры", imageLink: three, text: "Забери главный приз" },
  { title: "Телепорт", imageLink: four, text: "Играй быстро и много" },
];

const SectionFour = () => {
  return (
    <Container>
      <Title>Наслаждайтесь любимыми форматами игры</Title>
      <GFormats>
        {gameFormats.map((i) => (
          <GFormatItem>
            <GFIBlock imageLink={i.imageLink}>{i.title}</GFIBlock>
            <GFIText>{i.text}</GFIText>
          </GFormatItem>
        ))}
      </GFormats>
      <DownloadButton text="Начать играть" />
    </Container>
  );
};

export default SectionFour;
