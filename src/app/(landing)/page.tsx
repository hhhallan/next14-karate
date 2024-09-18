import { NextPage } from "next";
import { HeroSection } from "./_components/hero";
import { QuoteSection } from "./_components/quote";
import { Actualities } from "./_components/actualities";

const LandingPage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <QuoteSection />
      <Actualities />
    </>
  );
};

export default LandingPage;
