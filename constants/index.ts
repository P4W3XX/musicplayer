import { Home,LayoutGrid } from "lucide-react";

interface SideBarItem {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const sideBarItems: SideBarItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Library",
    href: "/library",
    icon: LayoutGrid,
  },
];
