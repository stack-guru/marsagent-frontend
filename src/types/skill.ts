interface SkillItemProps {
  item: {
    label: string
    value: number
  }
}

interface SkillItemsProps {
  item: SkillItemProps[]
}

export type {
  SkillItemProps,
  SkillItemsProps
}