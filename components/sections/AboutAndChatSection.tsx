"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ScrollFadeIn from "@/components/ScrollFadeIn";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const INITIAL_SUGGESTIONS = [
  "What's your leadership style?",
  "How do you use AI in people work?",
  "What kind of role are you looking for?",
  "Tell me about something you built.",
];

function TypingText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 18);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}

export default function AboutAndChatSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>(INITIAL_SUGGESTIONS);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [avatarError, setAvatarError] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setSuggestions([]);
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
        if (data.suggestions?.length) setSuggestions(data.suggestions);
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Couldn't reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      send(input);
    }
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT — About */}
        <div>
          <ScrollFadeIn>
            <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
              Where the question came from
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-6">
              The origin
            </h2>
            <div className="h-0.5 w-12 bg-[#C4714A] mb-10" />
          </ScrollFadeIn>

          <div className="space-y-5 text-[#4A4440] text-lg leading-relaxed">
            <ScrollFadeIn delay={100}>
              <p>I&apos;ve always been interested in environments and the way they shape people.</p>
            </ScrollFadeIn>
            <ScrollFadeIn delay={150}>
              <p>
                Early in my career, visiting classrooms across low-income schools, I noticed something:
                the most engaged children weren&apos;t always in the best-resourced rooms. It was the
                quality of the environment — the trust, the clarity, the care — that made the difference.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <p>
                That observation followed me. From teaching in under-resourced schools to building
                people systems at scale across social impact, fintech and deep-tech — the question
                stayed the same.
              </p>
              <blockquote className="font-serif text-xl text-[#1C1917] mt-5 pl-4 border-l-2 border-[#C4714A]">
                How do people grow, learn and do meaningful work when environments become more complex?
              </blockquote>
            </ScrollFadeIn>
            <ScrollFadeIn delay={250}>
              <p>
                That question is what drew me to People &amp; Culture — and to AI as a tool for making
                those environments work better.
              </p>
            </ScrollFadeIn>
          </div>
        </div>

        {/* RIGHT — Chat */}
        <ScrollFadeIn delay={150}>
          <div className="sticky top-24">
            <p className="text-sm uppercase tracking-widest text-[#C4714A] mb-4">
              Ask Pooja
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1C1917] mb-2">
              Ask me anything.
            </h2>
            <p className="text-sm text-[#78716C] mb-6">Powered by Claude API.</p>

            {/* Chat window */}
            <div
              id="ask-pooja"
              className="rounded-2xl overflow-hidden shadow-lg relative"
              style={{ minHeight: "420px" }}
            >
              {/* Background photo */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/chat-bg.jpg')" }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#1C1917]/60 backdrop-blur-[2px]" />

              {/* Content */}
              <div className="relative flex flex-col h-full" style={{ minHeight: "420px" }}>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-5 space-y-4 max-h-72">
                  {messages.length === 0 && (
                    <p className="text-white/50 text-sm text-center pt-6">
                      Pull up a chair. Ask me something.
                    </p>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                      {m.role === "assistant" && (
                        <div className="shrink-0 w-8 h-8 rounded-full overflow-hidden bg-[#C4714A] flex items-center justify-center">
                          {!avatarError ? (
                            <Image
                              src="/pooja.jpg"
                              alt="Pooja"
                              width={32}
                              height={32}
                              className="object-cover object-top"
                              onError={() => setAvatarError(true)}
                            />
                          ) : (
                            <span className="text-white text-xs font-medium">P</span>
                          )}
                        </div>
                      )}
                      <div
                        className={`max-w-xs rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                          m.role === "user"
                            ? "bg-white/90 text-[#1C1917] rounded-br-sm"
                            : "bg-[#C4714A]/90 text-white rounded-bl-sm"
                        }`}
                      >
                        {m.role === "assistant" && i === messages.length - 1 ? (
                          <TypingText text={m.text} />
                        ) : (
                          m.text
                        )}
                      </div>
                    </div>
                  ))}
                  {loading && (
                    <div className="flex gap-3 justify-start">
                      <div className="w-8 h-8 rounded-full bg-[#C4714A] flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-medium">P</span>
                      </div>
                      <div className="bg-[#C4714A]/90 rounded-2xl rounded-bl-sm px-4 py-3">
                        <span className="flex gap-1 items-center h-4">
                          {[0, 150, 300].map((delay) => (
                            <span
                              key={delay}
                              className="w-1.5 h-1.5 bg-white rounded-full animate-bounce"
                              style={{ animationDelay: `${delay}ms` }}
                            />
                          ))}
                        </span>
                      </div>
                    </div>
                  )}
                  {error && (
                    <p className="text-red-300 text-xs text-center">{error}</p>
                  )}
                  <div ref={bottomRef} />
                </div>

                {/* Suggestions */}
                {suggestions.length > 0 && !loading && (
                  <div className="px-4 pb-2 flex flex-wrap gap-2">
                    {suggestions.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="text-xs bg-white/10 text-white/80 border border-white/20 px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="p-3 border-t border-white/10 flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything…"
                    maxLength={500}
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#C4714A]/60"
                  />
                  <button
                    onClick={() => send(input)}
                    disabled={!input.trim() || loading}
                    className="bg-[#C4714A] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#b05e39] disabled:opacity-40 transition-colors shrink-0"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
