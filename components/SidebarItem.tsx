"use client";

import { Button } from "@/components/ui/button";

export default function SidebarItem({
  icon: Icon,
  label,
  count,
  active = false,
}: {
  icon: any;
  label: string;
  count?: number;
  active?: boolean;
}) {
  return (
    <Button
      variant={active ? "secondary" : "ghost"}
      className={`w-full justify-start ${
        active ? "bg-gray-700 text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      <Icon className="h-4 w-4 mr-2" />
      <span className="flex-1">{label}</span>
      {count && count > 0 && (
        <span className="text-xs bg-white text-black rounded-full px-2 py-0.5">
          {count}
        </span>
      )}
    </Button>
  );
}
