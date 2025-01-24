import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { ProjectItemType, WorkItemType } from "@/types/data-types";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiMobx } from "react-icons/si";
import { FaJira } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import portfolio from "@/public/images/portfolio.png";
import positivus from "@/public/images/positivus.png";
import ic from "@/public/images/ic.png";
import unioil from "@/public/images/unioil.png";
import toktok from "@/public/images/toktok.png";
import stuff from "@/public/images/stuff.png";

export const listOfProjects: ProjectItemType[] = [
  {
    id: 0,
    projectName: "My Portfolio",
    projectDescription: "Showcasing my creative projects, design expertise, and innovative solutions—explore my portfolio for fresh, impactful digital experiences.",
    projectURL: undefined,
    projectShowCaseImage: portfolio,
    type: "monitor",
    techUsed: [
      {
        id: 0,
        icon: FaReact,
        iconName: "ReactJS"
      },
      {
        id: 1,
        icon: RiNextjsFill,
        iconName: "NextJS"
      },
      {
        id: 2,
        icon: RiTailwindCssFill,
        iconName: "Tailwind"
      }
    ]
  },
  {
    id: 1,
    projectName: "Positivus Landing Page",
    projectDescription: "A vibrant landing page offering motivational content, tips, and resources to inspire positivity and personal growth.",
    projectURL: "https://cute-kangaroo-95f1ae.netlify.app/",
    projectShowCaseImage: positivus,
    type: "monitor",
    techUsed: [
      {
        id: 0,
        icon: FaReact,
        iconName: "ReactJS"
      },
      {
        id: 1,
        icon: SiVite,
        iconName: "Vite"
      },
      {
        id: 2,
        icon: RiTailwindCssFill,
        iconName: "Tailwind"
      }
    ]
  },
]

export const listOfWorks: WorkItemType[] = [
  {
    id: 0,
    projectName: "Unioil Loyalty App",
    projectURL: "https://unioil.com/",
    projectPlaystoreLink: "https://play.google.com/store/apps/details?id=com.project.yondu.unioilloyaltyapp&hl=en",
    projectAppstoreLink: "https://apps.apple.com/ph/app/unioil/id1517293002",
    projectShowCaseImage: unioil,
    type: "phone",
    techUsed: [
      {
        id: 0,
        icon: FaReact,
        iconName: "ReactJS"
      },
      {
        id: 1,
        icon: TbBrandReactNative,
        iconName: "React Native"
      },
      {
        id: 2,
        icon: SiRedux,
        iconName: "Redux"
      },
      {
        id: 3,
        icon: TbApi,
        iconName: "RestAPI"
      }
    ]
  },
  {
    id: 1,
    projectName: "toktok (Mall Module)",
    projectURL: "https://toktok.ph/",
    projectPlaystoreLink: "https://play.google.com/store/apps/details?id=ph.cloudpanda.toktok&hl=en",
    projectAppstoreLink: "https://apps.apple.com/ph/app/toktok-ph/id1522988322",
    projectShowCaseImage: toktok,
    type: "phone",
    techUsed: [
      {
        id: 0,
        icon: FaReact,
        iconName: "ReactJS"
      },
      {
        id: 1,
        icon: TbBrandReactNative,
        iconName: "React Native"
      },
      {
        id: 2,
        icon: SiRedux,
        iconName: "Redux"
      },
      {
        id: 3,
        icon: TbApi,
        iconName: "RestAPI"
      }
    ]
  },
  {
    id: 2,
    projectName: "StuffPH",
    projectURL: undefined,
    projectPlaystoreLink: "",
    projectAppstoreLink: "",
    projectShowCaseImage: stuff,
    type: "phone",
    techUsed: [
      {
        id: 0,
        icon: FaReact,
        iconName: "ReactJS"
      },
      {
        id: 1,
        icon: TbBrandReactNative,
        iconName: "React Native"
      },
      {
        id: 2,
        icon: SiRedux,
        iconName: "Redux"
      },
      {
        id: 3,
        icon: TbApi,
        iconName: "RestAPI"
      },
      {
        id: 4,
        icon: FaJira ,
        iconName: "Jira"
      },
    ]
  },
  {
    id: 3,
    projectName: "Initial Care",
    projectURL: "https://initialcare.com.ph/",
    projectPlaystoreLink: "",
    projectAppstoreLink: "",
    projectShowCaseImage: ic,
    type: "phone",
    techUsed: [
      {
        id: 1,
        icon: FaReact,
        iconName: "ReactJS"
      },
      {
        id: 2,
        icon: TbBrandReactNative,
        iconName: "React Native"
      },
      {
        id: 3,
        icon: GrGraphQl ,
        iconName: "GraphQL"
      },
      {
        id: 4,
        icon: SiMobx ,
        iconName: "MobX"
      },
      {
        id: 5,
        icon: FaJira ,
        iconName: "Jira"
      },
    ]
  },
]