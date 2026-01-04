"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

export default function AlbumInfo() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflowing(textRef.current.scrollHeight > 64);
      console.log(textRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isExpanded &&
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isExpanded]);
  return (
    <motion.div layout>
      <motion.div className=" h-16 overflow-hidden relative">
        <motion.p
          ref={textRef}
          key={"infoMini"}
          layoutId="album-info-text"
          className=" max-w-[30rem] text-sm z-20 text-neutral-400 h-auto font-medium"
        >
          Travis Scott sent a message to Apple Music about his third album,
          playfully attributed to Stormi, his infant daughter: “Just BUCKLE UP.”
          Stormi can’t speak yet, presumably, but the sentiment still rings true
          for a record named after a closed amusement park in his native
          Houston.
        </motion.p>
        {isOverflowing && (
          <button
            onClick={() => setIsExpanded(true)}
            className=" absolute bottom-0 right-0 bg-background font-medium text-xs mb-1 px-1 shadow-[-10px_0_10px_rgba(0,0,0,0.1)] shadow-background cursor-pointer"
          >
            MORE
          </button>
        )}
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=" absolute top-0 left-0 bg-black/40 flex items-center pb-50 justify-center z-10 w-full h-full"
          >
            <motion.div
              ref={containerRef}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.2 }}
              transition={{
                damping: 20,
              }}
              className=" w-[45rem] h-auto space-y-10 rounded-xl flex flex-col justify-between bg-[#1F1F1F] p-8"
            >
              <motion.div className=" flex items-start justify-between">
                <motion.div>
                  <div className=" flex items-center space-x-2">
                    <h1 className=" font-semibold text-2xl">ASTROWORLD</h1>
                    <div className=" size-4 bg-neutral-400 rounded-xs flex items-center justify-center">
                      <span className="  text-background text-xs font-bold">E</span>
                    </div>
                  </div>
                  <div className=" flex items-center space-x-1 text-neutral-400 text-sm font-medium">
                    <p className=" text-[#fa586a]">Travis Scott</p>
                    <p>•</p>
                    <p>2018</p>
                  </div>
                </motion.div>
                <Button
                  size={"icon-lg"}
                  variant={"ghost"}
                  onClick={() => setIsExpanded(false)}
                >
                  <X className=" size-7" />
                </Button>
              </motion.div>
              <motion.p
                key={"infoExpanded"}
                layoutId="album-info-text"
                className=" text-[hsla(0,0%,100%,.92)] z-20"
              >
                Travis Scott sent a message to Apple Music about his third
                album, playfully attributed to Stormi, his infant daughter:
                “Just BUCKLE UP.” Stormi can’t speak yet, presumably, but the
                sentiment still rings true for a record named after a closed
                amusement park in his native Houston.
                <i> ASTROWORLD </i>
                delivers its twists and turns via some of Scott’s most personal
                lyrics yet, unexpected musical arrangements, and a diverse guest
                list. “SICKO MODE” features multiple beat changes and Drake
                halted midverse, playing like some kind of funhouse trip. Other
                sideshows include Stevie Wonder playing harmonica, James Blake
                crooning, The Weeknd emoting, and Tame Impala’s Kevin Parker
                shredding — but the main attraction is still Scott's life. On
                album closer “COFFEE BEAN,” Scott tells an unnamed lover, "Your
                family told you I'm a bad move...plus I'm already a black dude."
                At 17 tracks,
                <i> ASTROWORLD </i>
                is like any great theme park: There’s just so much to see.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
