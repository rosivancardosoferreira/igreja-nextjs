import React from "react";

// ASSETS
import Icons from "utils/icons";

// STYLES
import { ContainerCardNews } from "./style";

interface CardNewsProps {
  image: string;
  title: string;
  description: string;
  date: string;
  id: string;
}
export default function CardNews({
  image,
  title,
  description,
  date,
  id
}: CardNewsProps) {
  return (
    <ContainerCardNews>
      <div className="card__main">
        <img src={image} alt="Banner Card Post" className="card__image" />
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__footer">
        <article className="card_content__date">
          {Icons.calendar}
          <span className="card__date">{date}</span>
        </article>
        <a href={"#" + id} className="card__read__more down">
          Continuar leitura
          {Icons.readMore}
        </a>
      </div>
    </ContainerCardNews>
  );
}
