import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

import heroImage from "../assets/donuts.webp";
import donateloStoreImage from "../assets/donatelo-store.webp";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="w-screen h-screen">
        <img
          className="object-cover object-center w-screen h-screen max-h-screen"
          src={heroImage}
          alt="donuts"
        />
      </section>

      <section className="bg-background flex w-screen flex flex-col md:flex-row">
        <div className="w-screen md:w-2/5 px-8 py-10">
          <h1 className="mb-6">Contact</h1>
          <h2 className="text-4xl md:text-5xl font-bold max-w-[440px] mb-5">
            Let’s start the conversation.
          </h2>
          <p className="max-w-[470px] text-xs text-justify">
            Send us an email at donatelo@test.com or use the form below. If
            you're feeling a little shy but want to provide constructive
            anonymous feedback, you may do so here. We also recommend using the
            anonymous feedback form if you do not want to share your contact
            information when providing feedback.
          </p>
        </div>
        <div className="w-screen md:w-3/5">
          <img
            className="min-w-full object-cover object-center max-h-screen"
            src={donateloStoreImage}
            alt="donatelo store"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
