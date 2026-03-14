"use client";

import CarouselCard from "@/components/CarouselCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon, Save } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

export default function AddCampaignPage() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

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
    <div className="p-12 flex flex-col gap-4 max-w-screen">
      <h1 className="font-bold text-4xl">Add Campaign</h1>
      <Separator />
      <div className="flex justify-end">
        <Link href={"/add-campaign"}>
          <Button>
            <Save /> Save
          </Button>
        </Link>
      </div>
      <form>
        <div className="flex flex-col gap-4 ">
          <div className="rounded-xl border bg-gray-100 pt-4 px-4 pb-8 flex flex-row flex-nowrap gap-4 overflow-x-scroll overflow-y-hidden scrollbar scrollbar-h-2 scrollbar-thumb-gray-600 scrollbar-track-gray-900 ">
            <CarouselCard emptyStatusProps={false} />
            <CarouselCard emptyStatusProps={false} />
            <CarouselCard emptyStatusProps={false} />
            <CarouselCard emptyStatusProps={false} />
            <CarouselCard emptyStatusProps={false} />
            <CarouselCard emptyStatusProps={true} />
          </div>

          <div className="flex flex-row gap-4">
            <Field>
              <FieldLabel>Judul</FieldLabel>
              <Input type="text" placeholder="Masukkan judul"></Input>
              <FieldDescription>Masukkan Judul Campaign</FieldDescription>
            </Field>
            <div className="flex-col w-full">
              <Field>
                <FieldTitle>Date</FieldTitle>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">
                      Pick a date <ChevronDownIcon></ChevronDownIcon>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 w-auto">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-lg border"
                    ></Calendar>
                  </PopoverContent>
                </Popover>
                <FieldDescription>Pilih tanggal</FieldDescription>
              </Field>
            </div>
          </div>

          <div>
            <Field>
              <FieldTitle>Deskripsi</FieldTitle>
              <Textarea></Textarea>
              <FieldDescription>Masukkan Deskripsi</FieldDescription>
            </Field>
          </div>
        </div>
      </form>
    </div>
  );
}
