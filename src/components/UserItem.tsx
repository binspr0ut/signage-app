"use client";

export default function UserItem() {
  return (
    <div className="flex gap-2 border rounded-md p-4 ">
      <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700] flex items-center justify-center">
        <p>A</p>
      </div>
      <div>
        <p className="text-[16px] font-bold">Name</p>
        <p className="text-[12px] text-neutral-500">email@mail.com</p>
      </div>
    </div>
  );
}
