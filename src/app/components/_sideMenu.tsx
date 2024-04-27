import Image from 'next/image';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

const SideMenu = () => {
  return (
    <main className=" bg-slate-500 shadow-lg bg-clip-padding bg-opacity-60 w-[25%] h-full rounded-lg p-10 max-sm:w-full">
      <div className="w-full h-[33.33%] flex flex-col items-center justify-center text-center">
        <Image
          src="/perfil.jpeg"
          width={150}
          height={150}
          alt="Foto de perfil"
          className="rounded-full mb-5"
        />
        <h2 className="my-3 text-2xl ">Leonardo Santos</h2>
        <span className="text-">Full Stack Developer</span>
      </div>
      <div className="w-full h-[33.33%] flex gap-3 mt-3 items-center justify-around">
        <a href="#" target="_blank">
          <FaLinkedin size={25} />
        </a>
        <a href="#" target="_blank">
          <FaGithub size={25} />
        </a>
        <a href="#" target="_blank">
          <FaYoutube size={25} />
        </a>
      </div>
      <div className="w-full h-[33.33%] flex flex-col gap-3 items-center justify-center text-center">
        <p className="text-center">
          É necessário acreditar que sempre é possível
        </p>
        <p>Entre em contato 👇</p>
        <button className="border border-white p-3 rounded-lg">Email</button>
      </div>
    </main>
  );
};

export default SideMenu;
