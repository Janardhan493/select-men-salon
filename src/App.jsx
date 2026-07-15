import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Packages />
        <About />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;