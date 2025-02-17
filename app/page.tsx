import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, Plus, Star } from "lucide-react";

export default function Home() {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
				<div className="absolute inset-0 z-10 opacity-20"></div>
				<div className="relative z-10 text-center px-4 w-full">
					<h1 className="text-6xl font-extrabold text-center pb-6 gt-text-gradient">Trinity Team 3</h1>
					<p className="text-xl text-center mb-8 max-w-2xl mx-auto dark-mode-text">
						We are a team of 3 CS majors and 1 CE major at Georgia Tech, and we have developed a dedicated movie store site as
						our first project for CS 2340. We utilized various resources, ranging from YouTube videos to textbooks, to create
						this site with the user experience in mind as our main priority.
					</p>
					<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
						<Button asChild size="lg" className="group bg-[#B3A369] hover:bg-[#B3A369]/90">
							<Link href="/process" className="flex items-center justify-center">
								Explore Buzz Movies Store Project
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
							<a href="https://ryanlau.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
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
