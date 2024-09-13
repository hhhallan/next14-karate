import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Image from "next/image";

const LandingPage: NextPage = () => {
  return (
    <Section id="hero">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <div className="space-y-2">
            <div className="mx-auto space-y-2 text-center lg:mx-0 lg:text-left">
              <h1 className="mx-auto mb-2 max-w-3xl text-balance text-[42px] font-bold uppercase tracking-tighter lg:mx-0">
                Karate for the mind, body & spirit
              </h1>
            </div>
            <p className="mx-auto max-w-[600px] text-muted-foreground lg:mx-0">
              Experience the power and discipline of this ancient martial art.
              Whether you&apos;re a beginner or experienced parctitionner, our
              Karate program.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button variant="default">Join Now</Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              alt="Mobile app screenshot"
              className="aspect-video rounded-lg object-cover"
              height="366"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default LandingPage;
