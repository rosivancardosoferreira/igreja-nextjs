import React from "react";

// STYLES
import { ContainerTitleSection } from "./style";

interface TitleSectionProps {
  title: string;
}
export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <ContainerTitleSection>
      <h1>
        {title}
        <span></span>
      </h1>
    </ContainerTitleSection>
  );
}
