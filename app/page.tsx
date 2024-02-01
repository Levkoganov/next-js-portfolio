import Header from "./components/Header";
import Nav from "./components/Nav";
import Introduction from "./home/introduction/Introduction";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Introduction />
    </main>
  );
}
