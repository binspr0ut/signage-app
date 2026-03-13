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
import { ImagePlus } from "lucide-react";
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
    <div className="relative">
      {!emptyStatus && (
        <div className="absolute bottom-2 left-2 z-10 w-32">
          <Input
            placeholder="Durasi (detik)"
            className="bg-white/60 transition-all hover:bg-white focus:bg-white"
          />
        </div>
      )}

      <div className="relative z-0 aspect-video">
        {emptyStatus ? (
          <Card className="rounded-xl border-dotted border-2 bg-gray-50 w-sm  items-center">
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
            className="relative z-20 h-full rounded-md w-full object-cover brightness-60 grayscale dark:brightness-40"
          />
        )}
      </div>
    </div>
  );
}
