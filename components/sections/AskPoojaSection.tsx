"use client";

import { useState, useRef, useEffect } from "react";
import ScrollFadeIn from "@/components/ScrollFadeIn";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const SUGGESTED = [
  "What's your leadership style?",
  "Tell me about ClearDesk.",
  "How do you use AI in people ops?",
  "What kind of role are you looking for?",
];

export default function AskPoojaSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Couldn't reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ask-pooja" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollFadeIn>
          <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
            Ask Pooja
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-4">
            Curious about something?
          </h2>
          <p className="text-[#78716C] text-lg mb-10">
            Ask me directly — I&apos;ll respond as myself.{" "}
            <span className="text-xs text-[#78716C]/60">Powered by Claude API.</span>
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <div className="bg-[#F0EBE3] rounded-2xl overflow-hidden">
            {/* Message area */}
            <div className="min-h-48 max-h-96 overflow-y-auto p-6 space-y-4">
              {messages.length === 0 && (
                <p className="text-sm text-[#78716C] text-center py-8">
                  Your question will appear here.
                </p>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-sm rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-[#C4714A] text-white rounded-br-sm"
                        : "bg-white text-[#1C1917] rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-3">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-[#78716C] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-[#78716C] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-[#78716C] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
              {error && (
                <p className="text-xs text-red-500 text-center">{error}</p>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggested questions */}
            {messages.length === 0 && (
              <div className="px-6 pb-4 flex flex-wrap gap-2">
                {SUGGESTED.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs bg-white text-[#78716C] px-3 py-1.5 rounded-full hover:text-[#C4714A] hover:border-[#C4714A] border border-transparent transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-[#E2D9CF] p-4 flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Ask me anything…"
                maxLength={500}
                className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm text-[#1C1917] placeholder:text-[#78716C]/60 outline-none focus:ring-2 focus:ring-[#C4714A]/30"
              />
              <button
                onClick={() => send(input)}
                disabled={!input.trim() || loading}
                className="bg-[#C4714A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#b05e39] disabled:opacity-40 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
