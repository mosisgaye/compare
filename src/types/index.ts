// types/index.ts
export interface Plan {
    title: string;
    speed: string;
    price: string;
    features: string[];
    promotion?: string;
    engagement: string;
    tech: string;
    mobile?: boolean;
    tv?: boolean;
    operator: string;
    operatorLogo: string;
  }
  