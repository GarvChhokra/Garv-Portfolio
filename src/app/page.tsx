import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutUs />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
