"use client";

import { Button } from "@/components/ui/button";
import {
  Inbox,
  AtSign,
  User,
  Eye,
  Users,
  Mail,
  Phone,
  Search,
  Settings,
} from "lucide-react";
import SidebarItem from "@/components/SidebarItem";

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0f172a] text-white h-screen flex flex-col justify-between">
      <div className="p-4 space-y-6">
        {/* Main Section */}
        <div>
          <h2 className="text-sm font-semibold uppercase mb-2 text-gray-400">
            Inbox
          </h2>
          <div className="space-y-2">
            <SidebarItem icon={Inbox} label="All" active />
            <SidebarItem icon={AtSign} label="Mentions" count={0} />
            <SidebarItem icon={User} label="Created by you" count={0} />
            <SidebarItem icon={Eye} label="All" count={4} />
            <SidebarItem icon={Users} label="Unassigned" count={0} />
          </div>
        </div>

        {/* Teams */}
        <div>
          <h2 className="text-sm font-semibold uppercase mb-2 text-gray-400">
            Team Inboxes
          </h2>
          <div className="space-y-2">
            <SidebarItem icon={Mail} label="Email" count={1} />
            <SidebarItem icon={Phone} label="Phone & SMS" count={1} />
          </div>
        </div>

        {/* Views */}
        <div>
          <h2 className="text-sm font-semibold uppercase mb-2 text-gray-400">
            Views{" "}
          </h2>
          <div className="space-y-2">
            <SidebarItem icon={Mail} label="Messenger" count={1} />
            <SidebarItem icon={Mail} label="Tickets" count={0} />
          </div>
        </div>

        {/* Footer Section  */}
        <div className="p-4 space-y-2 border-t border-gray-700">
          <Button
            variant="ghost"
            className="w-full text-left text-gray-400 hover:text-white"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button
            variant="ghost"
            className="w-full text-left text-gray-400 hover:text-white"
          >
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
