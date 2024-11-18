import Navbar from "./../components/Navbar.jsx";
import Footer from "./../components/Footer.jsx";
import HeroSection from "./../components/HeroSection.jsx";
import SectionTitle from "./../components/SectionTitle.jsx";
import Container from "./../layout/Container.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <header
        className="relative top-0 w-screen"
        style={{
          height: "calc(100vh - 50px)",
        }}
      >
        <HeroSection />
      </header>
      <section className="min-h-screen bg-background pt-10">
        <Container>
          <SectionTitle title="Best seller" />
          <p className="max-w-[400px] pt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eum
            rerum distinctio. Expedita minus eligendi earum assumenda molestias
            temporibus incidunt?
          </p>
        </Container>
      </section>

      <Footer />
    </>
  );
}
