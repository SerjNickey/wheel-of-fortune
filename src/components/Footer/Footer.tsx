import {
  Container,
  LinksBlock,
  LinksTitle,
  LinksItem,
  Link,
  Divider,
} from "./Footer.styled";

import windows from "../../assets/images/Footer/Windows.png";
import macos from "../../assets/images/Footer/macOS.png";
import android from "../../assets/images/Footer/Android.png";
import ios from "../../assets/images/Footer/iOS.png";
import inst from "../../assets/images/Footer/Instagram.png";
import tg from "../../assets/images/Footer/Telegram.png";
import youtube from "../../assets/images/Footer/YouTube.png";
import vk from "../../assets/images/Footer/VK.png";

const osArr = [
  { imageLink: windows, linkTo: "https://getpp.app/" },
  { imageLink: macos, linkTo: "https://getpp.app/" },
  { imageLink: android, linkTo: "https://getpp.app/" },
  { imageLink: ios, linkTo: "https://getpp.app/" },
];

const socArr = [
  { imageLink: inst, linkTo: "https://www.instagram.com/pokerplanetsru/#" },
  { imageLink: tg, linkTo: "https://t.me/pokerplanets" },
  { imageLink: youtube, linkTo: "https://www.youtube.com/@pokerplanetsru" },
  { imageLink: vk, linkTo: "https://vk.ru/pokerplanets" },
];

const Footer = () => {
  return (
    <Container>
      <LinksBlock>
        <LinksTitle>Скачать клиент</LinksTitle>
        <LinksItem>
          {osArr.map((i) => (
            <Link href={i.linkTo} target="_blank" imageLink={i.imageLink} />
          ))}
        </LinksItem>
      </LinksBlock>
      <Divider />
      <LinksBlock>
        <LinksTitle>Социальные сети</LinksTitle>
        <LinksItem>
          {socArr.map((i) => (
            <Link href={i.linkTo} target="_blank" imageLink={i.imageLink} />
          ))}
        </LinksItem>
      </LinksBlock>
    </Container>
  );
};

export default Footer;
