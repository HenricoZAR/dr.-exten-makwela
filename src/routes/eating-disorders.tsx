import { createFileRoute } from "@tanstack/react-router";
import { AnxietyTherapy } from "./anxiety-therapy";

export const Route = createFileRoute("/eating-disorders")({
  head: () => ({
    meta: [
      { title: "Eating Disorders Therapy — Dr. Exten Makwela" },
      { name: "description", content: "Eating disorders therapy with Dr. Exten Makwela." },
    ],
  }),
  component: AnxietyTherapy,
});
