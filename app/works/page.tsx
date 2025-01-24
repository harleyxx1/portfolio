import { GoArrowDownRight } from "react-icons/go";
import DecorationBar from "@/components/DecorationBar";
import { listOfWorks } from "@/constants/ListContants";
import WorkCard from "@/components/cards/WorkCard";

const page = () => {
  return (
    <main className="my-20 md:my-28 max-xl:px-6">
      <DecorationBar />
      <div className="flex flex-row items-center gap-4 mb-10 relative left-[-5px] mt-2">
        <GoArrowDownRight size={25} />
        <p className="tracking-wider text-xl leading-[1.2] font-bold">
          Selected Works
        </p>
      </div>
      <div className="grid grid-row-1 gap-7">
        {listOfWorks.map((item) => (
          <WorkCard key={`project-item-${item.id}`} item={item} />
        ))}
      </div>
    </main>
  );
};

export default page;
