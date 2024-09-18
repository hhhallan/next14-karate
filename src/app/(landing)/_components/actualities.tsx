"use client";

import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DATA } from "@/data/resume";
import { ArrowUpRightFromSquare, Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Actualities = () => {
  const [showMore, setShowMore] = useState(false);
  const displayedArticles = showMore
    ? DATA.articles
    : DATA.articles.slice(0, 5);

  return (
    <Section id="articles-list">
      <Container>
        <h2 className="mb-8 text-center text-3xl font-bold uppercase md:text-left lg:text-4xl">
          Les dernières <span className="text-liner">actualités</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article, i) => (
            <Card
              key={i}
              className="flex flex-col overflow-hidden border-0 bg-background px-5 py-4"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={1300}
                height={1200}
                className="h-48 w-full rounded-lg object-cover"
              />
              <CardHeader className="pb-4 pl-0">
                <CardTitle className="font-bold">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pl-0">
                <p className="text-sm text-gray-500">{article.description}</p>
              </CardContent>
              <CardFooter className="mt-auto p-0">
                <Button variant="link" className="flex gap-2 pl-0 text-base">
                  <p>Voir plus</p>
                  <ArrowUpRightFromSquare className="size-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
          {!showMore && displayedArticles.length < DATA.articles.length && (
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-liner bg-transparent text-liner hover:bg-liner hover:text-background"
                onClick={() => setShowMore(true)}
              >
                <Plus className="size-4" />
                VOIR PLUS
              </Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
