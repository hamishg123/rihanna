import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heart, Sparkles, Music, BookOpen, Camera } from "lucide-react";
import LoveNumberComparison from "@/components/LoveNumberComparison";
import LoveMessages from "@/components/LoveMessages";
import LoveTimeline from "@/components/LoveTimeline";
import LoveGallery from "@/components/LoveGallery";

/**
 * Design Philosophy: Romantic Minimalism with Depth
 * - Warm rose gold palette (#D4A574, #E8D4C0) for intimacy
 * - Elegant typography with generous whitespace
 * - Subtle animations and micro-interactions
 * - Asymmetric layouts with organic transitions
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Trigger confetti on page load
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      id: "comparison",
      title: "Love Number Comparison",
      description: "Enter any number and I'll tell you how much more I love you",
      icon: Heart,
      color: "text-rose-500",
    },
    {
      id: "messages",
      title: "Love Messages",
      description: "Discover heartfelt messages hidden throughout the day",
      icon: BookOpen,
      color: "text-amber-600",
    },
    {
      id: "timeline",
      title: "Our Timeline",
      description: "Moments that made me fall in love with you",
      icon: Camera,
      color: "text-amber-700",
    },
    {
      id: "gallery",
      title: "Love Gallery",
      description: "Beautiful memories we've created together",
      icon: Sparkles,
      color: "text-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Confetti Background */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474993426/BMNomyKKB5aoESPRLMiMa2/celebration-confetti-cPkTKMMafyam2wDDwNDfRx.webp"
            alt=""
            className="absolute w-full h-full object-cover opacity-40 animate-pulse"
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663474993426/BMNomyKKB5aoESPRLMiMa2/hero-romantic-background-oHhGVbuzVR5nRpRQ7u8hbp.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
          <div className="animate-fadeInUp space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold leading-tight text-foreground">
                My Love for
              </h1>
              <h2 className="text-5xl md:text-6xl font-handwritten text-primary">
                Rihanna
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto"></div>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
              A collection of ways to express how deeply I cherish you, in numbers, words, and memories that matter most.
            </p>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                onClick={() => setActiveSection("comparison")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold transition-smooth hover:shadow-lg"
              >
                <Heart className="mr-2 h-5 w-5" />
                Start Exploring
              </Button>
            </div>

            {/* Floating Heart Animation */}
            <div className="pt-12 flex justify-center">
              <Heart className="h-12 w-12 text-primary/60 animate-float" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-primary/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ways to Show My Love
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Explore different ways I've created to express how much you mean to me
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={feature.id}
                  className="p-8 cursor-pointer transition-smooth hover:shadow-xl hover:scale-105 border-accent/30 bg-card/50 backdrop-blur-sm"
                  onClick={() => setActiveSection(feature.id)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg bg-accent/20 ${feature.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          {!activeSection && (
            <div className="text-center py-20 animate-fadeInUp">
              <Sparkles className="h-16 w-16 text-primary/40 mx-auto mb-6" />
              <p className="text-foreground/60 text-lg">
                Click on any feature above to explore
              </p>
            </div>
          )}

          {activeSection === "comparison" && <LoveNumberComparison />}
          {activeSection === "messages" && <LoveMessages />}
          {activeSection === "timeline" && <LoveTimeline />}
          {activeSection === "gallery" && <LoveGallery />}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-accent/30 py-12">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <p className="text-foreground/60 font-light">
            Made with <Heart className="inline h-4 w-4 text-primary" /> for Rihanna
          </p>
          <p className="text-foreground/40 text-sm mt-2">
            Every number, word, and memory is a testament to my love
          </p>
        </div>
      </footer>
    </div>
  );
}
