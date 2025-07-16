import Header from "./components/header";
import Main from "./components/main";

export default function Home() {
  return (
    <div>
      <main className="font-sans">
        <Header/>
        <Main/>
      </main>
    </div>
  );
}
