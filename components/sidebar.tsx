"use client";

import { sideBarItems } from "@/constants";
import { Input } from "./ui/input";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const pathname = usePathname();
  return (
    <nav className=" min-w-[18rem] h-[calc(100vh-5.75rem)] bg-(--sidebarBG) pt-16 px-6 border-r border-(--labelDivider)">
      <div className=" relative">
        <svg
          height="16"
          width="16"
          fill="#fa586a"
          viewBox="0 0 16 16"
          aria-hidden="true"
          className=" top-0 bottom-0 my-auto ml-3 absolute"
        >
          <path d="M11.87 10.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 1 1-1.04 1.04l-3.863-3.864a.744.744 0 0 1-.047-.051 6.667 6.667 0 1 1 1.035-1.035zM6.667 12a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z"></path>
        </svg>
        <Input
          placeholder="Search..."
          className=" ring-[#fa586a]! pl-9 bg-background!   placeholder:font-normal"
        />
      </div>
      <div className=" mt-5 flex flex-col gap-1">
        {sideBarItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`flex items-center space-x-2 px-2 hover:bg-[rgba(235,235,245,.1)] rounded-md transition-colors py-1.5 ${
              pathname === item.href ? "bg-[rgba(235,235,245,.1)]" : ""
            }`}
          >
            <item.icon color="#fa586a" className=" size-5" />
            <span
              className={` text-[hsla(0,0%,100%,.92)] ${
                pathname === item.href ? "font-medium" : "font-normal"
              }`}
            >
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
