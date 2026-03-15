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

export default function CarouselCard() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <div className="relative aspect-video  ">
      <input
        ref={fileInputRef}
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setSelectedImage(file);
          }
        }}
        className="hidden"
      ></input>
      {selectedImage && (
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
                onClick={() => setSelectedImage(null)}
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

      <div className="relative z-0 ">
        {!selectedImage ? (
          <Card className="rounded-xl border-dotted border-2 bg-gray-50 items-center">
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
                  <Button
                    type={"button"}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Test
                  </Button>
                </EmptyContent>
              </EmptyHeader>
            </Empty>
          </Card>
        ) : (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Event cover"
            className="relative z-20 rounded-md object-cover dark:brightness-40"
          />
        )}
      </div>
    </div>
  );
}
