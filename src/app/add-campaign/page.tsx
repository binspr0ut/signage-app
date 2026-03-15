"use client";

import CarouselCard from "@/components/CarouselCard";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon, Save } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AddCampaignPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

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
          <div className="flex flex-row gap-4 max-w-screen">
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
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
