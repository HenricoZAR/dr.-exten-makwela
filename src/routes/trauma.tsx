import { createFileRoute } from "@tanstack/react-router";
import { AnxietyTherapy } from "./anxiety-therapy";

export const Route = createFileRoute("/trauma")({
  head: () => ({
    meta: [
      { title: "Trauma Therapy — Dr. Exten Makwela" },
      { name: "description", content: "Trauma therapy with Dr. Exten Makwela." },
    ],
  }),
  component: AnxietyTherapy,
});
