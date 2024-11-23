import Navbar from "./../components/Navbar.jsx";
import Footer from "./../components/Footer.jsx";
import heroShopImage from "./../assets/hero-shop.jpg";
import SectionTitle from "./../components/SectionTitle.jsx";
import Container from "./../layout/Container.jsx";
import ProductBox from "./../components/ProductBox.jsx";
import { useQuery } from "react-query";
import { useState } from "react";
import { getDonuts } from "./../repository/donut.js";

function splitArray(array, maxItems) {
  const result = [];
  for (let i = 0; i < array.length; i += maxItems) {
    result.push(array.slice(i, i + maxItems));
  }
  return result;
}

export default function Shop() {
  const { data: donuts, isLoading } = useQuery("getDonuts", getDonuts);

  return (
    <>
      <Navbar />
      <div
        className="relative w-screen flex items-center justify-center"
        style={{
          height: "calc(100vh - 50px)",
        }}
      >
        <section
          className="w-screen h-screen bg-cover bg-bottom bg-no-repeat absolute -top-[50px]"
          style={{
            backgroundImage: `url(${heroShopImage})`,
          }}
        >
          <div className="w-full h-screen bg-blackOverlay flex justify-center items-center">
            <h1
              className="relative text-white font-bold"
              style={{
                fontSize: "16rem",
                textShadow: "10px 10px 10px rgba(0,0,0,.5)",
              }}
            >
              SHOP
            </h1>
          </div>
        </section>
      </div>
      <section className="w-screen min-h-screen bg-background">
        <Container>
          <SectionTitle title="PRODUCTS" />
          <div className="mt-10">
            {!isLoading ? (
              <ul className="w-full flex flex-wrap flex-col md:flex-row  gap-5">
                {donuts.map((donut) => (
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
