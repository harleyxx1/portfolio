import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface PhoneImageContainerProps {
  image: StaticImageData;
}

const PhoneImageContainer = (props: PhoneImageContainerProps) => {
  const imageContainerClassName = cn(
    "flex transition-all duration-500 h-[230px] w-[130px] absolute bottom-[-20px] right-3",
    "xs:h-[350px] xs:w-[200px] xs:right-5 xs:bottom-[-80px]",
    "sm:right-0 sm:h-[350px] sm:w-[200px] sm:bottom-[-40px] sm:right-10",
    "md:h-[400px] md:w-[240px]",
    "lg:h-[540px] lg:w-[340px]",
    "xl:h-[580px] xl:w-[340px] xl:bottom-[-50px] xl:right-[100px]"
  );

  return (
    <div className="flex flex-1">
      <div className={imageContainerClassName}>
        <Image src={props.image} fill alt="image" />
      </div>
    </div>
  );
};

export default PhoneImageContainer;
