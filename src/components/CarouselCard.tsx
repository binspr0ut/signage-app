import { useRef, useState } from "react";
import { Card } from "./ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { ImagePlus, RefreshCcw, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type CarouselCardProps = {
  emptyStatusProps?: boolean;
};

export default function CarouselCard({
  file,
  onChange,
  isAddCard = false,
}: {
  file?: File | null;
  onChange?: (file: File | null) => void;
  isAddCard?: boolean;
}) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative aspect-video shrink-0">
      <input
        ref={fileInputRef}
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0] || null;
          onChange?.(file);
        }}
        className="hidden"
      ></input>

      {!isAddCard && file && (
        <div>
          <div className="flex flex-row justify-between absolute bottom-2 left-2 z-30 w-92 ">
            <Input
              placeholder="Durasi (detik)"
              className="w-32 bg-white opacity-60
               transition-all hover:opacity-80 focus:opacity-100"
            />
            <div className="flex flex-row gap-2">
              <Button
                type="button"
                onClick={() => onChange?.(null)}
                className="bg-red-500 hover:bg-red-600 active:bg-red-700"
              >
                <Trash></Trash>
              </Button>

              <Button
                type="button"
                onClick={() => {
                  if (!fileInputRef.current) return;

                  fileInputRef.current.value = "";
                  fileInputRef.current.click();
                }}
                className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
              >
                <RefreshCcw></RefreshCcw>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 z-10 w-32"></div>
        </div>
      )}

      {!isAddCard && file && (
        <img
          src={URL.createObjectURL(file)}
          alt="Event cover"
          className="relative z-20 rounded-md aspect-video w-sm h-full object-cover dark:brightness-40"
        />
      )}

      {isAddCard && (
        <div className="flex flex-col gap-2 items-center justify-center p-4 aspect-square rounded-xl border border-dashed transition-all duration-300 hover:bg-gray-100 active:bg-gray-300">
          <button
            type="button"
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            <ImagePlus size={24}></ImagePlus>
          </button>
        </div>
      )}
    </div>
  );
}
