import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ChevronRight } from "lucide-react";

/**
 * Love Messages Component
 * Design: Romantic Minimalism with Depth
 * - Collection of heartfelt messages
 * - Elegant card-based layout
 * - Smooth transitions and hover effects
 */

interface LoveMessage {
  id: number;
  title: string;
  message: string;
  emoji: string;
  color: string;
}

const loveMessages: LoveMessage[] = [
  {
    id: 1,
    title: "First Thing Every Morning",
    message:
      "The first thought in my mind every morning is you. Before anything else, I think about your smile, your laugh, and how grateful I am to have you in my life.",
    emoji: "🌅",
    color: "from-orange-100 to-rose-100",
  },
  {
    id: 2,
    title: "Your Presence",
    message:
      "You don't need to do anything special to make me love you more. Your presence alone is enough. Just being near you makes everything feel right.",
    emoji: "💫",
    color: "from-purple-100 to-pink-100",
  },
  {
    id: 3,
    title: "Your Laugh",
    message:
      "Your laugh is my favorite sound in the world. It's like music that only I get to hear, and it makes my heart skip a beat every single time.",
    emoji: "😊",
    color: "from-yellow-100 to-orange-100",
  },
  {
    id: 4,
    title: "Your Kindness",
    message:
      "The way you care about others, the way you light up when you help someone—it makes me fall in love with you all over again. Your heart is pure gold.",
    emoji: "✨",
    color: "from-amber-100 to-orange-100",
  },
  {
    id: 5,
    title: "Your Dreams",
    message:
      "I believe in your dreams as much as I believe in my love for you. I'm here to support you, celebrate with you, and be your biggest cheerleader.",
    emoji: "🌟",
    color: "from-blue-100 to-indigo-100",
  },
  {
    id: 6,
    title: "Your Imperfections",
    message:
      "You're not perfect, and neither am I. But your imperfections are what make you perfectly you. I love every single part of you, flaws and all.",
    emoji: "💖",
    color: "from-rose-100 to-pink-100",
  },
  {
    id: 7,
    title: "Late Night Thoughts",
    message:
      "At 3 AM, when the world is quiet, I think about you. About our future, our memories, and how lucky I am to have found someone like you.",
    emoji: "🌙",
    color: "from-indigo-100 to-purple-100",
  },
  {
    id: 8,
    title: "Forever Promise",
    message:
      "I promise to love you through every season of life. Through the good days and the hard days, I'll be here. You're not just my love—you're my home.",
    emoji: "🏠",
    color: "from-amber-100 to-orange-100",
  },
];

export default function LoveMessages() {
  const [selectedMessage, setSelectedMessage] = useState<LoveMessage | null>(null);
  const [displayedMessages, setDisplayedMessages] = useState<LoveMessage[]>([]);

  useEffect(() => {
    const shuffled = [...loveMessages].sort(() => Math.random() - 0.5);
    setDisplayedMessages(shuffled);
  }, []);

  return (
    <div className="space-y-12 animate-fadeInUp">
      <div className="text-center space-y-4">
        <div className="text-5xl mb-4">💌</div>
        <h2 className="text-4xl font-bold text-foreground">
          Love Messages for You
        </h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          Heartfelt messages that express what words can barely capture
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {displayedMessages.map((msg, index) => (
          <Card
            key={msg.id}
            className={`p-6 cursor-pointer transition-smooth hover:shadow-xl hover:scale-105 border-accent/30 bg-gradient-to-br ${msg.color} backdrop-blur-sm overflow-hidden group`}
            onClick={() => setSelectedMessage(msg)}
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{msg.emoji}</span>
              <Heart className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">
              {msg.title}
            </h3>
            <p className="text-foreground/70 text-sm line-clamp-2">
              {msg.message}
            </p>
            <div className="mt-4 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-smooth">
              Read more <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </Card>
        ))}
      </div>

      {selectedMessage && (
        <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30 animate-fadeInScale">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-5xl">{selectedMessage.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {selectedMessage.title}
                  </h3>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedMessage(null)}
                className="text-foreground/60 hover:text-foreground"
              >
                ✕
              </Button>
            </div>

            <div className="border-t border-accent/30 pt-6">
              <p className="text-lg leading-relaxed text-foreground/80 font-light">
                {selectedMessage.message}
              </p>
            </div>

            <div className="flex items-center justify-center pt-4">
              <Heart className="h-5 w-5 text-primary animate-heartbeat" />
            </div>
          </div>
        </Card>
      )}

      <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wide">
            Today's Special Message
          </p>
          <p className="text-xl text-foreground/80 leading-relaxed font-handwritten">
            {loveMessages[new Date().getDate() % loveMessages.length].message}
          </p>
          <p className="text-sm text-foreground/60">
            — A reminder that you're loved beyond measure
          </p>
        </div>
      </Card>
    </div>
  );
}
