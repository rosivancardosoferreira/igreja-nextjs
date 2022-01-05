import React from "react";

// ASSETS
import Icons from "utils/icons";

// STYLES
import { ContainerBannerInfos } from "./style";

export default function BannerInfos() {
  return (
    <ContainerBannerInfos>
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
    </ContainerBannerInfos>
  );
}
