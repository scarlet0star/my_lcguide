import Frame from "@/component/frame/frame";
import React from "react";

export default function detail({ params }) {
  const character = require(`public/data/${params.sinner}/${params.id}.json`);

  return (
    <div className="container mx-auto my-10">
      <div className="w-3/4 mx-auto bg-[#3A2716] border border-[#E89B4D]">
        <Frame json={character} params={params} />
      </div>
    </div>
  );
}
