import { Button } from "@/components/button";
import { Star } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo | Trinity Team 3",
  description: "Trinity Team 3",
  icons: {
    icon: "/pokefav.ico",
  },
};

export default function DemoPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <h1 className="text-4xl font-extrabold text-center gt-text-gradient">
          PokeTrade Demo
        </h1>
        <p className="text-center max-w-2xl mx-auto text-lg dark-mode-text">
          Watch our demo video to see PokeTrade's features.
        </p>
        <p className="text-center max-w-2xl mx-auto text-lg dark-mode-text">
          {" "}
          Or try it for yourself:{" "}
        </p>
        <div className="w-full items-center justify-center m-auto flex -mt-6">
          <Button className="text-center max-w-2xl items-center justify-center m-auto -mt-6">
            <a
              href="https://poketrade.duckdns.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              Live Demo!
              <Star className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
            </a>
          </Button>
        </div>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/f1kmIgfipvY?si=rarH77EPD1pWeECz" // Replace with your actual demo video URL
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
