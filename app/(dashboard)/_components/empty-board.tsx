"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

export const EmptyBoard = () => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;
    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created!");
        // TODO: redirect to board/{id}
      })
      .catch(() => toast.error("Failed to create board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/noboards.png" height={120} width={120} alt="Empty" />
      <h2 className="text-xl font-semibold mt-6">Create your first board</h2>
      <div className="mt-6">
        <Button onClick={onClick} disabled={pending} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};
