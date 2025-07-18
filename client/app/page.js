import About from "./components/about";
import FaleConosco from "./components/fale_conosco";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import SectionValue from "./components/section_value";
import Services from "./components/services";

export default function Home() {
  return (
    <div>
      <main className="font-sans bg-[#000c17]">
        <Header/>
        <Main/>
        <Services/>
        <About/>
        <SectionValue/>
        <FaleConosco/>
        <Footer/>
      </main>
    </div>
  );
}
