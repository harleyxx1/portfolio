import { StaticImageData } from "next/image"
import { IconType } from "react-icons"

export type ProjectItemType = {
  id: number,
  projectName: string,
  projectDescription: string,
  projectURL: string | undefined,
  projectShowCaseImage: StaticImageData,
  type: "monitor" | "phone",
  techUsed: TechUsedItemType[]
}

export type WorkItemType = {
  id: number,
  projectName: string,
  projectURL: string | undefined,
  projectShowCaseImage: StaticImageData,
  projectPlaystoreLink: string | undefined,
  projectAppstoreLink: string | undefined,
  type: "monitor" | "phone",
  techUsed: TechUsedItemType[]
}

export type TechUsedItemType = {
  id: number,
  icon: IconType,
  iconName: string
}