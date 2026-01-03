import Image from "next/image";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { ArrowBigLeft, ArrowBigRight, Play, Volume2 } from "lucide-react";

export default function PlayBar() {
  return (
    <div className=" fixed bottom-0 flex justify-between items-center px-3 w-full min-h-23 bg-(--playbarBG) border-t border-(--labelDivider)">
      <div className=" flex items-center space-x-3">
        <div className=" relative rounded-sm h-16 aspect-square overflow-hidden">
          <Image
            src="/album-cover.jpg"
            alt="Album Cover"
            width={64}
            height={64}
            className=" absolute rounded-sm top-0 scale-99 z-10 size-16"
          />
          <div className=" absolute inset-0 bg-white/50 z-5 " />
          <Image
            src="/album-cover.jpg"
            alt="Album Cover"
            width={64}
            height={64}
            quality={100}
            className=" relative size-16 "
          />
        </div>
        <div className=" flex flex-col">
          <div className=" flex items-center justify-center space-x-2">
            <h1 className=" font-semibold text-lg leading-7">Stargazing</h1>
            <div className=" size-4 bg-neutral-400 rounded-[3px] flex items-center justify-center">
              <span className=" text-xs text-background font-bold">E</span>
            </div>
          </div>
          <p className=" text-[#fa586a] font-semibold leading-4">
            Travis Scott
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center space-y-2 mb-2">
        <div className=" flex space-x-3">
          <Button size={"icon"} variant="ghost">
            <ArrowBigLeft fill="white" className=" size-7" />
          </Button>
          <Button size={"icon"} variant="ghost">
            <Play fill="white" className=" size-7" />
          </Button>
          <Button size={"icon"} variant="ghost">
            <ArrowBigRight fill="white" className=" size-7" />
          </Button>
        </div>
        <div className=" flex items-center text-xs space-x-2">
          <p>0:00</p>
          <Slider defaultValue={[50]} max={100} className=" w-140" />
          <p>0:00</p>
        </div>
      </div>
      <div className=" flex">
        <Volume2 className=" size-4.5 mr-2" />
        <Slider defaultValue={[70]} max={100} className="w-36" />
      </div>
    </div>
  );
}
