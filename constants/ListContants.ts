import { SiVite } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { ProjectItemType } from "@/types/data-types";
import { RiNextjsFill } from "react-icons/ri";
import portfolio from "@/public/static/images/portfolio.png";
import positivus from "@/public/static/images/positivus.png"

export const listOfProjects: ProjectItemType[] = [
  {
    id: 0,
    projectName: "My Portfolio",
    projectDescription: "Showcasing my creative projects, design expertise, and innovative solutions—explore my portfolio for fresh, impactful digital experiences.",
    projectURL: undefined,
    projectShowCaseImage: portfolio,
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