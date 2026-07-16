import { createFileRoute } from "@tanstack/react-router";
import { AnxietyTherapy } from "./anxiety-therapy";

export const Route = createFileRoute("/depression")({
  head: () => ({
    meta: [
      { title: "Depression Therapy — Dr. Exten Makwela" },
      { name: "description", content: "Depression therapy with Dr. Exten Makwela." },
    ],
  }),
  component: AnxietyTherapy,
});
