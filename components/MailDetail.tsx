"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Mail = {
  id: number;
  sender: string;
  content: string;
  time: string;
  preview: string;
};
export default function MailDetail({ email }: { email: Mail | null }) {
  if (!email) {
    return (
      <div className="flex-1 h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400">No email selected</p>
      </div>
    );
  }
  return (
    <div className="flex-1 h-screen bg-white border-1">
      <ScrollArea className="h-full">
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{email.sender[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{email.sender}</div>
              <div className="text-xs text-gray-500">{email.time}</div>
            </div>
          </div>
          <Card className="p-4 bg-blue-50 text-sm">{email.content}</Card>
        </div>
      </ScrollArea>
    </div>
  );
}
