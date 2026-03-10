import CampaignCard from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";

export default function CampaignPage() {
  return (
    <div className="p-12 flex flex-col gap-4 max-w-screen">
      <h1 className="font-bold text-4xl">Campaign</h1>
      <Separator />
      <div className="flex justify-between">
        <Button>Filter</Button>
        <Button>
          <Plus /> New Campaign
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
        <CampaignCard></CampaignCard>
      </div>
    </div>
  );
}
