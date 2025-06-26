import { ReactNode } from "react"

interface ServiceCardProps {
  item: {
    icon: ReactNode,
    title: string,
    description: string
  } []
}

interface ServiceCardItemProps {
  item: {
    icon: ReactNode,
    title: string,
    description: string
  }
}

export type {
  ServiceCardProps,
  ServiceCardItemProps
}