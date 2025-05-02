"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MailList, { Mail } from "@/components/MailList";
import MailDetail from "@/components/MailDetail";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export default function HomePage() {
  const [selectedEmail, setSelectedEmail] = useState<Mail | null>(null);
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <ResizablePanelGroup
        direction="horizontal"
        className="flex-1 hidden md:flex"
      >
        <ResizablePanel defaultSize={35} minSize={25}>
          <MailList onSelect={setSelectedEmail} />
        </ResizablePanel>
        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={72} minSize={20}>
          <MailDetail email={selectedEmail} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
