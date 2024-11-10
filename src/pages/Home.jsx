import Navbar from "./../components/Navbar.jsx";
import HeroSection from "./../components/HeroSection.jsx";
import SectionTitle from "./../components/SectionTitle.jsx";
import Container from "./../layout/Container.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="w-screen h-screen bg-[#058740]">
        <HeroSection />
      </header>
      <section className="min-h-screen pt-10">
        <Container>
          <SectionTitle title="Best seller" />
        </Container>
      </section>
    </>
  );
}
