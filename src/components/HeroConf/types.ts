export interface Props {
    title: string;
    subtitle: string;
    className?: string;
    to: string;
    children: React.ReactNode;
    type?: "odd" | "even";
  }
  
  export interface State {}