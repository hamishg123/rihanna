import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Heart, Infinity } from "lucide-react";

/**
 * Love Number Comparison Component
 * Design: Romantic Minimalism with Depth
 * - Interactive number comparison with emotional messaging
 * - Warm color palette with subtle animations
 * - Elegant typography hierarchy
 */

export default function LoveNumberComparison() {
  const [userNumber, setUserNumber] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const handleCompare = () => {
    if (userNumber.trim() === "") {
      setResult("Please enter a number first");
      setShowResult(true);
      return;
    }

    const num = parseFloat(userNumber);
    if (isNaN(num)) {
      setResult("Please enter a valid number");
      setShowResult(true);
      return;
    }

    // Generate response based on the number
    const responses = [
      `I love you ${num + 1} times more than that.`,
      `That's a beautiful number, but I love you ${num * 2} times more.`,
      `${num}? I love you infinitely more than that.`,
      `If that's how much you love me, I love you ${num + 1000} times more.`,
      `No matter the number, my love for you is beyond measure - at least ${num * 100} times more.`,
      `That's sweet, but I love you ${Math.floor(num * 1.5)} times more than that.`,
      `Every moment with you makes me love you ${num + 999999} times more.`,
      `If love could be measured, I'd love you ${num}∞ times more.`,
    ];

    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    setResult(randomResponse);
    setShowResult(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCompare();
    }
  };

  return (
    <div className="space-y-12 animate-fadeInUp">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-6">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474993426/BMNomyKKB5aoESPRLMiMa2/love-comparison-illustration-i4pTowaqo6P4ZgNyoSd4sc.webp"
            alt="Love Comparison"
            className="h-32 w-32 object-contain"
          />
        </div>
        <h2 className="text-4xl font-bold text-foreground">
          How Much Do You Love Me?
        </h2>
        <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
          Enter any number, and I'll show you how much more I love you
        </p>
      </div>

      {/* Input Section */}
      <Card className="p-8 bg-card/50 backdrop-blur-sm border-accent/30">
        <div className="space-y-6">
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-foreground">
              Enter a number:
            </label>
            <div className="flex gap-3">
              <Input
                type="number"
                placeholder="e.g., 100, 1000, 1000000..."
                value={userNumber}
                onChange={(e) => setUserNumber(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-4 py-3 text-lg border-accent/30 focus:border-primary focus:ring-primary"
              />
              <Button
                onClick={handleCompare}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-semibold transition-smooth"
              >
                <Heart className="mr-2 h-4 w-4" />
                Compare
              </Button>
            </div>
          </div>

          {/* Result */}
          {showResult && (
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/30 animate-fadeInScale">
              <div className="flex items-start space-x-4">
                <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1 animate-heartbeat" />
                <div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    My Answer:
                  </p>
                  <p className="text-foreground/80 text-lg leading-relaxed font-handwritten text-primary">
                    {result}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Fun Facts */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-accent/30 hover:shadow-lg transition-smooth">
          <Infinity className="h-8 w-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-foreground/70">
            My love for you is <span className="font-bold text-primary">infinite</span>
          </p>
        </Card>

        <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-accent/30 hover:shadow-lg transition-smooth">
          <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-foreground/70">
            Every day I love you <span className="font-bold text-primary">more</span>
          </p>
        </Card>

        <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-accent/30 hover:shadow-lg transition-smooth">
          <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
          <p className="text-sm text-foreground/70">
            You make my heart <span className="font-bold text-primary">shine</span>
          </p>
        </Card>
      </div>

      {/* Romantic Message */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-accent/30">
        <p className="text-center text-foreground/80 leading-relaxed font-light">
          No matter what number you choose, my love for you transcends all measurements.
          It's not about quantity—it's about the depth, the consistency, and the forever
          nature of my feelings for you. You are my greatest treasure, Rihanna.
        </p>
      </Card>
    </div>
  );
}

// Import Sparkles icon
import { Sparkles } from "lucide-react";
