import React from "react";

// ASSETS
import Images from "utils/images";

// STYLES
import { ContainerPartners, ContainerPartnersMap } from "./style";

// COMPONENTS
import TitleSection from "../TitleSection";

export default function Partners() {
  const fakePartners = [
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    },
    {
      logo: Images.Fakelog.src,
      alt: Images.Fakelog.alt
    }
  ];

  return (
    <ContainerPartners>
      <TitleSection title="Parceiros" />
      <ContainerPartnersMap>
        {fakePartners.map((elem, id) => {
          return (
            <article className="partners__item" key={id}>
              <img src={elem.logo} alt={elem.alt} className="partners__image" />
            </article>
          );
        })}
      </ContainerPartnersMap>
    </ContainerPartners>
  );
}
