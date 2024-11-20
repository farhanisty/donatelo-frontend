import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./../components/Navbar.jsx";
import Footer from "./../components/Footer.jsx";
import HeroSection from "./../components/HeroSection.jsx";
import SectionTitle from "./../components/SectionTitle.jsx";
import Container from "./../layout/Container.jsx";
import ProductBox from "./../components/ProductBox.jsx";

export default function Home() {
  const [donuts, setDonuts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8005/api/menu").then((res) => {
      const donuts = res.data.data.slice(0, 3);
      console.log(donuts);
      setDonuts(donuts);
    });
  }, []);

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
            Don&apos;t miss the favorites everyone is raving
            about—Donatelo&apos;s best-sellers are more than just donuts;
            they’re moments of pure joy. Taste the legend today!
          </p>

          <div className="mt-10">
            <ul className="w-full flex flex-col md:flex-row justify-between gap-5">
              {donuts.map((donut) => (
                <ProductBox
                  name={donut.name}
                  key={donut.id}
                  price={donut.price}
                  image={donut.image}
                />
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
