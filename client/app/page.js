import About from "./components/about";
import Header from "./components/header";
import Main from "./components/main";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <main className="font-sans bg-[#000c17]">
        <Header/>
        <Main/>
        <Services/>
        <About/>
      </main>
    </div>
  );
}
