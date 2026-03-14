import { useState } from "react";
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
  emptyStatusProps = false,
}: CarouselCardProps) {
  const [emptyStatus, setEmptyStatus] = useState(emptyStatusProps);
  return (
    <div className="relative snap-start shrink-0 ">
      {!emptyStatus && (
        <div>
          <div className="flex flex-row justify-between absolute bottom-2 left-2 z-10 w-92 ">
            <Input
              placeholder="Durasi (detik)"
              className="w-32 bg-white/60 transition-all hover:bg-white focus:bg-white"
            />
            <div className="flex flex-row gap-2">
              <Button className="bg-red-500 hover:bg-red-600 active:bg-red-700">
                <Trash></Trash>
              </Button>

              <Button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700">
                <RefreshCcw></RefreshCcw>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 z-10 w-32"></div>
        </div>
      )}

      <div className="relative z-0 aspect-video">
        {emptyStatus ? (
          <Card className="rounded-xl border-dotted border-2 bg-gray-50 w-sm h-full items-center">
            <Empty className="p-0">
              <EmptyHeader>
                <EmptyMedia variant={"icon"}>
                  <ImagePlus />
                </EmptyMedia>
                <EmptyTitle>Belum ada gambar</EmptyTitle>
                <EmptyDescription>
                  Tambahkan gambar untuk membuat campaign
                </EmptyDescription>
                <EmptyContent>
                  <Button>Test</Button>
                </EmptyContent>
              </EmptyHeader>
            </Empty>
          </Card>
        ) : (
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
            alt="Event cover"
            className="relative z-20  rounded-md h-full w-sm object-cover brightness-60 grayscale dark:brightness-40"
          />
        )}
      </div>
    </div>
  );
}
