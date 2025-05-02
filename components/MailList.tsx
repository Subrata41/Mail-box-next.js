"use client";

import { ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { mockEmails as initialMockEmails, Email } from "@/lib/mockEmails";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export type Mail = Email;

interface MailListProps {
  onSelect: (email: Mail) => void;
  selectedEmailId?: string;
}

export default function MailList({ onSelect, selectedEmailId }: MailListProps) {
  const [emails, setEmails] = useState<Email[]>(initialMockEmails);

  const handleSelect = (selected: Email) => {
    // Mark as read if not already
    if (!selected.read) {
      const updated = emails.map((mail) =>
        mail.id === selected.id ? { ...mail, read: true } : mail
      );
      setEmails(updated);
    }

    onSelect({ ...selected, read: true }); // Always pass read: true to parent
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    return isToday
      ? date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : date.toLocaleDateString();
  };

  return (
    <div className="w-[420px] h-screen border-r bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <button className="text-sm text-gray-500 flex items-center gap-1 hover:text-black">
          Newest activity <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Scrollable List */}
      <ScrollArea className="h-full w-full">
        <div className="divide-y">
          {emails.map((email) => (
            <Card
              key={email.id}
              role="button"
              tabIndex={0}
              onClick={() => handleSelect(email)}
              className={cn(
                "p-4 cursor-pointer hover:bg-gray-100 transition min-w-0",
                !email.read && "bg-blue-50 border border-blue-300",
                selectedEmailId === email.id && "bg-gray-200"
              )}
            >
              <div className="flex items-start gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{email.sender[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm text-gray-800 flex items-center gap-1">
                      {email.sender}
                      {!email.read && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full" />
                      )}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(email.timestamp)}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "text-sm truncate",
                      !email.read ? "font-semibold text-black" : "text-gray-700"
                    )}
                  >
                    {email.subject}
                  </div>
                  <div className="text-xs text-gray-500 truncate">
                    {email.snippet}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
