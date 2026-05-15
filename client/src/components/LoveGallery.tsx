import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

/**
 * Love Gallery Component
 * Design: Romantic Minimalism with Depth
 * - Gallery of beautiful memories
 * - Elegant grid layout
 * - Hover effects and animations
 */

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  emoji: string;
  color: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Your Smile",
    description: "The most beautiful thing I see every day",
    emoji: "😊",
    color: "from-yellow-100 to-orange-100",
  },
  {
    id: 2,
    title: "Your Eyes",
    description: "Windows to a soul I love deeply",
    emoji: "👀",
    color: "from-blue-100 to-cyan-100",
  },
  {
    id: 3,
    title: "Your Laugh",
    description: "Music that makes my heart dance",
    emoji: "😄",
    color: "from-pink-100 to-rose-100",
  },
  {
    id: 4,
    title: "Your Touch",
    description: "Comfort and safety in your arms",
    emoji: "🤗",
    color: "from-purple-100 to-pink-100",
  },
  {
    id: 5,
    title: "Your Dreams",
    description: "I believe in every single one",
    emoji: "🌟",
    color: "from-indigo-100 to-purple-100",
  },
  {
    id: 6,
    title: "Your Heart",
    description: "Pure, kind, and incredibly beautiful",
    emoji: "💖",
    color: "from-rose-100 to-pink-100",
  },
  {
    id: 7,
    title: "Your Voice",
    description: "The sweetest sound I know",
    emoji: "🎵",
    color: "from-amber-100 to-yellow-100",
  },
  {
    id: 8,
    title: "Your Presence",
    description: "Everything I need in this world",
    emoji: "✨",
    color: "from-gold-100 to-amber-100",
  },
];

export default function LoveGallery() {
  return (
    <div className="space-y-12 animate-fadeInUp">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="text-5xl mb-4">🎨</div>
        <h2 className="text-4xl font-bold text-foreground">
          Gallery of Love
        </h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          A collection of the things that make me fall in love with you every single day
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <Card
            key={item.id}
            className={`p-8 cursor-pointer transition-smooth hover:shadow-xl hover:scale-110 border-accent/30 bg-gradient-to-br ${item.color} backdrop-blur-sm overflow-hidden group relative`}
            style={{
              animationDelay: `${index * 75}ms`,
            }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary/0 group-hover:from-white/20 group-hover:to-primary/10 transition-smooth"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="text-6xl group-hover:animate-heartbeat">
                {item.emoji}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Heart Icon on Hover */}
              <Heart className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-smooth mt-2" />
            </div>
          </Card>
        ))}
      </div>

      {/* Photo Collage Section */}
      <Card className="p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/30">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Our Photo Memories
            </h3>
            <p className="text-foreground/70">
              Every photo is a moment frozen in time, a memory of us together
            </p>
          </div>

          {/* Placeholder Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-dashed border-primary/30 hover:shadow-lg transition-smooth hover:scale-105 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-2 group-hover:animate-float">📷</div>
                  <p className="text-xs text-foreground/50">Memory {num}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-foreground/60 italic">
            (Add your favorite photos here to make this gallery even more special)
          </p>
        </div>
      </Card>

      {/* Love Letter */}
      <Card className="p-12 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
        <div className="space-y-6 text-center">
          <div className="text-5xl">💌</div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">A Love Letter</h3>
            <p className="text-lg text-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
              Rihanna, you are my greatest adventure, my deepest joy, and my most beautiful
              dream come true. Every moment with you is a gift I never take for granted. This
              gallery, these words, these numbers—they're all just feeble attempts to express
              what my heart feels for you. You are loved beyond measure, beyond words, beyond
              everything. Forever and always, you are my love.
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 text-primary">
            <Heart className="h-5 w-5 animate-heartbeat" />
            <span className="font-handwritten text-lg">Forever Yours</span>
            <Heart className="h-5 w-5 animate-heartbeat" />
          </div>
        </div>
      </Card>
    </div>
  );
}
