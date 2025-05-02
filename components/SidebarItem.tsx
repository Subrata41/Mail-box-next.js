"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  count?: number;
  active?: boolean;
}

export default function SidebarItem({
  icon: Icon,
  label,
  count,
  active = false,
}: SidebarItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start px-3 py-2 rounded-md flex items-center gap-x-2 text-sm transition",
        active
          ? "bg-[#1e293b] text-white font-semibold" 
          : "text-gray-300 hover:bg-[#334155] hover:text-white"
      )}
    >
      <Icon className="h-4 w-4 text-gray-400" />
      <span className="flex-1 truncate">{label}</span>
      {typeof count === "number" && count > 0 && (
        <span className="text-xs bg-gray-200 text-black px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </Button>
  );
}
