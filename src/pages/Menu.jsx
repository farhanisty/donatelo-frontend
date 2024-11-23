import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDonuts } from "./../repository/donut.js";
import Navbar from "./../components/Navbar.jsx";
import Footer from "./../components/Footer.jsx";
import Container from "./../layout/Container.jsx";
import SectionTitle from "./../components/SectionTitle.jsx";
import ProductBox from "./../components/ProductBox.jsx";

export default function Menu() {
  const { id } = useParams();
  const { data: donuts, isLoading } = useQuery("getDonuts", getDonuts);
  const baseImageUrl = import.meta.env.VITE_BASE_IMAGE_URL;

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  let donut = null;
  for (const d of donuts) {
    if (d.id == id) {
      donut = d;
    }
  }

  if (!donut) {
    return <h1>404 NOT FOUND</h1>;
  }

  const popularDonut = donuts.slice(-3).reverse();

  return (
    <>
      <Navbar solid={true} />
      <main className="min-h-screen bg-background">
        <section className="py-10 border-b">
          <Container>
            <div className="flex flex-col md:flex-row w-full gap-10 justify-center items-center">
              <div>
                <img
                  width="600"
                  src={`${baseImageUrl}/${donut.image}`}
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-3xl font-bold mb-3">{donut.name}</h1>
                <h2 className="mb-3">{donut.description}</h2>
                <h3 className="text-2xl mb-5">
                  <span className="font-semibold">Rp. {donut.price}</span>/pcs
                </h3>
                <button className="cursor-pointer inline-block bg-primary py-3 px-5 text-white">
                  Add to cart
                </button>
              </div>
            </div>
          </Container>
        </section>

        <section className="pt-8">
          <Container>
            <SectionTitle title="related product" />
            <ul className="w-full flex flex-col md:flex-row justify-between gap-5 mt-10">
              {donuts
                .slice(-3)
                .reverse()
                .map((donut) => {
                  return (
                    <ProductBox
                      id={donut.id}
                      name={donut.name}
                      key={donut.id}
                      price={donut.price}
                      image={donut.image}
                    />
                  );
                })}
            </ul>
          </Container>
        </section>
        <Footer />
      </main>
    </>
  );
}
