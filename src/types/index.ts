import { ReactNode } from "react"

interface SubjectProps {
  item:{
    svg: ReactNode,
    title: string
  }
}

interface SectionDescriptionProps {
  item: {
    first_text: string,
    second_text: string,
    third_text: string,
    description: string,
  },
  wide?: boolean
}

export type {
  SubjectProps,
  SectionDescriptionProps
}