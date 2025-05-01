"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import MailList, { Mail } from "@/components/MailList";
import MailDetail from "@/components/MailDetail";

export default function HomePage() {
  const [selectedEmail, setSelectedEmail] = useState<Mail | null>(null);
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MailList onSelect={setSelectedEmail} />
      <MailDetail email={selectedEmail} />
    </div>
  );
}
