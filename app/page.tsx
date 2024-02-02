import About from "./About/About";
import Header from "./components/Header";
import Introduction from "./home/introduction/Introduction";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Introduction />
      <About />
    </main>
  );
}
