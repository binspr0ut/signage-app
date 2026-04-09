import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { PlayIcon } from "lucide-react";

export default function PlayPage() {
  return (
    <div className="p-12 flex flex-col gap-4 max-w-screen">
      <h1 className="font-bold text-3xl">Play Campaign</h1>
      <Separator />
      <div className="px-16 py-8 bg-gray-100 rounded-xl border-dashed border">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/3">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                  alt="Event cover"
                  className="relative z-20 aspect-video w-full object-cover"
                ></img>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="w-full flex justify-center">
        <Button>
          <PlayIcon></PlayIcon> Play
        </Button>
      </div>
    </div>
  );
}
