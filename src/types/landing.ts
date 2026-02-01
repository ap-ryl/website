export interface FeatureCardProps {
  title: string;
  description: string;
  category: string;
  icon?: React.ReactNode;
  className?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FloatingIcon {
  id: number;
  x: number;
  y: number;
  type: string;
  opacity: number;
  rotation: number;
  scale: number;
}
