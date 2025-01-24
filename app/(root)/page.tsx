import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AppContentConstants } from "@/constants/AppContentConstants";
import DecorationBar from "@/components/DecorationBar";
import LottieContainer from "./LottieContainer";

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full max-xl:px-6 my-20 md:my-28 relative">
      <div className="flex flex-col lg:justify-between h-full flex-1 z-10 mr-10">
        <div>
          <DecorationBar />
          <p className="mt-5 tracking-wider text-3xl sm:text-[50px] leading-[1.2] font-bold">
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
      <LottieContainer />
    </div>
  );
};

export default page;
