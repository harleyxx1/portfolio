import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AppContentConstants } from "@/constants/AppContentConstants";
import LottieComponent from "@/components/LottieComponent";
import developer from "@/public/lottie/developer.json";
import web from "@/public/lottie/web.json";
import mobile from "@/public/lottie/mobile.json";
import DecorationBar from "@/components/DecorationBar";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full max-xl:px-6 my-20 md:my-28 relative">
      <div className="flex flex-col lg:justify-between h-full flex-1 z-10 mr-10">
        <div>
          <DecorationBar />
          <p className="mt-5 tracking-wider text-3xl sm:text-[50px] leading-[1.2] font-extrabold">
            {AppContentConstants.showcaseHeader}
          </p>
          <p className="mt-5 tracking-wider text-[15px] sm:text-[20px] leading-[1.3] font-semibold">
            {AppContentConstants.showcaseSubtitle}
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <p className="font-bold text-[24px]">Follow me</p>
          <div className="flex flex-row gap-7">
            <Link href={AppContentConstants.facebookLink}>
              <FaFacebook size={25} />
            </Link>
            <Link href={AppContentConstants.xLink}>
              <FaTwitter size={25} />
            </Link>
            <Link href={AppContentConstants.instagramLink}>
              <FaInstagram size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center relative">
        <LottieComponent animationData={developer} loop={true} />
        <div className="absolute h-[150px] left-[20px] top-[50px] sm:left-[80px] md:left-[130px] lg:h-[180px] lg:left-[30px]">
          <LottieComponent animationData={web} loop={true} />
        </div>
        <div className="absolute h-[90px] right-0 bottom-[100px] sm:right-[50px] md:right-[90px] lg:h-[100px] lg:right-0 lg:bottom-[150px]">
          <LottieComponent animationData={mobile} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default page;
