import { ReactNode } from "react";

interface SocialIconProps {
  item: {
    link: string;
    icon: ReactNode;
  };
}

interface SocialIconsProps {
  item: {
    link: string;
    icon: ReactNode;
  }[];
}

interface ExperienceProps {
  item: {
    startAt: string;
    endAt: string;
    role: string;
    companyName: string;
    description: string;
  };
}

interface ExperiencesProps {
  item: {
    startAt: string;
    endAt: string;
    role: string;
    companyName: string;
    description: string;
  } [];
}

export type { SocialIconProps, SocialIconsProps, ExperienceProps, ExperiencesProps };
