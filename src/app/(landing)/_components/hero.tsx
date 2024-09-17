import { Container, Section } from "@/components/craft";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <Section id="hero">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="space-y-3 md:pt-[80px]">
          <h1 className="text-center text-4xl font-bold uppercase text-foreground sm:text-5xl md:text-left lg:text-6xl">
            Karate for the mind, body & spirit
          </h1>
          <p className="mx-auto max-w-full text-center text-muted-foreground md:max-w-[600px] md:text-left lg:mx-0">
            Experience the power and discipline of this ancient martial art.
            Whether you&apos;re a beginner or experienced parctitionner, our
            Karate program.
          </p>
        </div>
        <div className="relative mt-8 flex h-96 overflow-hidden rounded-lg md:mt-0">
          <Image
            src={"/logo2.png"}
            alt="Logo budo"
            className="fill object-contain"
            width={1000}
            height={1000}
          />
        </div>
      </Container>
    </Section>
  );
};
