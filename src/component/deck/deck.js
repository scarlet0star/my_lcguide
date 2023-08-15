import React from "react";
import Image from "next/image";

export default function Card({ card, toggle }) {
  const cardStyle = card.front ? {} : { filter: "grayscale(100%)" };
  return (
    <div onClick={toggle}>
      <Image
        width={180}
        height={240}
        src={card.profile}
        alt={card.name}
        quality={90}
        style={cardStyle}
      />
    </div>
  );
}
