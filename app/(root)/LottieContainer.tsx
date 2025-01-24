"use client";

import dynamic from "next/dynamic";
import developer from "@/public/static/lottie/developer.json";
import web from "@/public/static/lottie/web.json";
import mobile from "@/public/static/lottie/mobile.json";

const LottieAnimation = dynamic(
  () => import("../../components/LottieComponent"),
  { ssr: false }
);

const LottieContainer = () => {
  return (
    <div className="flex flex-1 items-center justify-center relative">
      <LottieAnimation animationData={developer} loop={true} />
      <div className="absolute h-[150px] left-[20px] top-[50px] sm:left-[80px] md:left-[130px] lg:h-[180px] lg:left-[30px]">
        <LottieAnimation animationData={web} loop={true} />
      </div>
      <div className="absolute h-[90px] right-0 bottom-[100px] sm:right-[50px] md:right-[90px] lg:h-[100px] lg:right-0 lg:bottom-[150px]">
        <LottieAnimation animationData={mobile} loop={true} />
      </div>
    </div>
  );
};

export default LottieContainer;
