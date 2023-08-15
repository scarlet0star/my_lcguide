import Link from "next/link";
import Image from "next/image";

export default function Sinners({ params }) {
  const character = require(`public/data/${params.sinner}/index.json`);
  return (
    <>
      {Object.keys(character).map((id) => (
        <Link key={id} href={`${params.sinner}/${id}`}>
          <p className="">{character[id]["name"]}</p>
        </Link>
      ))}
    </>
  );
}
