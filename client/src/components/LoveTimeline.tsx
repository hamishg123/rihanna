import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

/**
 * Love Timeline Component
 * Design: Romantic Minimalism with Depth
 * - Vertical timeline of special moments
 * - Elegant visual hierarchy
 * - Warm color palette with subtle animations
 */

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  emoji: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "The Beginning",
    title: "When I First Saw You",
    description:
      "The moment you walked into my life, everything changed. Your smile, your presence—I knew right then that you were someone special.",
    emoji: "✨",
  },
  {
    date: "First Words",
    title: "Our First Conversation",
    description:
      "I remember every word. The way you laughed, the way your eyes lit up when you talked about things you loved. I was completely captivated.",
    emoji: "💬",
  },
  {
    date: "First Touch",
    title: "When Our Hands First Held",
    description:
      "Time seemed to stop. My heart raced, and I knew in that moment that I wanted to hold your hand forever.",
    emoji: "🤝",
  },
  {
    date: "First Kiss",
    title: "A Kiss That Changed Everything",
    description:
      "Soft, sweet, and perfect. That kiss was a promise of all the love I have for you. It's still the best moment of my life.",
    emoji: "💋",
  },
  {
    date: "Growing Together",
    title: "Building Our Story",
    description:
      "Every day with you is a new chapter. Through laughter and challenges, we're creating something beautiful and timeless.",
    emoji: "📖",
  },
  {
    date: "Today",
    title: "This Moment Right Now",
    description:
      "Right now, in this very moment, my love for you is stronger than ever. You are my greatest blessing.",
    emoji: "💖",
  },
  {
    date: "Forever",
    title: "Our Future Together",
    description:
      "I see a lifetime of adventures, dreams, and love with you. You're not just my present—you're my future.",
    emoji: "🌅",
  },
];

export default function LoveTimeline() {
  return (
    <div className="space-y-12 animate-fadeInUp">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-5xl mb-4">📸</div>
        <h2 className="text-4xl font-bold text-foreground">
          Our Love Timeline
        </h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          Moments that made me fall in love with you, and reasons to love you forever
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30"></div>

        {/* Events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 animate-fadeInUp`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Left Side (alternating) */}
              {index % 2 === 0 ? (
                <>
                  <div className="hidden md:block flex-1 text-right">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/30 hover:shadow-lg transition-smooth">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {event.date}
                      </p>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </Card>
                  </div>

                  {/* Center Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl shadow-lg">
                      {event.emoji}
                    </div>
                  </div>

                  {/* Right Side (empty for spacing) */}
                  <div className="hidden md:block flex-1"></div>

                  {/* Mobile View */}
                  <div className="md:hidden flex-1">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/30">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {event.date}
                      </p>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </Card>
                  </div>
                </>
              ) : (
                <>
                  {/* Left Side (empty for spacing) */}
                  <div className="hidden md:block flex-1"></div>

                  {/* Center Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xl shadow-lg">
                      {event.emoji}
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="hidden md:block flex-1">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/30 hover:shadow-lg transition-smooth">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {event.date}
                      </p>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </Card>
                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden flex-1">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-accent/30">
                      <p className="text-sm font-semibold text-primary mb-2">
                        {event.date}
                      </p>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </Card>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Closing Message */}
      <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 text-center">
        <div className="space-y-4">
          <Heart className="h-8 w-8 text-primary mx-auto animate-heartbeat" />
          <p className="text-lg text-foreground/80 leading-relaxed font-light">
            Every moment with you is a treasure. Every memory we create is a reason to love you
            more. Our story is my favorite love story.
          </p>
        </div>
      </Card>
    </div>
  );
}
