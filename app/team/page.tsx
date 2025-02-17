import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const teamMembers = [
	{
		name: "Harry Zhu",
		role: "Scrum Master",
		contributions:
			"Harry made sure that work was evenly distributed and that we were on track to delivering a quality product. He primarily worked on the login functionality.",
		image: "/harry.jpg",
	},
	{
		name: "Paul Serbanescu",
		role: "Developer",
		contributions:
			"Paul worked on creating the admin page and setting up the database, which created a solid foundation for us to work on, as well as the team webpage.",
		image: "/paul.jpg",
	},
	{
		name: "Ryan Lau",
		role: "Developer",
		contributions: "Ryan added the user review functionalities, making our movie store more interesting and interactive.",
		image: "/ryan.jpg",
	},
	{
		name: "Wenwei Xu",
		role: "Product Owner",
		contributions:
			"Wenwei was the project owner and he created the search filter, allowing us to navigate a wide variety of movies with ease.",
		image: "/wenwei.jpg",
	},
];

export default function TeamPage() {
	return (
		<main className="container mx-auto px-4 py-8">
			<div className="space-y-12">
				<h1 className="text-4xl font-extrabold text-center gt-text-gradient">Our Team</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{teamMembers.map((member, index) => (
						<Card key={index} className="overflow-hidden border-[#B3A369]">
							<div className="relative h-96">
								<Image
									src={member.image || "/placeholder.webp"}
									alt={member.name}
									layout="fill"
									objectFit="cover"
									objectPosition="center"
								/>
							</div>
							<CardHeader>
								<CardTitle className="dark-mode-text font-black text-xl">{member.name}</CardTitle>
								<CardDescription className="dark-mode-text">{member.role}</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="dark-mode-text">{member.contributions}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</main>
	);
}
