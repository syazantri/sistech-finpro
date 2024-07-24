import React from "react";
import type { PathProps } from "./CardPath";
import { CardPath } from "./CardPath";

type CardPathListProps = {
  cards: PathProps[];
};

function CardList({ cards }: CardPathListProps) {
  return (
    <div>
      <div className="flex flex-wrap gap-12 justify-center">
        {cards.map((card, index) => (
          <CardPath key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export { CardList };
