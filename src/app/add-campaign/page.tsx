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
  const [images, setImages] = useState<File[]>([]);

  const updateImage = (idx: number, file: File | null) => {
    setImages((prev) => {
      const arr = [...prev];
      if (file === null) {
        arr.splice(idx, 1);
      } else {
        arr[idx] = file;
      }
      return arr;
    });
  };

  const addImage = (file: File | null) => {
    if (file) setImages((prev) => [...prev, file]);
  };

  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-12 flex flex-col gap-4 max-w-screen">
      <h1 className="font-bold text-3xl">Add Campaign</h1>
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
          <div className="flex flex-row gap-4 p-4 pb-8 bg-gray-50 border rounded-xl min-h-68 overflow-x-auto items-center">
            {images.length === 0 && (
              <div className="flex justify-center w-full">
                <CarouselCard isAddCard onChange={addImage} />
              </div>
            )}

            {images.length > 0 && (
              <>
                {images.map((img, i) => (
                  <CarouselCard
                    key={i}
                    file={img}
                    onChange={(file) => {
                      if (file === null) {
                        setImages((prev) => prev.filter((_, idx) => idx !== i));
                      } else {
                        updateImage(i, file);
                      }
                    }}
                  ></CarouselCard>
                ))}
                <CarouselCard isAddCard onChange={addImage} />
              </>
            )}
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
