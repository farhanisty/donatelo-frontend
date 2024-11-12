import Navbar from "./../components/Navbar.jsx";
import HeroSection from "./../components/HeroSection.jsx";
import SectionTitle from "./../components/SectionTitle.jsx";
import Container from "./../layout/Container.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="w-screen h-screen bg-primary">
        <HeroSection />
      </header>
      <section className="min-h-screen bg-[#FFFBF2] pt-10">
        <Container>
          <SectionTitle title="Best seller" />
          <p className="max-w-[400px] pt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eum
            rerum distinctio. Expedita minus eligendi earum assumenda molestias
            temporibus incidunt?
          </p>
        </Container>
      </section>
    </>
  );
}
