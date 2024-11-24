import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

import heroImage from "../assets/donuts.webp";
import donateloStoreImage from "../assets/donatelo-store.webp";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section
        className="w-screen relative"
        style={{
          height: "calc(100vh - 50px)",
        }}
      >
        <div
          className="relative w-screen h-screen bg-cover bg-center bg-no-repeat absolute -top-[50px]"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute w-screen h-full bg-blackOverlay flex justify-center items-center">
            <h1
              className="md:text-[10rem] text-5xl text-white font-bold"
              style={{
                textShadow: "10px 10px 10px rgba(0,0,0,.5)",
              }}
            >
              CONTACT
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-background flex w-screen flex flex-col md:flex-row">
        <div className="w-screen md:w-2/5 px-8 py-10">
          <h1 className="mb-6">Contact</h1>
          <h2 className="text-4xl md:text-5xl font-bold max-w-[440px] mb-5">
            Let’s start the conversation.
          </h2>
          <p className="max-w-[470px] text-xs text-justify">
            Send us an email at donatelo@test.com or use the form below. If
            you&apos;re feeling a little shy but want to provide constructive
            anonymous feedback, you may do so here. We also recommend using the
            anonymous feedback form if you do not want to share your contact
            information when providing feedback.
          </p>
          <ContactForm />
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
