import { StaticImageData } from "next/image"
import { IconType } from "react-icons"

export type ProjectItemType = {
  id: number,
  projectName: string,
  projectDescription: string,
  projectURL: string | undefined,
  projectShowCaseImage: StaticImageData,
  techUsed: TechUsedItemType[]
}

export type TechUsedItemType = {
  id: number,
  icon: IconType,
  iconName: string
}