import Image from 'next/image';

import { Project } from '../../../db/projects';

const Projects = () => {
  return (
    <main className="p-10 h-[95%] mostly-customized-scrollbar overflow-auto flex justify-center flex-wrap gap-5">
      {Project.map((item) => {
        return (
          <div
            key={item.id}
            className=" max-w-sm rounded overflow-hidden shadow-lg border border-[#480d35] py-5"
          >
            <Image
              src="/profile.png"
              width={150}
              height={150}
              alt="Picture of the author"
            />
            <div className="px-6 py-4 cursor-default max-sm:text-center">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-300 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2 cursor-default">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #Next.Js
              </span>
            </div>
            <div className="flex justify-around mt-8">
              <button>Github</button>
              <button>Deploy</button>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Projects;
