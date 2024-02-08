import About from "./about/About";
import Header from "./components/Header";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Introduction from "./home/Introduction";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Introduction />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
