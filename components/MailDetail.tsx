"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Email } from "@/lib/mockEmails";

export default function MailDetail({ email }: { email: Email | null }) {
  if (!email) {
    return (
      <div className="flex-1 h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-400 text-sm">Select an email to read</p>
      </div>
    );
  }

  return (
    <div className="flex-1 h-screen bg-white border-l">
      <ScrollArea className="h-full">
        <div className="p-6 space-y-6">
          {/* Header: Subject */}
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              {email.subject}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(email.timestamp).toLocaleString()}
            </p>
          </div>

          <Separator />

          {/* Sender Info */}
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>{email.sender[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-gray-800">
                {email.sender}
              </p>
              <p className="text-xs text-gray-500">From</p>
            </div>
          </div>

          <Separator />

          {/* Email Body */}
          <Card className="p-6 bg-blue-50 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
            {email.body}
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
