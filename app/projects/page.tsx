import { GoArrowDownRight } from "react-icons/go";
import DecorationBar from "@/components/DecorationBar";
import ProjectCard from "@/components/cards/ProjectCard";
import { listOfProjects } from "@/constants/ListContants";

const page = () => {
  return (
    <main className="my-20 md:my-28 max-xl:px-6 h-dvw flex flex-col">
      <DecorationBar />
      <div className="flex flex-row items-center gap-4 mb-10 relative left-[-5px] mt-2">
        <GoArrowDownRight size={25} />
        <p className="tracking-wider text-xl leading-[1.2] font-bold">
          Personal Projects
        </p>
      </div>
      <div className="grid grid-row-1 gap-7">
        {listOfProjects.map((item) => (
          <ProjectCard key={`project-item-${item.id}`} item={item} />
        ))}
      </div>
    </main>
  );
};

export default page;
