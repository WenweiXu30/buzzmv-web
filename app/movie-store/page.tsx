import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const processSteps = [
	{
		title: "Team Structure",
		description: `
We built a well-rounded team with clear roles:
- A Scrum Master to keep us organized and on track.
- A Product Owner to guide our vision.
- Development team members focused on building features.
- Documentation specialists to keep everything clear and organized.
		`,
		image: "/bo.png",
	},
	{
		title: "How We Worked Together",
		description: `
We followed a Scrum approach that worked well for us:
- Regular planning sessions to map out our next steps
- Quick daily check-ins to share progress and help each other
- End-of-sprint demos to show what we built
- Team discussions about what worked and what we could do better
		`,
		image: "/so.png",
	},
	{
		title: "Building the Features",
		description: `
We broke down our Movie app into manageable pieces:
- Started with the core features like User login
- Added user reviews
- Built sharing capabilities
- Prioritized features based on what would bring the most value to users
		`,
		image: "/1c.png",
	},
	{
		title: "Keeping Quality High",
		description: `
Made sure everything worked smoothly through:
- Regular testing at different levels
- User feedback sessions
- Fine-tuning based on what we learned
		`,
		image: "/2c.png",
	},
	{
		title: "Staying Connected",
		description: `
Kept everyone in the loop using:
- Discord for quick team chats
- GitHub for sharing code
- Regular updates to show our progress
		`,
		image: "/r.png",
	},
	{
		title: "Tackling Challenges",
		description: `
Faced and solved several hurdles:
- User Reviews
- Correct Sizing of Website for Different Devices
- Email Password Reset
		`,
		image: "/fm.png",
	},
];

export default function ProcessPage() {
	return (
		<main className="container mx-auto px-4 py-8">
			<div className="space-y-12">
				<h1 className="text-4xl font-extrabold text-center gt-text-gradient">Movie Store: Our Process</h1>
				<p className="text-center max-w-2xl mx-auto text-lg dark-mode-text">
					We followed the Scrum methodology to develop the GT Movie Store, ensuring an agile and efficient development process.
				</p>
				<div className="space-y-8">
					{processSteps.map((step, index) => (
						<Card key={index} className="overflow-hidden border-[#B3A369]">
							<div className="md:flex">
								<div className="md:w-1/2 p-6">
									<CardHeader>
										<CardTitle className="text-xl dark-mode-text">{step.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-lg dark-mode-text">
											<ReactMarkdown remarkPlugins={[remarkGfm]}>{step.description}</ReactMarkdown>
										</CardDescription>
									</CardContent>
								</div>
								<div className="md:w-1/2 relative h-64 md:h-auto">
									<Image
										src={step.image || "/process-step-placeholder.svg"}
										alt={step.title}
										layout="fill"
										objectFit="cover"
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}
