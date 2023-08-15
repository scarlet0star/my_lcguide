"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDrag } from 'react-dnd';

const sinners = [
  "yisang",
  "faust",
  "don",
  "ryoshu",
  "meursault",
  "honglu",
  "heathcliff",
  "ishmael",
  "rodion",
  "sinclair",
  "outis",
  "gregor",
];

function Character({ character }) {
  const [, ref] = useDrag({
    type: 'CHARACTER',
    item: { character },
  });
}

export default function Search(props) {
  const [characters, setCharacters] = useState([]);
  const [sinnerName, setSinnerName] = useState("");

  const handleIconClick = async (sinner_name) => {
    try {
      const data = await import(`/public/data/${sinner_name}/index.json`);
      setCharacters(Object.values(data.default));
      setSinnerName(sinner_name);
    } catch (error) {
      console.error("Failed to load characters:", error);
    }
  };

  return (
    <div className="mb-3 col-span-1 bg-white rounded ">
      <div className="mb-4 grid grid-cols-6 gap-2 border border-[#E89B4D]">
        {sinners.map((sinner, index) => (
          <div
            key={index}
            className="hover:scale-105 transform transition-transform duration-150 cursor-pointer hover:border hover:border-gray-300 hover:shadow-md"
            onClick={() => handleIconClick(sinner)}
          >
            <Image
              src={`/images/icons/sinners/${sinner}.webp`}
              alt={`${sinner} icon`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>

      <div className="character-list grid grid-cols-3 gap-4 ">
        {characters.map((character, index) => (
          <div key={index} className="relative flex flex-col items-center ">
            <Link href={`/detail/${sinnerName}/${index+1}`}>
              <Image
                src={`/images/${sinnerName}/Identities/${character.profile}/info.png`}
                alt={character.profile}
                width={150}
                height={300}
              />
            </Link>
            <p className="w-full text-center bg-black bg-opacity-100 px-2">
              {character.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
