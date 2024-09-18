export const DATA = {
  landing: {
    hero: {
      title: "Karate for the mind, body & spirit",
      description: `Experience the power and discipline of this ancient martial art.
            Whether you're a beginner or experienced parctitionner, our
            Karate program.`,
      image: { src: "/logo2.png", alt: "Logo" },
    },
    quote: {
      sentence: `Est-on un maître lorsque l'on <span class="bg-liner px-2 text-background">continue d'apprendre</span> ?`,
      author: {
        name: "Kensho C. APPIN",
        title: "Fondateur Karate Budokenkyudo",
      },
      image: { src: "/photo.png", alt: "Senseï" },
    },
  },
  articles: [
    {
      title: "Nouvelle démonstration de karaté",
      description:
        "Venez assister à une démonstration exceptionnelle de techniques de karaté par nos experts.",
      image: "/karate2.jpg",
    },
    {
      title: "Entraînement en plein air",
      description:
        "Participez à une session d'entraînement de karaté en plein air ce weekend.",
      image: "/karate2.jpg",
    },
    {
      title: "Atelier de karaté pour débutants",
      description:
        "Initiez-vous aux bases du karaté avec notre nouvel atelier pour débutants.",
      image: "/karate2.jpg",
    },
    {
      title: "Compétition de karaté en ville",
      description:
        "Préparez-vous pour notre grande compétition annuelle de karaté, ouverte à tous les niveaux.",
      image: "/karate2.jpg",
    },
  ],
} as const;
