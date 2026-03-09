import LoginCard from "@/components/LoginCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px]"></div>
      <div className="relative z-10 min-w-md">
        <LoginCard />
      </div>
    </div>
  );
}
