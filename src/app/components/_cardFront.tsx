import { front } from '../../../db/habilidades';

export const CardFront = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {front.map((item) => {
        return <div key={item.id}>{item.nome}</div>;
      })}
    </div>
  );
};
