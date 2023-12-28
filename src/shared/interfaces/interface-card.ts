import { CSSProperties, ReactNode } from "react";

export interface CardProps {
      className?: string;     
      style?: CSSProperties;
      children: ReactNode;
}