import React from "react";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { EllipsisVertical, Settings2 } from "lucide-react";

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col flex-1 border-solid border-border border-r-[1px] min-w-96 relative">
      <header className="py-3 px-4 border-solid border-border border-b-[1px] flex justify-between items-center">
        <p>Chat 1</p>
        <div>
          <Button size="sm" variant="ghost">
            <Settings2 size="20px" />
          </Button>
          <Button size="sm" variant="ghost">
            <EllipsisVertical size="20px" />
          </Button>
        </div>
      </header>
      <div className="flex flex-grow flex-col gap-4 max-h-full overflow-y-auto mb-4">
        {messages.map((m, index) => (
          <div
            key={m.id}
            className={`flex justify-center gap-1 relative ${
              m.role !== "user" ? "bg-[#9b9b9b40]" : ""
            }`}
          >
            <span className="absolute left-2 top-2 font-mono">{index}</span>
            <div className="w-10/12 md:w-4/6 py-4">
              <p>{m.role === "user" ? "User: " : "AI: "}</p>
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 sticky bottom-2 p-4">
        <Input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <Button variant="secondary" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Chat;
