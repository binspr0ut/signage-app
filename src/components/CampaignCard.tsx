import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

export default function CampaignCard() {
  return (
    <Card className="relative w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />

      <CardHeader>
        <p className="text-black font-semibold text-xl">Title</p>
        <p className="text-muted-foreground font-regular text-sm ">
          Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum
          dolor sir amet Lorem ipsum dolor sir amet Lorem ipsum dolor sir amet
          Lorem
        </p>
        <Button variant={"link"} className="w-min items-end text-left">
          See more
        </Button>
      </CardHeader>
    </Card>
  );
}
