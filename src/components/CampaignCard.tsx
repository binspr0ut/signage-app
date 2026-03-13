"use client";

import {
  BadgeCheckIcon,
  BadgeIcon,
  ChevronLeft,
  ChevronRight,
  Circle,
  CircleAlert,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { useEffect, useState } from "react";

export default function CampaignCard() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList.length);
    };

    updateCarouselState();

    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState);
    };
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    console.log(index);
    carouselApi?.scrollTo(index);
  };

  return (
    <Card className="relative max-w-sm pt-0">
      <div className="relative group">
        <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="">
          <CarouselContent>
            <CarouselItem className="p-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
              />
            </CarouselItem>

            <CarouselItem className="p-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60  dark:brightness-40"
              />
            </CarouselItem>

            <CarouselItem className="p-0">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover brightness-20  dark:brightness-40"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="absolute flex opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center bottom-4 left-0 right-0 gap-1">
          <Button
            onClick={() => scrollToIndex(0)}
            className={`rounded-full w-5 h-5 ${currentIndex === 0 ? "bg-black" : "bg-gray-200"}`}
            key={0}
          ></Button>
          <Button
            onClick={() => scrollToIndex(1)}
            className={`rounded-full w-5 h-5 ${currentIndex === 1 ? "bg-black" : "bg-gray-200"}`}
            key={1}
          ></Button>
          <Button
            onClick={() => scrollToIndex(2)}
            className={`rounded-full w-5 h-5 ${currentIndex === 2 ? "bg-black" : "bg-gray-200"}`}
            key={2}
          ></Button>
        </div>

        <div className="absolute px-4 left-0 right-0 flex items-center bottom-0 top-0 justify-between pointer-events-none">
          <Button
            className="pointer-events-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-700"
            onClick={() => scrollToIndex(currentIndex - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            className="pointer-events-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-700"
            onClick={() => scrollToIndex(currentIndex + 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <CardHeader>
        <CardAction>
          <Badge variant="outline">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            Aktif
          </Badge>
        </CardAction>

        <p className="text-black font-semibold text-xl">
          Promo Diskon Ramadhan
        </p>
        <p className="text-muted-foreground font-regular text-sm ">
          24/09/2004
        </p>
      </CardHeader>
      <CardFooter className="justify-end gap-2">
        <Button
          className="bg-red-50 border-red-200 hover:bg-red-100"
          variant={"outline"}
        >
          <p className="text-red-700">Nonaktifkan</p>
        </Button>
        <Button
          className="bg-green-50 border-green-200 hover:bg-green-100"
          variant={"outline"}
        >
          <p className="text-green-700">Aktifkan</p>
        </Button>
        <Button>Detail</Button>
      </CardFooter>
    </Card>
  );
}
