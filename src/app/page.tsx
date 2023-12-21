import AboutUs from "@/components/AboutUs";
import Certificates from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Projects from "@/components/Project";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Link href="#About" passHref>
        <AboutUs />
      </Link>
      <Link href="#Experience" passHref>
        <Experience />
      </Link>
      <Link href="#Projects" passHref>
        <Projects />
      </Link>
      <Link href="#Certifications" passHref>
        <Certificates />
      </Link>
      <Link href="#Contact" passHref>
        <Contact />
      </Link>
      <Footer />
    </div>
  );
}
