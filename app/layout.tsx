import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BotMessageSquare, Plus } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Vercel AI SDK - Next.js OpenAI Examples",
  description: "Examples of using the Vercel AI SDK with Next.js and OpenAI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider>
          <div className="flex flex-col w-full h-screen">
            <nav className="flex justify-between items-center font-bold py-3 px-4 border-solid border-border border-b-[1px]">
              {/* <p className="text-2xl">Chat Boxes</p> */}
              <BotMessageSquare/>
              <div className="flex gap-7">
                <div className="flex gap-2 w-fit items-center">
                  <Label htmlFor="api-key" className="min-w-fit">
                    OpenAI Key:
                  </Label>
                  <Input
                    type="password"
                    autoComplete="off"
                    className="h-7"
                    id="api-key"
                  />
                </div>
                <Button size="sm">Create Chat</Button>
              </div>
            </nav>
            <div className="flex flex-1 h-auto w-full max-h-[calc(100vh-60px)]">
              <aside className="flex flex-col justify-between border-solid border-border border-r-[1px] p-2">
                <Button variant="outline" size="icon">
                  <Plus />
                </Button>
                <ThemeToggle />
              </aside>
              <main className="flex flex-1 overflow-auto">
                {children}
                {/* main   */}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
