import { CardBack } from './components/_cardBack';
import { CardFront } from './components/_cardFront';

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full justify-around">
      <div className="w-full  flex flex-wrap justify-around gap-2 px-3">
        <div className="h-52 border w-72 rounded-lg text-center p-4 shadow-2xl shadow-[#480d35]">
          <h2 className="pb-3">Front-End</h2>
          <CardFront />
        </div>
        <div className="h-52 border w-72  rounded-lg text-center p-4 shadow-2xl shadow-[#480d35]">
          <h2 className="pb-3">Back-End</h2>
          <CardBack />
        </div>
      </div>
      <div className="w-full flex flex-col h-52 justify-around px-3">
        <div className="px-3">
          <h2 className="text-xl pb-3">Educação</h2>
          <div className="flex justify-between">
            <p>Faculdade Metropolitana do Estado de Saão Paulo</p>
            <p>Fev 2023 - Dez 2025</p>
          </div>
        </div>
      </div>
    </main>
  );
}
