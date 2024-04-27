import Link from 'next/link';

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" w-[75%] h-full rounded-lg bg-slate-500 shadow-lg bg-clip-padding bg-opacity-60 max-sm:w-full">
      <nav className="w-full h-[5%] flex justify-between p-10">
        <h2 className="cursor-default">Pagina do momento</h2>
        <ul className="flex gap-5">
          <li>
            <Link
              href="/about"
              className="hover:border-b-[3px] border-[#551641]"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:border-b-[3px] border-[#551641]"
            >
              Projetos
            </Link>
          </li>
        </ul>
      </nav>

      <div className="h-[90%]">{children}</div>
    </main>
  );
};

export default Content;
