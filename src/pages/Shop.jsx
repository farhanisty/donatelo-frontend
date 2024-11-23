import Navbar from "./../components/Navbar.jsx";
import heroShopImage from "./../assets/hero-shop.jpg";

export default function Shop() {
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
      <div className="w-screen min-h-screen"></div>
    </>
  );
}
