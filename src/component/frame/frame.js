"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Frame({ json, params }) {
  const names = {
    yisang: "이상",
    faust: "파우스트",
    don: "돈키호테",
    ryoshu: "료슈",
  };

  const resi_status = {
    0.5: "내성",
    1: "보통",
    2: "취약",
  };

  const status = [
    { key: "HP", icon: "hp", value: json.HP },
    { key: "speed", icon: "speed", value: json.speed },
    { key: "defense", icon: "defense", value: json.defense },
  ];

  const [syncro, setSyncro] = useState(false);

  const handleSyncro = () => {
    setSyncro(!syncro);
  };

  const renderPassiveSkills = () => {
    // 예시로 2개의 패시브 스킬만 렌더링
    const passiveSkills = [json.skill_base.p1, json.skill_base.p2];

    return passiveSkills.map((skill, index) => (
      <div key={index} className="col-span-1">
        <p>{skill.name}</p>
        <div className="flex items-center">
          <Image
            src={`/images/icons/${skill.condition[0]}.webp`}
            alt={skill.condition[0]}
            width={30}
            height={30}
          />
          x {skill.condition[1]} {skill.condition[2] == "res" ? "공명" : "소유"}
        </div>
      </div>
    ));
  };

  const renderActiveSkills = () => {
    // 예시로 4개의 액티브 스킬만 렌더링
    const activeSkills = [
      json.skill_base.a1,
      json.skill_base.a2,
      json.skill_base.a3,
      json.skill_base.a4,
    ];

    return activeSkills.map((skill, index) => (
      <div key={index} className="col-span-1">
        <p>{skill.name}</p>
        <div className="flex items-center">
          <Image
            src={`/images/icons/${skill.sin}.webp`}
            width={40}
            height={40}
            alt=""
          />
          <Image
            src={`/images/icons/${skill.type}.webp`}
            width={40}
            height={40}
            alt=""
          />
          <Image
            src={`/images/icons/attack.webp`}
            width={40}
            height={40}
            alt=""
          />
        </div>
      </div>
    ));
  };

  const renderStatus = () => {
    return status.map((status) => (
      <div key={status.key} className="flex items-center">
        <Image
          alt=""
          src={`/images/icons/${status.icon}.webp`}
          height={30}
          width={30}
        />
        <p className="px-4">{status.value}</p>
      </div>
    ));
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
      <div className="col-span-1 row-span-1 p-4 bg-black border border-[#E89B4D]">
        <Image
          alt=""
          src={`/images/${params.sinner}/identities/${json.image}/main.png`}
          height={600}
          width={600}
        />
      </div>
      <div className="col-span-1 row-span-1 p-4 border border-[#E89B4D]">
        <div className="text-center text-2xl mb-4 flex items-center justify-center">
          <Image
            src={`/images/icons/sinners/${params.sinner}.webp`}
            alt={`${params.sinner} icon`}
            width={36}
            height={36}
          />
          <span
            className={`ml-4 custom-text bg-card-1 bg-gradient-to-r from-transparent via-card-1 to-transparent`}
          >
            [{json.name}] {names[params.sinner]}
          </span>
        </div>
        {renderStatus()}
        <div className="pt-3 flex flex-col items-center" onClick={handleSyncro}>
          <div className="flex items-center">
            <Image
              src={`/images/icons/sync${syncro ? 4 : 3}.webp`}
              alt={`sync${syncro ? 4 : 3}}`}
              width={30}
              height={30}
            />
            <span className="ml-8">{`${syncro ? 3 : 4}`} 동기화로 전환</span>
          </div>
        </div>
      </div>
      <div className="col-span-2 row-span-1 border border-[#E89B4D]">
        <div className="grid grid-cols-2 gap-4">{renderPassiveSkills()}</div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {renderActiveSkills()}
        </div>
      </div>
    </div>
  );
}
