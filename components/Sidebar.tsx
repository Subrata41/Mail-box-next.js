"use client";

import {
  Inbox,
  AtSign,
  User,
  Eye,
  Users,
  LineChart,
  Plus,
  ChevronDown,
  // ChevronRight,
  MessageSquare,
  Mail,
  Phone,
  Ticket,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SidebarItem from "@/components/SidebarItem";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0f172a] text-white h-screen flex flex-col p-3 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-sm font-medium text-gray-100">Inbox</h2>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="w-full text-left text-gray-400 hover:bg-[#334155] hover:text-white"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Inbox Items */}
      <div className="space-y-1">
        <SidebarItem icon={Inbox} label="Your inbox" count={4} active />
        <SidebarItem icon={AtSign} label="Mentions" count={0} />
        <SidebarItem icon={User} label="Created by you" count={0} />
        <SidebarItem icon={Eye} label="All" count={4} />
        <SidebarItem icon={Users} label="Unassigned" count={0} />
        <SidebarItem icon={LineChart} label="Dashboard" />
      </div>

      {/* Collapsible Sections */}
      <div className="space-y-1 text-sm text-gray-400">
        <div className="flex items-center justify-between px-2 py-1 hover:bg-[#1e293b] rounded-md cursor-pointer">
          <span className="text-base font-semibold tracking-wide mb-2 text-white">
            Fin AI Agent
          </span>
          <Plus className="h-4 w-4" />
        </div>
        <div className="flex items-center justify-between px-2 py-1 hover:bg-[#1e293b] rounded-md cursor-pointer">
          <span className="text-base font-bold tracking-wide mb-2 text-white">
            Teammates
          </span>
          <Plus className="h-4 w-4" />
        </div>
        <div className="flex items-center justify-between px-2 py-1 hover:bg-[#1e293b] rounded-md cursor-pointer">
          <span className="text-base font-bold tracking-wide mb-2 text-white">
            Team inboxes
          </span>
          <Plus className="h-4 w-4" />
        </div>
      </div>

      {/* Views */}
      <div className="space-y-1 mt-3">
        <div className="flex items-center justify-between text-sm text-gray-400 px-2 py-1">
          <span>Views</span>
          <ChevronDown className="h-4 w-4" />
        </div>
        <SidebarItem icon={MessageSquare} label="Messenger" count={1} />
        <SidebarItem icon={Mail} label="Email" count={1} />
        <SidebarItem icon={Phone} label="WhatsApp & Social" count={1} />
        <SidebarItem icon={Phone} label="Phone & SMS" count={1} />
        <SidebarItem icon={Ticket} label="Tickets" count={0} />
      </div>
    </div>
  );
}
