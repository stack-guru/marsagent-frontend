interface PortfolioProps {
  item: {
    img: string;
    title: string;
    type: string;
    skill: string[];
    url: string
  };
}

interface PortfoliosProps {
  item: PortfolioProps []
}

export type {
  PortfoliosProps,
  PortfolioProps
} 
  
