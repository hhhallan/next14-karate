import { NextPage } from "next";
import Image from "next/image";

const ConstructionPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">
        Page en construction
      </h1>
      <p className="text-lg text-gray-600">
        Nous travaillons activement pour rendre cette page disponible bientôt.
        Restez à l&apos;écoute !
      </p>
      <Image
        width={1200}
        height={12000}
        src="/construction.png"
        alt="Page en construction"
        className="mt-8 w-64"
      />
    </div>
  );
};

export default ConstructionPage;
