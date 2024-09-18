import { Container, Section } from "@/components/craft";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/resume";
import Image from "next/image";

export const QuoteSection = () => {
  const data = DATA.landing.quote;

  return (
    <Section id="quote">
      <Container>
        <Card className="mx-auto max-w-3xl overflow-hidden border-0 bg-transparent">
          <div className="grid md:grid-cols-2">
            <div className="aspect-video md:aspect-auto md:h-full">
              <Image
                width={2000}
                height={2000}
                className="h-full object-cover object-center"
                src={data.image.src}
                alt={data.image.alt}
              />
            </div>
            <CardContent className="flex flex-col justify-center gap-y-10 p-7 md:p-10">
              <blockquote
                className="text-balance text-lg font-semibold italic leading-snug lg:text-xl lg:leading-normal xl:text-2xl"
                dangerouslySetInnerHTML={{ __html: data.sentence || "" }}
              />
              <div className="py-2.5">
                <p className="font-semibold">{data.author.name}</p>
                <p className="text-sm uppercase text-muted-foreground">
                  {data.author.title}
                </p>
              </div>
            </CardContent>
          </div>
        </Card>
      </Container>
    </Section>
  );
};
