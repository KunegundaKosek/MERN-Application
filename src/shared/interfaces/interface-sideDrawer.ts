import { ReactNode } from "react";

export interface SideDrawerProps {
      children: ReactNode;
      show: boolean;
      onClick: () => void;
}