import { useQuery } from "react-query";
import Navbar from "./../components/Navbar.jsx";
import Footer from "./../components/Footer.jsx";
import HeroSection from "./../components/HeroSection.jsx";
import SectionTitle from "./../components/SectionTitle.jsx";
import Container from "./../layout/Container.jsx";
import ProductBox from "./../components/ProductBox.jsx";
import { getDonuts } from "./../repository/donut.js";

export default function Home() {
  const { data: donuts, error, isLoading } = useQuery("getDonuts", getDonuts);

  if (error) {
    return <h1>Fetch error: {error.message}</h1>;
  }

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
          <SectionTitle title="Latest Product" />
          <p className="max-w-[400px] pt-10">
            Don&apos;t miss the favorites everyone is raving
            about—Donatelo&apos;s best-sellers are more than just donuts;
            they’re moments of pure joy. Taste the legend today!
          </p>

          <div className="mt-10">
            {!isLoading ? (
              <ul className="w-full flex flex-col md:flex-row justify-between gap-5">
                {donuts
                  .slice(-3)
                  .reverse()
                  .map((donut) => (
                    <ProductBox
                      name={donut.name}
                      key={donut.id}
                      price={donut.price}
                      image={donut.image}
                    />
                  ))}
              </ul>
            ) : (
              <h1>Lodaing</h1>
            )}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
