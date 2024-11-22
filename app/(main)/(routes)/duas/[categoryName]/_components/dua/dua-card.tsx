"use client";

import { Skeleton } from "@/components/ui/skeleton";
import clsx from "clsx";
import {
  AlertOctagon,
  AudioLines,
  Bookmark,
  Copy,
  Lightbulb,
  Play,
  Share2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

interface DuaCardProps {
  referenceEn: string;
  serial: number;
  duaName: string;
  topEn: string;
  duaAradic: string;
  transliterationEn: string;
  translationEn: string;
  audio: string;
}

const DuaCard = ({
  duaAradic,
  duaName,
  referenceEn,
  serial,
  topEn,
  translationEn,
  transliterationEn,
  audio,
}: DuaCardProps) => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const onPlay = () => {
    if (!playerRef.current) return;
    togglePlay();
    // playerRef.current.addEventListener("play", handlePlay);
    // playerRef.current.addEventListener("pause", handlePause);
  };

  const togglePlay = () => {
    if (!playerRef.current) return;

    if (playerRef.current.paused) {
      playerRef.current.play();
      setPlaying(true);
    } else {
      setPlaying(false);
      playerRef.current.pause();
    }
  };

  return (
    <Link href={""} className='space-y-2'>
      <div
        className='
        inline-flex 
        w-full
        text-base
        border-[1px]
        shadow-sm
        bg-white
        font-semibold
        rounded-lg p-4'
      >
        <p className='text-black'>
          <span className='text-[#1fa45b] font-semibold'>Section: </span>{" "}
          {duaName}
        </p>
      </div>
      <div
        className='
            border-[1px]
            shadow-sm
            bg-white
            rounded-lg p-4'
      >
        <div className='flex flex-col space-y-4 lg:space-y-6 font-semibold'>
          <div className='flex items-center '>
            <Image
              width={40}
              height={40}
              className='object-contain mr-2'
              alt='allah'
              src={"/allah.png"}
            />
            <p className='text-[#1fa45b] text-base'>
              {serial}. {duaName}
            </p>
          </div>
          <p className='md:text-lg'>{topEn}</p>
          <p
            className='text-black text-2xl md:text-3xl tracking-widest text-right font-medium'
            style={{ lineHeight: "3rem" }}
          >
            {duaAradic}
          </p>
          {transliterationEn && (
            <div className='inline-flex w-full   md:text-lg'>
              <p className='text-black italic'>
                <span className=''>Transliteration: </span> {transliterationEn}
              </p>
            </div>
          )}
          {translationEn && (
            <div className='inline-flex w-full md:text-lg'>
              <p className='text-black'>
                <span className=''>Translation: </span> {translationEn}
              </p>
            </div>
          )}
          {referenceEn && (
            <div>
              <span className='text-[#1fa45b]'>Reference:</span>
              <p className='md:text-lg'>{referenceEn}</p>
            </div>
          )}
          <div>
            {audio && (
              <div>
                <audio controls className='hidden' ref={playerRef}>
                  <source src={audio} type='audio/mp3' />
                </audio>
                <div
                  role='button'
                  onClick={onPlay}
                  className={clsx(
                    "rounded-full h-10 w-10 flex items-center justify-center transition  bg-[#1fa45b] hover:bg-green-600",
                    playing && "bg-green-600"
                  )}
                >
                  {playing ? (
                    <AudioLines
                      size={16}
                      className='ml-0.5 fill-white text-white'
                    />
                  ) : (
                    <Play size={16} className='ml-0.5 fill-white text-white' />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='w-full flex items-center justify-end space-x-2 mt-6'>
          <div
            role='button'
            className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
          >
            <Copy className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
          </div>
          <div
            role='button'
            className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
          >
            <Bookmark className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
          </div>
          <div
            role='button'
            className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
          >
            <Lightbulb className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
          </div>
          <div
            role='button'
            className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
          >
            <Share2 className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
          </div>
          <div
            role='button'
            className='group flex gap-x-3text-sm
                    p-3 
                    leading-6
                    rounded-full
                    hover:text-black
                    bg-gray-100
                    text-gray-500'
          >
            <AlertOctagon className='h-4 w-4 md:h-5 md:w-5 shrink-0 group-hover:scale-110 duration-300 ease-in-out transition-all' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DuaCard;

export function DuaCardSkeleton() {
  return (
    <div className="space-y-2">
      <div
        className='
      inline-flex 
      w-full
      text-base
      border
      shadow-sm
      bg-white
      font-semibold
      rounded-lg
      space-x-2
      p-4
    '
      >
        <Skeleton className='h-4 w-10 rounded-xl' />
        <Skeleton className='h-4 w-[200px]' />
      </div>

      <div
        className='
      border
      shadow-sm
      bg-white
      rounded-lg
      p-4
    '
      >
        <div className='flex flex-col space-y-4 lg:space-y-6 font-semibold'>
          <div className='flex items-center space-x-3'>
            <Skeleton className='h-10 w-10 rounded-full shrink-0' />
            <Skeleton className='h-4 w-full' />
          </div>
          
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-10 w-10 rounded-full' />
        </div>
        <div className='w-full flex items-center justify-end space-x-2 mt-6'>
          <div className='flex items-center justify-end space-x-4'>
            <Skeleton className='h-10 w-10 rounded-md' />
            <Skeleton className='h-10 w-10 rounded-md' />
            <Skeleton className='h-10 w-10 rounded-md' />
            <Skeleton className='h-10 w-10 rounded-md' />
            <Skeleton className='h-10 w-10 rounded-md' />
          </div>
        </div>
      </div>
    </div>
  );
}

// <div
//   className='inline-flex
//     w-full
//     text-base
//     border-[1px]
//     shadow-sm
//     bg-white
//     font-semibold
//     rounded-lg p-4'
// >
//   <div className='space-y-2'>
//     <Skeleton className='h-4 w-4 rounded-full' />
//     <Skeleton className='h-4 w-[200px]' />
//   </div>
//   <div
//     className='border-[1px]
//         shadow-sm
//         bg-white
//         rounded-lg p-4'
//   >
//     <Skeleton className='h-4 w-full rounded-xl' />
//     <Skeleton className='h-4 w-full rounded-xl' />
//     <Skeleton className='h-4 w-full rounded-xl' />
//   </div>
//   <div className='flex items-center justify-end space-x-4'>
//     <Skeleton className='h-6 w-6 rounded-md' />
//     <Skeleton className='h-6 w-6 rounded-md' />
//     <Skeleton className='h-6 w-6 rounded-md' />
//     <Skeleton className='h-6 w-6 rounded-md' />
//     <Skeleton className='h-6 w-6 rounded-md' />
//   </div>
// </div>
