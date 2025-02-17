export default function DemoPage() {
	return (
		<main className="container mx-auto px-4 py-8">
			<div className="space-y-8">
				<h1 className="text-4xl font-extrabold text-center gt-text-gradient">GT Movies AI Demo</h1>
				<p className="text-center max-w-2xl mx-auto text-lg dark-mode-text">
					Watch our demo video to see GT Movies Store in action and explore its features.
				</p>
				<div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
					<iframe
						src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual demo video URL
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="absolute top-0 left-0 w-full h-full"
					></iframe>
				</div>
			</div>
		</main>
	);
}
