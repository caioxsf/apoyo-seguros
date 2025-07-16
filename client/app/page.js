import Header from "./components/header";
import Main from "./components/main";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <main className="font-sans">
        <Header/>
        <Main/>
        <Services/>
      </main>
    </div>
  );
}
