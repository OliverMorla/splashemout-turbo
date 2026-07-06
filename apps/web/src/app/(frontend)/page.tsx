import { Hero } from "@/components/home/hero";
import { VideoPorthole } from "@/components/home/video-porthole";
import { PortholeCta } from "@/components/home/porthole-cta";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background overflow-hidden">
      <Hero />
      <VideoPorthole />
      <PortholeCta />
    </main>
  );
}
