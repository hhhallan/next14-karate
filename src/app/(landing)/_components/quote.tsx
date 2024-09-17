import { Container, Section } from "@/components/craft";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const QuoteSection = () => {
  return (
    <Section id="cta">
      <Container>
        <Card className="mx-auto max-w-3xl overflow-hidden border-0 bg-transparent">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto md:h-full">
              <Image
                width={2000}
                height={2000}
                alt="TODO: à changer"
                className="h-full object-cover object-center"
                src="/photo.png"
              />
            </div>
            <CardContent className="flex flex-col justify-center gap-y-10 p-7 md:p-10">
              <blockquote className="text-balance text-lg font-semibold italic leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                &quot;Est-on un maître lorsque l&apos;on{" "}
                <span className="bg-liner px-2 text-background">
                  continue d&apos;apprendre
                </span>{" "}
                ?
              </blockquote>
              <div className="py-2.5">
                <p className="font-semibold">Kensho C. APPIN</p>
                <p className="text-sm uppercase text-muted-foreground">
                  Fondateur Kararte Budokenkyudo
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </Container>
    </Section>
  );
};
