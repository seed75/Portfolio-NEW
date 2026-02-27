import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Contact />
    </main>
  );
}
