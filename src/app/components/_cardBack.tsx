import { back } from '../../../db/habilidades';

export const CardBack = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {back.map((item) => {
        return <div key={item.id}>{item.nome}</div>;
      })}
    </div>
  );
};
