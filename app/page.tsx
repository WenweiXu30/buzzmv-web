import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Plus, Star } from "lucide-react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/pokefav.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-10 opacity-20"></div>
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-6xl font-extrabold text-center pb-6 gt-text-gradient">
            Trinity Team 3
          </h1>
          <p className="text-xl text-center mb-8 max-w-2xl mx-auto dark-mode-text">
            We are a team of 3 Computer Science majors and 1 Computer
            Engineering major at Georgia Tech, and we have developed a web
            application called PokéTrade as our final project for CS 2340. Our
            app allows users to browse, trade, and explore Pokémon using live
            data from the PokéAPI. We also integrated OpenAI to simulate battles
            between pokemons.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              asChild
              size="lg"
              className="group bg-[#B3A369] hover:bg-[#B3A369]/90"
            >
              <Link
                href="/process"
                className="flex items-center justify-center"
              >
                Explore PokeTrade
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-[#B3A369] text-[#B3A369] hover:bg-[#003057] hover:text-white"
            >
              <Link href="/demo" className="flex items-center justify-center">
                Watch Demo
                <Play className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </Link>
            </Button>
            {/* demo live project */}
            <Button>
              <a
                href="https://poketrade.duckdns.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Try For Yourself: Live Demo!
                <Star className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
