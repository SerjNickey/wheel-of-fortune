import React, { useEffect, useRef } from "react";

type IYandexAd = {
  typeAd?: string;
  platform?: string;
  blockId: string;
};

const YandexAd: React.FC<IYandexAd> = ({ typeAd, platform, blockId }) => {
  const adRef = useRef(null);

  useEffect(() => {
    // Проверяем, загружен ли скрипт Яндекс.Рекламы
    // @ts-ignore
    if (!window.yaContextCb) {
      const script = document.createElement("script");
      script.src = "https://yandex.ru/ads/system/context.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Добавляем callback для инициализации
    // @ts-ignore
    window.yaContextCb = window.yaContextCb || [];
    // @ts-ignore
    window.yaContextCb.push(() => {
      // @ts-ignore
      if (typeAd && platform) {
        // @ts-ignore
        Ya.Context.AdvManager.render({
          // @ts-ignore
          renderTo: adRef.current.id,
          blockId: blockId,
          type: typeAd,
          platform,
        });
      } else {
        // @ts-ignore
        Ya.Context.AdvManager.render({
          // @ts-ignore
          renderTo: adRef.current.id,
          blockId: blockId,
        });
      }
    });

    // Очистка при размонтировании
    return () => {
      if (adRef.current) {
        // @ts-ignore
        adRef.current.innerHTML = "";
      }
    };
  }, [blockId]);

  return <div ref={adRef} id={`yandex_rtb_${blockId}`}></div>;
};

export default YandexAd;
