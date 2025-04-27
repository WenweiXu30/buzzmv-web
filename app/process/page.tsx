import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process | Trinity Team 3",
  description: "Trinity Team 3",
  icons: {
    icon: "/pokefav.ico",
  },
};

const processSteps = [
  {
    title: "Team Structure",
    description: `
	We organized our team for effective collaboration:
	- All members primarily communicated via Discord
	- Each member contributed to development, 
	  design, and project planning
	- Strong emphasis on shared responsibilities and 
	  active participation
		`,
    image: "/ash.png",
  },
  {
    title: "How We Worked Together",
    description: `
	We applied agile principles customized for our team:
	- Frequent check-ins through Discord to share updates
	- Individual ownership of features to promote accountability
	- Regular communication with our mentor TA for guidance and feedback
		`,
    image: "/pikachu.png",
  },
  {
    title: "Building the Features",
    description: `
	Our development focused on key features:
	- User registration, login, and password reset
	- Daily Pokemon pack openings to engage users
	- Marketplace features: buy, sell, and trade Pokemon cards
	- Profile customization and AI battle simulation
		`,
    image: "/hoopa.png",
  },
  {
    title: "Architecture and Design Patterns",
    description: `
	We carefully chose our technical foundation:
	- MVC Architecture for clear separation of concerns
	- Factory Method Pattern for creating model instances
	- Singleton Pattern to ensure a single database connection
		`,
    image: "/victini.png",
  },
  {
    title: "Keeping Quality High",
    description: `
	We focused on maintaining high quality through:
	- Consistent testing of new features
	- Immediate bug fixes based on user feedback
	- Version control with GitHub for collaborative coding
		`,
    image: "/blissey.png",
  },
  {
    title: "Staying Connected",
    description: `
	Kept everyone in the loop using:
	- Discord for quick team chats
	- GitHub for sharing code
	- Regular updates to show our progress
		`,
    image: "/squirtle.png",
  },
  {
    title: "Tackling Challenges",
    description: `
	Throughout the project, we tackled key challenges:
	- Handling user authentication and password reset securely
	- Designing a responsive UI for smooth experience
	- Implementing trading and marketplace interactions
		`,
    image: "/charizard.png",
  },
];

export default function ProcessPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        <h1 className="text-4xl font-extrabold text-center gt-text-gradient">
          PokeTrade: Our Process
        </h1>
        <p className="text-center max-w-2xl mx-auto text-lg dark-mode-text">
          We followed the Scrum methodology to develop PokeTrade, ensuring an
          agile and efficient development process.
        </p>
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="overflow-hidden border-[#B3A369]">
              <div className="md:flex">
                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                  <CardHeader>
                    <CardTitle className="text-xl dark-mode-text">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg dark-mode-text">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {step.description}
                      </ReactMarkdown>
                    </CardDescription>
                  </CardContent>
                </div>
                <div className="md:w-1/2 relative h-64 md:h-96">
                  <Image
                    src={step.image || "/process-step-placeholder.svg"}
                    alt={step.title}
                    fill
                    className="object-contain p-6"
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
