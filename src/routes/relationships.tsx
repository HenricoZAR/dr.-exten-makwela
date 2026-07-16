import { createFileRoute } from "@tanstack/react-router";
import { AnxietyTherapy } from "./anxiety-therapy";

export const Route = createFileRoute("/relationships")({
  head: () => ({
    meta: [
      { title: "Relationships Therapy — Dr. Exten Makwela" },
      { name: "description", content: "Relationship therapy with Dr. Exten Makwela." },
    ],
  }),
  component: AnxietyTherapy,
});
