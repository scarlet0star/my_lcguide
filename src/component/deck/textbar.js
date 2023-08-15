import Image from 'next/image'

export default function Textbar({ cardId, card }) {
  return (
    <div
      className={`bg-card-${cardId} rounded-lg p-4 text-black border`}
    >
      <Image src=""/>
      <p>{card.desc}</p>
    </div>
  );
}
