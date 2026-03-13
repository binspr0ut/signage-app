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
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon, Save } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function AddCampaignPage() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [index, setIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

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
        <div className="flex flex-col gap-4">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="max-w-sm">
                <CarouselCard emptyStatusProps={false}></CarouselCard>
              </CarouselItem>
              <CarouselItem className="max-w-sm">
                <CarouselCard emptyStatusProps={false}></CarouselCard>
              </CarouselItem>
              <CarouselItem className="max-w-sm">
                <CarouselCard emptyStatusProps={true}></CarouselCard>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <Field>
            <FieldLabel>Judul</FieldLabel>
            <Input type="text" placeholder="Masukkan judul"></Input>
            <FieldDescription>Masukkan Judul Campaign</FieldDescription>
          </Field>

          <Popover>
            <PopoverTitle>Date</PopoverTitle>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full">
                Pick a date <ChevronDownIcon></ChevronDownIcon>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
              ></Calendar>
            </PopoverContent>
          </Popover>
        </div>
      </form>
    </div>
  );
}
