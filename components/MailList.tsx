import { ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export type Mail = {
  id: number;
  sender: string;
  preview: string;
  time: string;
  content: string;
};

const emails: Mail[] = [
  {
    id: 1,
    sender: "Messenger - [Demo]",
    preview: "Install Messenger",
    time: "5d",
    content: "This is a demo message from Messenger...",
  },
  {
    id: 2,
    sender: "Email - [Demo]",
    preview: "This is a demo email...",
    time: "5d",
    content: "Hello, this is an example email content.",
  },
  {
    id: 3,
    sender: "WhatsApp - [Demo]",
    preview: "Set up WhatsApp or social...",
    time: "5d",
    content: "You can now set up WhatsApp messages here.",
  },
  {
    id: 4,
    sender: "Phone - [Demo]",
    preview: "Set up phone or SMS",
    time: "5d",
    content: "To use phone or SMS, follow these steps...",
  },
];

export default function MailList({
  onSelect,
}: {
  onSelect: (email: Mail) => void;
}) {
  return (
    <div className="w-[360px] h-screen border-r bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <button className="text-sm text-gray-500 flex items-center gap-1 hover:text-black">
          Newest activity <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Scrollable List */}
      <ScrollArea className="flex-1">
        <div className="divide-y">
          {emails.map((email) => (
            <div
              className="p-4 hover-bg-gray-100 cursor-pointer"
              key={email.id}
              onClick={() => onSelect(email)}
            >
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-8">
                  <AvatarFallback>{email.sender[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-medium text-sm">{email.sender}</div>
                  <div className="text-xs text-gray-500 truncate">
                    {email.preview}
                  </div>
                  <div className="text-xs text-gray-400">{email.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
