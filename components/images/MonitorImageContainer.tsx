import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface MonitorImageContainerProps {
  image: StaticImageData;
}

const MonitorImageContainer = (props: MonitorImageContainerProps) => {
  const imageContainerClassName = cn(
    "flex transition-all duration-500 h-[230px] w-[300px] absolute bottom-0",
    "sm:right-[-20px]",
    "md:h-[300px] md:w-[400px] md:right-[-80px]",
    "lg:h-[450px] lg:w-[550px] lg:right-[-120px]",
    "xl:h-[500px] xl:w-[650px] xl:right-10"
  );

  return (
    <div className="flex flex-1">
      <div className={imageContainerClassName}>
        <Image src={props.image} fill alt="image" />
      </div>
    </div>
  );
};

export default MonitorImageContainer;
