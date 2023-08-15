"use client";
import Card from "@/component/deck/deck";
import Textbar from "@/component/deck/textbar";
import React, { useState } from "react";

export default function DeckPage() {
  const [cards, setCards] = useState({
    1: {
      name: "Card1",
      profile: "/images/10305_info.png",
      desc: "1",
      front: true,
    },
    2: {
      name: "Card2",
      profile: "/images/10305_info.png",
      desc: "2",
      front: false,
    },
    3: {
      name: "Card3",
      profile: "/images/10305_info.png",
      desc: "3",
      front: false,
    },
    4: {
      name: "Card4",
      profile: "/images/10305_info.png",
      desc: "4",
      front: false,
    },
    5: {
      name: "Card5",
      profile: "/images/10305_info.png",
      desc: "5",
      front: true,
    },
    6: {
      name: "Card6",
      profile: "/images/10305_info.png",
      desc: "6",
      front: false,
    },
    7: {
      name: "Card7",
      profile: "/images/10305_info.png",
      desc: "7",
      front: false,
    },
    8: {
      name: "Card8",
      profile: "/images/10305_info.png",
      desc: "8",
      front: true,
    },
    9: {
      name: "Card9",
      profile: "/images/10305_info.png",
      desc: "9",
      front: false,
    },
    10: {
      name: "Card10",
      profile: "/images/10305_info.png",
      desc: "10",
      front: true,
    },
    11: {
      name: "Card11",
      profile: "/images/10305_info.png",
      desc: "11",
      front: false,
    },
    12: {
      name: "Card12",
      profile: "/images/10305_info.png",
      desc: "12",
      front: false,
    },
  });

  function CardPlace() {
    const [, ref] = useDrop({
      accept: 'CHARACTER',
      drop: (item, monitor) => {
        // 캐릭터 드롭 시의 로직. item.character에 드래그한 캐릭터 정보가 있습니다.
        updateCard(item.character);
      },
    });
  
    return (
      <div className="container p-4 ">
        <div className="grid grid-cols-4 grid-rows-3 gap-y-4">
          {Object.entries(cards).map(([id, card]) => {
            return (
              <Card key={id} card={card} toggle={() => onClickCardToggle(id)} />
            );
          })}
        </div>
      </div>
    );
  }

  function updateCard(jsonData) {
    setCards(jsonData);
  }

  function onClickCardToggle(id) {
    const updatedCards = { ...cards };

    if (updatedCards[id]) {
      updatedCards[id] = {
        ...updatedCards[id],
        front: !updatedCards[id].front,
      };
    }
    setCards(updatedCards);
  }

  function CardText() {
    const frontCards = Object.entries(cards).filter(([, card]) => card.front);
    const backCards = Object.entries(cards).filter(([, card]) => !card.front);

    return (
      <div className="grid grid-row-2 gap-4">
        <div className="flex justify-center items-center">
          <p className="text-black text-center">패시브 효과</p>
        </div>
        <div>
          {frontCards.map(([id, card]) => (
            <Textbar key={id} card={card} cardId={id}  />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <p className="text-black text-center">서포터 패시브 효과</p>
        </div>
        <div>
          {backCards.map(([id, card]) => (
            <Textbar key={id} card={card} cardId={id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <CardPlace />
      </div>
      <div className="col-span-1">
        <CardText />
      </div>
    </div>
  );
}
