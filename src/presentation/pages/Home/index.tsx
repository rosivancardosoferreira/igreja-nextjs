import { BtnSecondary } from "presentation/components/Buttons";
import React from "react";
import { Section } from "styles/shared";
import Icons from "utils/icons";
import Images from "utils/images";
import {
  PresentationPage,
  BannerInfosHome,
  OhterPresentationPage
} from "./style";
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
      <BannerInfosHome>
        <div>
          <article>
            {Icons.donations}
            <h2>180</h2>
            <p>Doações recebidas</p>
          </article>
          <article>
            {Icons.bannerPartners}
            <h2>5</h2>
            <p>Parceiros</p>
          </article>
          <article>
            {Icons.members}
            <h2>10</h2>
            <p>Membros</p>
          </article>
        </div>
      </BannerInfosHome>
    </>
  );
}
