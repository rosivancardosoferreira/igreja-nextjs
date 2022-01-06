import { BtnSecondary } from "presentation/components/Buttons";
import React from "react";

// ASSETS
import Images from "utils/images";

// STYLES
import { PresentationPage } from "./style";

// COMPONENTS
import BannerInfos from "presentation/components/BannerInfos";
import News from "presentation/components/News";
import Partners from "presentation/components/Partners";

export default function Home() {
  return (
    <>
      <PresentationPage>
        <h1>Texto para a capa do blog trala lala la</h1>
        <p>
          Sonhamos com um mundo novo em que o futuro não seja definido pela
          nossa origem.
        </p>
        <BtnSecondary title="Conheça mais da causa" />
        <img src={Images.Banner.src} alt={Images.Banner.alt} />
      </PresentationPage>
      <BannerInfos />
      <News />
      <Partners />
    </>
  );
}
