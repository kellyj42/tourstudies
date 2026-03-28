import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tour Study Uganda Ltd",
    short_name: "Tour Study Uganda",
    description:
      "A Future Beyond Borders. Study abroad guidance for students seeking education opportunities abroad.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9fd",
    theme_color: "#734F96",
    icons: [
      {
        src: "/fevacon.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/imglogo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
