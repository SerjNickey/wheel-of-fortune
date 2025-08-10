import { useState, useEffect } from "react";
import { LandingPageContainer, LineContainer } from "./LandingPage.styled";
import Header from "../Header/Header";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionFour from "../SectionFour/SectionFour";
import SectionFive from "../SectionFive/SectionFive";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

import header_logo1 from "../../assets/images/Header/logo1_1.5x.png";
import header_logo2 from "../../assets/images/Header/logo2_1.5x.png";
import s1_hands from "../../assets/images/SectionOne/hands_1x.png";
import s1_pike from "../../assets/images/SectionOne/pike_1.5x.png";
import s1_planet from "../../assets/images/SectionOne/planet.png";
import s1_prize from "../../assets/images/SectionOne/prize_1.5x.png";
import s1_star from "../../assets/images/SectionOne/star_1.5x.png";
import s2_one from "../../assets/images/SectionTwo/one_1.5x.png";
import s2_two from "../../assets/images/SectionTwo/two_1.5x.png";
import s2_three from "../../assets/images/SectionTwo/three_1.5x.png";
import s3_event from "../../assets/images/SectionThree/event_1.5x.png";
import s4_one from "../../assets/images/SectionFour/one.png";
import s4_two from "../../assets/images/SectionFour/two.png";
import s4_three from "../../assets/images/SectionFour/three.png";
import s4_four from "../../assets/images/SectionFour/four.png";
import footer_android from "../../assets/images/Footer/Android.png";
import footer_inst from "../../assets/images/Footer/Instagram.png";
import footer_ios from "../../assets/images/Footer/iOS.png";
import footer_macos from "../../assets/images/Footer/macOS.png";
import footer_tg from "../../assets/images/Footer/Telegram.png";
import footer_vk from "../../assets/images/Footer/VK.png";
import footer_windows from "../../assets/images/Footer/Windows.png";
import footer_youtube from "../../assets/images/Footer/YouTube.png";

const bgImages = [
  header_logo1,
  header_logo2,
  s1_hands,
  s1_pike,
  s1_planet,
  s1_prize,
  s1_star,
  s2_one,
  s2_two,
  s2_three,
  s3_event,
  s4_one,
  s4_two,
  s4_three,
  s4_four,
  footer_android,
  footer_inst,
  footer_ios,
  footer_macos,
  footer_tg,
  footer_vk,
  footer_windows,
  footer_youtube,
];

const LandingPage = () => {
  const [loadedCount, setLoadedCount] = useState(0);

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
    return <Loader text="Загрузка..." />;
  }

  return (
    <LandingPageContainer>
      <Header />
      <LineContainer />
      <SectionOne />
      <LineContainer />
      <SectionTwo />
      <LineContainer />
      <SectionThree />
      <LineContainer />
      <SectionFour />
      <LineContainer />
      <SectionFive />
      <Footer />
    </LandingPageContainer>
  );
};

export default LandingPage;
