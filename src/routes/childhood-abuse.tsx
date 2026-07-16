import { createFileRoute } from "@tanstack/react-router";
import { AnxietyTherapy } from "./anxiety-therapy";

export const Route = createFileRoute("/childhood-abuse")({
  head: () => ({
    meta: [
      { title: "Childhood Abuse Therapy — Dr. Exten Makwela" },
      { name: "description", content: "Support for childhood abuse survivors with Dr. Exten Makwela." },
    ],
  }),
  component: AnxietyTherapy,
});
