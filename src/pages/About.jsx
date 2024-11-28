import heroAbout from "./../assets/hero-about.jpg";
import Navbar from "./../components/Navbar.jsx";
import Footer from "./../components/Footer.jsx";

export default function About() {
  return (
    <>
      <Navbar solid={true} />
      <main
        className="bg-background"
        style={{
          minHeight: "calc(100vh - 50px)",
        }}
      >
        <div className="relative">
          <img
            src={heroAbout}
            alt="Delicious Donuts"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-2">About Donatelo</h2>
            <p className="text-lg text-center">
              A shop that provides various kinds of food and drinks
              <br />
              Our special food is various flavors of donuts
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 mb-10">
          <h3 className="text-2xl font-bold text-center mb-6">
            Company Profiles
          </h3>
          <p className="text-lg leading-relaxed mb-4 text-center">
            Welcome to &quot;DONATELO&quot; your go-to spot for a delightful
            variety of donuts and beverages! Our shop specializes in freshly
            made donuts that come in a wide range of unique flavors, from
            classic glazed and chocolate sprinkles to innovative flavors like
            matcha, salted caramel, and fruity strawberry cheesecake. We believe
            that everyone should enjoy a tasty treat without breaking the bank,
            so all our donuts are offered at affordable prices without
            compromising quality.
          </p>
          <p className="text-lg leading-relaxed text-center">
            In addition to our signature donuts, we offer a selection of
            refreshing drinks, including iced coffees, teas, and specialty
            drinks to perfectly pair with your sweet treats. Whether you&apos;re
            in the mood for a quick snack or looking to satisfy your sweet
            tooth, &quot;Sweet Rings&quot; is the perfect place to enjoy
            high-quality donuts that are as affordable as they are delicious.
            Come visit us and taste the joy in every bite!
          </p>
        </div>
        <Footer />
      </main>
    </>
  );
}
