import { Container, Section } from "@/components/craft";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NextPage } from "next";
import Image from "next/image";
import { HeroSection } from "./_components/hero";
import { QuoteSection } from "./_components/quote";
import { Button } from "@/components/ui/button";
import { ArrowUpRightFromSquare } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Nouvelle exposition au musée",
    description:
      "Découvrez notre nouvelle exposition temporaire sur l'art moderne.",
    image: "/karate2.jpg",
  },
  {
    id: 2,
    title: "Concert en plein air",
    description:
      "Rejoignez-nous pour une soirée musicale sous les étoiles ce weekend.",
    image: "/karate2.jpg",
  },
  {
    id: 3,
    title: "Atelier de cuisine",
    description:
      "Apprenez à cuisiner comme un chef avec notre nouvel atelier gastronomique.",
    image: "/karate2.jpg",
  },
  {
    id: 4,
    title: "Marathon de la ville",
    description: "Préparez-vous pour le grand marathon annuel de notre ville.",
    image: "/karate2.jpg",
  },
];

const LandingPage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <Section>
        <Container>
          <h2 className="mb-8 text-center text-3xl font-bold uppercase md:text-left lg:text-4xl">
            Les dernières <span className="text-liner">actualités</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden border-0 bg-background px-5 py-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1300}
                  height={1200}
                  className="h-48 w-full rounded-lg object-cover"
                />
                <CardHeader className="pb-4 pl-0">
                  <CardTitle className="font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pl-0">
                  <p className="text-sm text-gray-500">{item.description}</p>
                </CardContent>
                <CardFooter className="p-0">
                  <Button
                    variant={"link"}
                    className="flex gap-2 pl-0 text-base"
                  >
                    <p>Voir plus</p>
                    <ArrowUpRightFromSquare className="size-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default LandingPage;
