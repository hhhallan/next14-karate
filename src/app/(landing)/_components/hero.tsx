import { Container, Section } from "@/components/craft";
import BlurIn from "@/components/magicui/blur-in";
import { DATA } from "@/data/resume";
import Image from "next/image";

export const HeroSection = () => {
  const data = DATA.landing.hero;

  return (
    <Section id="hero">
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="space-y-6 md:pt-[80px]">
          {/* <h1></h1> */}
          <BlurIn
            word={data.title}
            className="text-center text-4xl font-bold uppercase text-foreground sm:text-5xl md:text-left lg:text-6xl"
          />
          <p className="mx-auto max-w-full text-center text-muted-foreground md:max-w-[600px] md:text-left lg:mx-0">
            {data.description}
          </p>
        </div>
        <div className="relative mt-8 flex h-96 overflow-hidden rounded-lg md:mt-0">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            className="fill object-contain"
            width={1000}
            height={1000}
          />
        </div>
      </Container>
    </Section>
  );
};
