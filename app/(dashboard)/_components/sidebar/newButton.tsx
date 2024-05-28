"use client";
import React from "react";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const newButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <button className="bg-white h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
            <Plus className="text-black" />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  );
};

export default newButton;
