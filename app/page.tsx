"use client";

import Chat from "@/components/chat";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react";

export default function ChatsPage() {
  const { messages, input, handleInputChange, handleSubmit } = useChat(); 
  return (
    <div className="flex w-full flex-grow overflow-x-auto">
      <Chat />
      <Chat />
    </div>
  );
}
