import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | Trinity Team 3",
  description: "Trinity Team 3",
  icons: {
    icon: "/pokefav.ico",
  },
};

const teamMembers = [
  {
    name: "Harry Zhu",
    role: "Scrum Master",
    contributions:
      "Harry helped build the app while keeping the team organized and customized the admin panel to fit our project needs.",
    image: "/harry.jpg",
  },
  {
    name: "Paul Serbanescu",
    role: "Developer",
    contributions:
      "Paul worked across the app, leading frontend development and connecting APIs to create a smooth and polished experience.",
    image: "/paul.jpg",
  },
  {
    name: "Ryan Lau",
    role: "Developer",
    contributions:
      "Ryan helped develop the app’s backend and built a secure password reset system that kept user data safe.",
    image: "/ryan.jpg",
  },
  {
    name: "Wenwei Xu",
    role: "Product Owner",
    contributions:
      "Wenwei worked on the app frontend and backend while guiding the team’s vision and improving the user experience.",
    image: "/wenwei.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-12">
        <h1 className="text-4xl font-extrabold text-center gt-text-gradient">
          Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-[#B3A369]">
              <div className="relative h-[900px]">
                <Image
                  src={member.image || "/placeholder.webp"}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <CardHeader>
                <CardTitle className="dark-mode-text font-black text-xl">
                  {member.name}
                </CardTitle>
                <CardDescription className="dark-mode-text">
                  {member.role}
                </CardDescription>
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
