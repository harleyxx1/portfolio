import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import { WorkItemType } from "@/types/data-types";
import { IconType } from "react-icons";
import MonitorImageContainer from "../images/MonitorImageContainer";
import PhoneImageContainer from "../images/PhoneImageContainer";

interface WorkCardProps {
  item: WorkItemType;
}

const WorkCard = (props: WorkCardProps) => {
  const {
    id,
    projectName,
    projectShowCaseImage,
    projectURL,
    projectAppstoreLink,
    projectPlaystoreLink,
    type,
    techUsed,
  } = props.item;

  const container = cn(
    "flex flex-1 w-full bg-earlyDawn overflow-hidden relative md:min-h-[45dvh] lg:h-[65dvh] rounded-xl shadow-md border transition-all duration-500 border-transparent hover:border-borderColor",
    type === "monitor" ? "min-h-[30dvh]" : "min-h-[35dvh]"
  );
  const firstSectionClassname = cn(
    "flex flex-1 flex-col py-6 pl-7",
    "lg:py-16 lg:pl-20"
  );
  const firstSectionInfoClassname = cn("flex flex-col mr-1 flex-1");

  const indexClassname = cn("font-regular text-xl", "lg:font-regular text-5xl");

  const titleClassname = cn(
    "mt-2 font-bold text-sm",
    "sm:text-[30px] sm:leading-8",
    "md:text-[50px] md:leading-[50px] md:mt-6 md:max-w-[400px]",
    "lg:mt-10 lg:font-bold lg:text-6xl lg:max-w-[500px]"
  );

  const techTitleClassname = cn(
    "mt-4 font-semibold text-[9px] text-gray-800 mb-1",
    "sm:text-[13px]",
    "lg:mt-7 lg:text-lg"
  );
  const techItemContainerClassname = cn(
    "flex flex-row flex-wrap",
    "lg:mt-3 lg:max-w-[300px]"
  );
  const techItemClassname = cn("flex flex-row items-center gap-1 mr-4 mb-1");
  const techItemIconClassname = cn("h-[10px] w-[10px]", "lg:h-[20px] w-[20px]");
  const tectItemTextClassname = cn(
    "font-regular text-[9px] text-gray-800",
    "sm:text-[13px]",
    "lg:text-sm"
  );

  const viewSiteContainerClassname = cn("mt-5 flex-col");
  const viewSiteSubContainerClassname = cn(
    "flex max-w-[230px] items-center hover:cursor-pointer border-b border-b-transparent transition-all duration-700 relative hover:border-b-borderColor hover:translate-y-[-5px]"
  );
  const viewSiteTextClassname = cn(
    "text-[9px]",
    "sm:text-[13px]",
    "lg:text-xl"
  );
  const viewSiteIconClassname = cn(
    "h-[10px] w-[10px]",
    "sm:h-[15px] sm:w-[15px]",
    "lg:h-[20px] lg:w-[20px]"
  );

  const showId = id < 10 ? `0${id + 1}` : id + 1;

  const renderIcon = (icon: IconType) => {
    const Icon = icon;

    return <Icon className={techItemIconClassname} />;
  };

  const returnImage = () => {
    return (
      <div className="flex flex-1">
        {type === "monitor" ? (
          <MonitorImageContainer image={projectShowCaseImage} />
        ) : (
          <PhoneImageContainer image={projectShowCaseImage} />
        )}
      </div>
    );
  };

  return (
    <div className={container}>
      <div className={firstSectionClassname}>
        <div className={firstSectionInfoClassname}>
          <p className={indexClassname}>{showId}</p>
          <p className={titleClassname}>{projectName}</p>
          <p className={techTitleClassname}>Tech Used:</p>
          <div className={techItemContainerClassname}>
            {techUsed.map((item) => (
              <div
                key={`tech-work-${projectName}-${item.id}`}
                className={techItemClassname}
              >
                {renderIcon(item.icon)}
                <p className={tectItemTextClassname}>{item.iconName}</p>
              </div>
            ))}
          </div>
        </div>
        {(projectURL || projectPlaystoreLink || projectAppstoreLink) && (
          <div className={viewSiteContainerClassname}>
            {projectPlaystoreLink && (
              <div className={viewSiteSubContainerClassname}>
                <Link href={projectPlaystoreLink}>
                  <p className={viewSiteTextClassname}>View in Playstore</p>
                </Link>
                <GoArrowUpRight className={viewSiteIconClassname} />
              </div>
            )}
            {projectAppstoreLink && (
              <div className={viewSiteSubContainerClassname}>
                <Link href={projectAppstoreLink}>
                  <p className={viewSiteTextClassname}>View in Appstore</p>
                </Link>
                <GoArrowUpRight className={viewSiteIconClassname} />
              </div>
            )}
            {projectURL && (
              <div className={viewSiteSubContainerClassname}>
                <Link href={projectURL}>
                  <p className={viewSiteTextClassname}>View Site</p>
                </Link>
                <GoArrowUpRight className={viewSiteIconClassname} />
              </div>
            )}
          </div>
        )}
      </div>
      {returnImage()}
    </div>
  );
};

export default WorkCard;
