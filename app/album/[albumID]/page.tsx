import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import AlbumInfo from "@/components/albumInfo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AlbumPage() {
  return (
    <div>
      <div className=" m-10 flex items-end h-[18rem] space-x-8">
        <div className=" relative rounded-lg h-full aspect-square overflow-hidden">
          <Image
            src="/album-cover.jpg"
            alt="Album Cover"
            width={2000}
            height={2000}
            className=" absolute rounded-lg top-0 scale-99 z-10"
          />
          <div className=" absolute inset-0 bg-white/20 z-5 " />
          <Image
            src="/album-cover.jpg"
            alt="Album Cover"
            width={2000}
            height={2000}
            className=" relative "
          />
        </div>
        <div className=" flex-col flex justify-between h-full">
          <div className=" flex flex-col mt-10">
            <div className=" flex items-center space-x-2">
              <h1 className=" font-semibold text-3xl">ASTROWORLD</h1>
              <div className=" size-5 bg-neutral-400 rounded-xs flex items-center justify-center">
                <span className="  text-background font-bold">E</span>
              </div>
            </div>
            <p className=" text-2xl text-[#fa586a]">Travis Scott</p>
            <div className=" flex space-x-2 text-sm font-bold text-neutral-400">
              <p>HIP-HOP/RAP</p>
              <p>•</p>
              <p>2018</p>
            </div>
          </div>
          <AlbumInfo />
          <Button className=" mt-6 px-10! py-3 text-white  justify-start hover:bg-[#D60017]/70 w-min font-semibold bg-[#D60017]">
            <Play className=" size-4" fill="currentColor" />
            PLAY
          </Button>
        </div>
      </div>
    </div>
  );
}
